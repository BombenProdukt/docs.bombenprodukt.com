<?php

declare(strict_types=1);

namespace App\CommonMark\Admonitions;

use League\CommonMark\Node\Node;
use League\CommonMark\Renderer\ChildNodeRendererInterface;
use League\CommonMark\Renderer\NodeRendererInterface;
use League\CommonMark\Util\HtmlElement;

final class AdmonitionRenderer implements NodeRendererInterface
{
    public function render(Node $node, ChildNodeRendererInterface $childRenderer): \Stringable
    {
        Admonition::assertInstanceOf($node);

        $attrs = $node->data->get('attributes');

        $attrs['class'] ??= 'mb-4 admonition relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11 bg-background text-foreground';

        if ($type = $node->getType()) {
            $attrs['class'] .= " admonition-{$type}";
        }

        return new HtmlElement(
            'div',
            $attrs,
            new HtmlElement(
                'p',
                ['class' => 'text-sm leading-7 m-0'],
                $childRenderer->renderNodes($node->children()),
            ),
        );
    }
}
