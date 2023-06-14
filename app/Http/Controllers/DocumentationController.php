<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\CommonMark\Admonitions\AdmonitionExtension;
use BombenProdukt\Lighty\CommonMark\CacheRenderer;
use BombenProdukt\Lighty\CommonMark\FencedCodeRenderer;
use BombenProdukt\Lighty\CommonMark\LocalRenderer;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\ConverterInterface;
use League\CommonMark\Extension\CommonMark\Node\Block\FencedCode;
use League\CommonMark\Extension\CommonMark\Node\Block\Heading;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;
use League\CommonMark\Node\NodeIterator;
use League\CommonMark\Parser\MarkdownParser;
use Spatie\ResponseCache\Middlewares\CacheResponse;
use Spatie\YamlFrontMatter\YamlFrontMatter;

final class DocumentationController extends Controller
{
    public function __construct()
    {
        $this->middleware(CacheResponse::class);
    }

    public function __invoke(string $type, string $project, string $version, string $page): Response
    {
        $document = YamlFrontMatter::parse(\file_get_contents(base_path("content/{$type}/{$project}/{$version}/{$page}.md")));

        return Inertia::render('Documentation', [
            'content' => $this
                ->getCommonMarkConverter()
                ->convert($document->body())
                ->getContent(),
            'document' => [
                'title' => $document->matter('title'),
                'description' => $document->matter('description'),
                'breadcrumbs' => $document->matter('breadcrumbs'),
            ],
            'navigation' => Config::get("documentum.{$type}.{$project}")[$version]['navigation'],
            'tableOfContents' => $this->getTableOfContents($document->body()),
        ]);
    }

    private function getTableOfContents(string $body): array
    {
        $parser = new MarkdownParser((new CommonMarkConverter())->getEnvironment());

        return collect($parser->parse($body)->iterator(NodeIterator::FLAG_BLOCKS_ONLY))
            ->filter(fn ($node) => $node instanceof Heading)
            ->map(fn (Heading $node) => [
                'name' => $name = $node->firstChild()->getLiteral(),
                'href' => Str::of($name)->lower()->kebab()->toString(),
                'level' => $node->getLevel(),
            ])
            ->values()
            ->toArray();
    }

    private function getCommonMarkConverter(): ConverterInterface
    {
        $converter = new CommonMarkConverter([
            'heading_permalink' => [
                'html_class' => 'heading-permalink',
                'id_prefix' => '',
                'apply_id_to_heading' => true,
                'heading_class' => '',
                'fragment_prefix' => '',
                'insert' => 'before',
                'min_heading_level' => 1,
                'max_heading_level' => 6,
                'title' => 'Permalink',
                'symbol' => '#',
                'aria_hidden' => true,
            ],
            'table_of_contents' => [
                'html_class' => 'table-of-contents',
                'position' => 'top',
                'style' => 'bullet',
                'min_heading_level' => 1,
                'max_heading_level' => 6,
                'normalize' => 'relative',
                'placeholder' => null,
            ],
        ]);
        $converter->getEnvironment()->addExtension(new HeadingPermalinkExtension());
        $converter->getEnvironment()->addExtension(new AdmonitionExtension());
        $converter->getEnvironment()->addRenderer(FencedCode::class, new FencedCodeRenderer(new CacheRenderer(new LocalRenderer())));

        return $converter;
    }
}
