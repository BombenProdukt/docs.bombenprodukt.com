<?php

declare(strict_types=1);

namespace App\CommonMark\Admonitions;

use League\CommonMark\Node\Block\AbstractBlock;
use League\CommonMark\Parser\Block\AbstractBlockContinueParser;
use League\CommonMark\Parser\Block\BlockContinue;
use League\CommonMark\Parser\Block\BlockContinueParserInterface;
use League\CommonMark\Parser\Block\BlockContinueParserWithInlinesInterface;
use League\CommonMark\Parser\Cursor;
use League\CommonMark\Parser\InlineParserEngineInterface;
use League\CommonMark\Util\ArrayCollection;
use League\CommonMark\Util\RegexHelper;

final class AdmonitionParser extends AbstractBlockContinueParser implements BlockContinueParserWithInlinesInterface
{
    private Admonition $block;

    /**
     * @var ArrayCollection<string>
     */
    private ArrayCollection $strings;

    public function __construct()
    {
        $this->block = new Admonition();
        $this->strings = new ArrayCollection();
    }

    public function getBlock(): Admonition
    {
        return $this->block;
    }

    public function isContainer(): bool
    {
        return false;
    }

    public function canContain(AbstractBlock $childBlock): bool
    {
        return false;
    }

    public function canHaveLazyContinuationLines(): bool
    {
        return true;
    }

    public function parseInlines(InlineParserEngineInterface $inlineParser): void
    {
        $inlineParser->parse($this->block->getLiteral(), $this->block);
    }

    public function tryContinue(Cursor $cursor, BlockContinueParserInterface $activeBlockParser): ?BlockContinue
    {
        if ($cursor->getLine() === ':::') {
            return BlockContinue::finished();
        }

        $cursor->advanceToNextNonSpaceOrTab();
        $cursor->advanceBySpaceOrTab();

        return BlockContinue::at($cursor);
    }

    public function addLine(string $line): void
    {
        $this->strings[] = $line;
    }

    public function closeBlock(): void
    {
        $firstLine = $this->strings->first();

        if ($firstLine === false) {
            $firstLine = '';
        }

        $this->block->setHeader(RegexHelper::unescape(\trim($firstLine)));

        if ($this->strings->count() === 1) {
            $this->block->setLiteral('');
        } else {
            $this->block->setLiteral(\implode("\n", $this->strings->slice(1))."\n");
        }
    }
}
