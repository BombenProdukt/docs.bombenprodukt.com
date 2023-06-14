<?php

declare(strict_types=1);

namespace App\Console\Commands;

use App\CommonMark\Admonitions\AdmonitionExtension;
use BombenProdukt\Lighty\CommonMark\CacheRenderer;
use BombenProdukt\Lighty\CommonMark\FencedCodeRenderer;
use BombenProdukt\Lighty\CommonMark\LocalRenderer;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\ConverterInterface;
use League\CommonMark\Extension\CommonMark\Node\Block\FencedCode;
use League\CommonMark\Extension\CommonMark\Node\Block\Heading;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;
use League\CommonMark\Node\NodeIterator;
use League\CommonMark\Parser\MarkdownParser;
use Spatie\YamlFrontMatter\YamlFrontMatter;

final class CompileContent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:compile-content';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Compile content to a single JSON file.';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $files = [];

        foreach (File::allFiles(base_path('content')) as $file) {
            if ($file->isDir()) {
                continue;
            }

            $files[$file->getRelativePathname()] = $this->compileFile($file->getRelativePathname());
        }

        File::put(base_path('compiled-content.json'), \json_encode($files));
    }

    private function compileFile(string $filePath): array
    {
        [$type, $project, $version] = \explode('/', $filePath);

        $document = YamlFrontMatter::parse(\file_get_contents(base_path("content/{$filePath}")));

        return [
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
        ];
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
