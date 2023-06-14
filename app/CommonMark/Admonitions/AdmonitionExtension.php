<?php

declare(strict_types=1);

namespace App\CommonMark\Admonitions;

use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Extension\ExtensionInterface;

final class AdmonitionExtension implements ExtensionInterface
{
    public function register(EnvironmentBuilderInterface $environment): void
    {
        $environment->addBlockStartParser(new AdmonitionStartParser());
        $environment->addRenderer(Admonition::class, new AdmonitionRenderer());
    }
}
