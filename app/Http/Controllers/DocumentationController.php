<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\ResponseCache\Middlewares\CacheResponse;

final class DocumentationController extends Controller
{
    public function __construct()
    {
        $this->middleware(CacheResponse::class);
    }

    public function __invoke(string $type, string $project, string $version, string $page): Response
    {
        return Inertia::render(
            'Documentation',
            Arr::get(
                File::json(base_path('compiled-content.json')),
                "{$type}/{$project}/{$version}/{$page}.md",
            ),
        );
    }
}
