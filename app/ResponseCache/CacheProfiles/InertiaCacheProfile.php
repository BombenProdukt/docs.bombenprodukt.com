<?php

declare(strict_types=1);

namespace App\ResponseCache\CacheProfiles;

use Illuminate\Http\Request;
use Spatie\ResponseCache\CacheProfiles\CacheAllSuccessfulGetRequests;

final class InertiaCacheProfile extends CacheAllSuccessfulGetRequests
{
    public function shouldCacheRequest(Request $request): bool
    {
        if ($request->ajax() && $request->isMethod('get')) {
            // Cache Inertia (= AJAX) GET requests!
            return true;
        }

        if ($this->isRunningInConsole()) {
            return false;
        }

        return $request->isMethod('get');
    }
}
