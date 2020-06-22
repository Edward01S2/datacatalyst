<?php

namespace App\View\Composers;
use Roots\Acorn\View\Composer;

use Log1x\Navi\Facades\Navi;

class Header extends Composer
{
    protected static $views = [
        'partials.header',
    ];

    public function with()
    {
        return [
            'logo' => get_field('Logo', 'options'),
            'logo_alt' => get_field('Logo Inverse', 'options'),
            'social' => get_field('Icons', 'options'),
            'navigation' => $this->navigation(),
            'home' => ($this->home()) ? 'true' : 'false',
        ];
    }

    public function home() {
        return is_front_page();
    }

    public function navigation()
    {
        if (Navi::build()->isEmpty()) {
            return;
        }
        
        return Navi::build()->toArray();
    }

   
}