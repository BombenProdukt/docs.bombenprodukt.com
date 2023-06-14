<?php

declare(strict_types=1);

return [
    'packages' => [
        'laravel-lighty' => [
            '1.0' => [
                'navigation' => [
                    'main' => [
                        [
                            'name' => 'Installation',
                            'href' => '/packages/laravel-lighty/1.0/installation',
                        ],
                        [
                            'name' => 'Configuration',
                            'href' => '/packages/laravel-lighty/1.0/configuration',
                        ],
                        [
                            'name' => 'Annotations',
                            'href' => '/packages/laravel-lighty/1.0/annotations/ranges',
                        ],
                        [
                            'name' => 'GitHub',
                            'href' => 'https://github.com/BombenProdukt/laravel-lighty',
                            'external' => true,
                        ],
                    ],
                    'sidebar' => [
                        [
                            'title' => 'Getting Started',
                            'items' => [
                                ['name' => 'Installation', 'href' => '/packages/laravel-lighty/1.0/installation'],
                                ['name' => 'Configuration', 'href' => '/packages/laravel-lighty/1.0/configuration'],
                            ],
                        ],
                        [
                            'title' => 'Annotations',
                            'items' => [
                                ['name' => 'Ranges', 'href' => '/packages/laravel-lighty/1.0/annotations/ranges'],
                                ['name' => 'Classes', 'href' => '/packages/laravel-lighty/1.0/annotations/classes'],
                                ['name' => 'Collapse', 'href' => '/packages/laravel-lighty/1.0/annotations/collapse'],
                                ['name' => 'Colorify', 'href' => '/packages/laravel-lighty/1.0/annotations/colorify'],
                                ['name' => 'Diffs', 'href' => '/packages/laravel-lighty/1.0/annotations/diffs'],
                                ['name' => 'Focus', 'href' => '/packages/laravel-lighty/1.0/annotations/focus'],
                                ['name' => 'Highlight', 'href' => '/packages/laravel-lighty/1.0/annotations/highlight'],
                                ['name' => 'Ids', 'href' => '/packages/laravel-lighty/1.0/annotations/ids'],
                                ['name' => 'Linkify', 'href' => '/packages/laravel-lighty/1.0/annotations/linkify'],
                                ['name' => 'Reindex', 'href' => '/packages/laravel-lighty/1.0/annotations/reindex'],
                            ],
                        ],
                        [
                            'title' => 'Extensions',
                            'items' => [
                                ['name' => 'CommonMark', 'href' => '/packages/laravel-lighty/1.0/extensions/commonmark'],
                            ],
                        ],
                        [
                            'title' => 'REST API',
                            'items' => [
                                ['name' => 'List Documents', 'href' => '/packages/laravel-lighty/1.0/rest-api#list-documents'],
                                ['name' => 'Create Document', 'href' => '/packages/laravel-lighty/1.0/rest-api#create-document'],
                                ['name' => 'Show Document', 'href' => '/packages/laravel-lighty/1.0/rest-api#show-document'],
                                ['name' => 'Delete Document', 'href' => '/packages/laravel-lighty/1.0/rest-api#delete-document'],
                                ['name' => 'List Languages', 'href' => '/packages/laravel-lighty/1.0/rest-api#list-languages'],
                                ['name' => 'Create Language', 'href' => '/packages/laravel-lighty/1.0/rest-api#create-language'],
                                ['name' => 'Show Language', 'href' => '/packages/laravel-lighty/1.0/rest-api#show-language'],
                                ['name' => 'Delete Language', 'href' => '/packages/laravel-lighty/1.0/rest-api#delete-language'],
                                ['name' => 'List Themes', 'href' => '/packages/laravel-lighty/1.0/rest-api#list-themes'],
                                ['name' => 'Create Theme', 'href' => '/packages/laravel-lighty/1.0/rest-api#create-theme'],
                                ['name' => 'Show Theme', 'href' => '/packages/laravel-lighty/1.0/rest-api#show-theme'],
                                ['name' => 'Delete Theme', 'href' => '/packages/laravel-lighty/1.0/rest-api#delete-theme'],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
];
