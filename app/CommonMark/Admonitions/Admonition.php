<?php

declare(strict_types=1);

namespace App\CommonMark\Admonitions;

use League\CommonMark\Node\Block\AbstractBlock;
use League\CommonMark\Node\StringContainerInterface;

final class Admonition extends AbstractBlock implements StringContainerInterface
{
    protected string $literal;

    private ?string $header = '';

    public function getTitle(): ?string
    {
        $words = $this->getHeaderWords();

        if (\count($words) > 1) {
            \array_shift($words);

            return \implode(' ', $words);
        }

        return null;
    }

    public function getType(): ?string
    {
        $words = $this->getHeaderWords();

        if (\count($words) > 0) {
            return $words[0];
        }

        return null;
    }

    public function getHeaderWords(): array
    {
        return \preg_split('/\s+/', $this->header ?? '') ?: [];
    }

    public function setHeader($header): void
    {
        $this->header = $header;
    }

    public function setLiteral(string $literal): void
    {
        $this->literal = $literal;
    }

    public function getLiteral(): string
    {
        return $this->literal;
    }
}
