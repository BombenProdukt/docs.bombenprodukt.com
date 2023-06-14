<?php

declare(strict_types=1);

namespace App\ResponseCache\Hasher;

use Illuminate\Http\Request;
use Spatie\ResponseCache\Hasher\DefaultHasher;

final class InertiaHasher extends DefaultHasher
{
    public function getHashFor(Request $request): string
    {
        $baseHash = parent::getHashFor($request);

        $contentType = $request->getContentTypeFormat();

        return "{$baseHash}-{$contentType}";
    }
}
