<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

final class GenerateBladeIconsFamilies extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-blade-icons-families';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Blade Icons families.';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        foreach ($this->getFamilies() as $family) {
            File::put(
                base_path('content/packages/blade-icons/1.0/families/'.$family['family'].'.md'),
                Str::replace(
                    ['{{ title }}', '{{ family }}', '{{ prefix }}'],
                    [Str::headline($family['family']), $family['family'], $family['prefix']],
                    File::get(base_path('stubs/blade-icons-family.stub')),
                ),
            );
        }
    }

    private function getFamilies(): array
    {
        return [
            [
                'family' => 'academicons',
                'prefix' => 'academicons',
            ],
            [
                'family' => 'akar-icons',
                'prefix' => 'akar',
            ],
            [
                'family' => 'anron',
                'prefix' => 'anron',
            ],
            [
                'family' => 'ant-design-icons',
                'prefix' => 'ant-design',
            ],
            [
                'family' => 'bootstrap-icons',
                'prefix' => 'bootstrap',
            ],
            [
                'family' => 'boxicons',
                'prefix' => 'boxicons',
            ],
            [
                'family' => 'bytesize-icons',
                'prefix' => 'bytesize',
            ],
            [
                'family' => 'carbon-icons',
                'prefix' => 'carbon',
            ],
            [
                'family' => 'clarity-icons',
                'prefix' => 'clarity',
            ],
            [
                'family' => 'codicons',
                'prefix' => 'codicons',
            ],
            [
                'family' => 'coolicons',
                'prefix' => 'coolicons',
            ],
            [
                'family' => 'coreui-icons',
                'prefix' => 'core-ui',
            ],
            [
                'family' => 'cryptocurrency-icons',
                'prefix' => 'cryptocurrency',
            ],
            [
                'family' => 'css-icons',
                'prefix' => 'css',
            ],
            [
                'family' => 'devicons',
                'prefix' => 'devicons',
            ],
            [
                'family' => 'elusive-icons',
                'prefix' => 'elusive',
            ],
            [
                'family' => 'emblemicons',
                'prefix' => 'emblem',
            ],
            [
                'family' => 'entypo',
                'prefix' => 'entypo',
            ],
            [
                'family' => 'eos-icons',
                'prefix' => 'eos',
            ],
            [
                'family' => 'eva-icons',
                'prefix' => 'eva',
            ],
            [
                'family' => 'evil-icons',
                'prefix' => 'evil',
            ],
            [
                'family' => 'feather-icons',
                'prefix' => 'feather',
            ],
            [
                'family' => 'file-icons',
                'prefix' => 'file',
            ],
            [
                'family' => 'flag-icons',
                'prefix' => 'flags',
            ],
            [
                'family' => 'fluent-ui-system-icons',
                'prefix' => 'fluent-ui-system',
            ],
            [
                'family' => 'font-awesome',
                'prefix' => 'font-awesome-pro',
            ],
            [
                'family' => 'font-awesome-pro',
                'prefix' => 'font-awesome',
            ],
            [
                'family' => 'fontaudio',
                'prefix' => 'fontaudio',
            ],
            [
                'family' => 'fontisto',
                'prefix' => 'fontisto',
            ],
            [
                'family' => 'fork-awesome',
                'prefix' => 'fork-awesome',
            ],
            [
                'family' => 'google-material-design-icons',
                'prefix' => 'google-material-design',
            ],
            [
                'family' => 'govicons',
                'prefix' => 'govicons',
            ],
            [
                'family' => 'grommet-icons',
                'prefix' => 'grommet',
            ],
            [
                'family' => 'health-icons',
                'prefix' => 'health',
            ],
            [
                'family' => 'heroicons',
                'prefix' => 'heroicons',
            ],
            [
                'family' => 'icomoon',
                'prefix' => 'icomoon-essential',
            ],
            [
                'family' => 'icomoon-essential',
                'prefix' => 'icomoon-ultimate',
            ],
            [
                'family' => 'icomoon-ultimate',
                'prefix' => 'icomoon',
            ],
            [
                'family' => 'iconic',
                'prefix' => 'icon-park',
            ],
            [
                'family' => 'iconic-pro',
                'prefix' => 'iconic-pro',
            ],
            [
                'family' => 'iconoir',
                'prefix' => 'iconic',
            ],
            [
                'family' => 'iconpark',
                'prefix' => 'iconoir',
            ],
            [
                'family' => 'iconsax',
                'prefix' => 'iconsax',
            ],
            [
                'family' => 'ikonate',
                'prefix' => 'ikonate',
            ],
            [
                'family' => 'ionicons',
                'prefix' => 'ionicons',
            ],
            [
                'family' => 'jam-icons',
                'prefix' => 'jam',
            ],
            [
                'family' => 'lindua',
                'prefix' => 'lindua',
            ],
            [
                'family' => 'line-awesome',
                'prefix' => 'line-awesome',
            ],
            [
                'family' => 'linearicons',
                'prefix' => 'linearicons-premium',
            ],
            [
                'family' => 'linearicons-premium',
                'prefix' => 'linearicons',
            ],
            [
                'family' => 'lucide',
                'prefix' => 'lucide',
            ],
            [
                'family' => 'majesticons',
                'prefix' => 'majesticons-pro',
            ],
            [
                'family' => 'majesticons-pro',
                'prefix' => 'majesticons',
            ],
            [
                'family' => 'maki-icons',
                'prefix' => 'maki',
            ],
            [
                'family' => 'microns',
                'prefix' => 'microns',
            ],
            [
                'family' => 'mono-icons',
                'prefix' => 'mono',
            ],
            [
                'family' => 'octicons',
                'prefix' => 'octicons',
            ],
            [
                'family' => 'pepicons',
                'prefix' => 'pepicons',
            ],
            [
                'family' => 'phosphor-flat-icons',
                'prefix' => 'phosphor-flat',
            ],
            [
                'family' => 'phosphor-icons',
                'prefix' => 'phosphor',
            ],
            [
                'family' => 'pixelarticons',
                'prefix' => 'pixelarticons-pro',
            ],
            [
                'family' => 'pixelarticons-pro',
                'prefix' => 'pixelarticons',
            ],
            [
                'family' => 'polaris-icons',
                'prefix' => 'polaris',
            ],
            [
                'family' => 'prime-icons',
                'prefix' => 'prime',
            ],
            [
                'family' => 'radix-icons',
                'prefix' => 'radix',
            ],
            [
                'family' => 'remix-icon',
                'prefix' => 'remix',
            ],
            [
                'family' => 'rpg-awesome',
                'prefix' => 'rpg-awesome',
            ],
            [
                'family' => 'simple-icons',
                'prefix' => 'simple-icons',
            ],
            [
                'family' => 'simple-line-icons',
                'prefix' => 'simple-line',
            ],
            [
                'family' => 'system-uicons',
                'prefix' => 'systemn-ui',
            ],
            [
                'family' => 'tabler-icons',
                'prefix' => 'tabler',
            ],
            [
                'family' => 'teenyicons',
                'prefix' => 'teenyicons',
            ],
            [
                'family' => 'twemoji',
                'prefix' => 'twemoji',
            ],
            [
                'family' => 'typicons',
                'prefix' => 'typicons',
            ],
            [
                'family' => 'uiw-icons',
                'prefix' => 'uiw',
            ],
            [
                'family' => 'unicons',
                'prefix' => 'unicons',
            ],
            [
                'family' => 'vaadin-icons',
                'prefix' => 'vaadin',
            ],
            [
                'family' => 'weather-icons',
                'prefix' => 'weather',
            ],
            [
                'family' => 'yr-weather',
                'prefix' => 'yr-weather-symbols',
            ],
            [
                'family' => 'zondicon',
                'prefix' => 'zondicons',
            ],
        ];
    }
}
