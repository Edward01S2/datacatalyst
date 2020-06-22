<?php

namespace App\View\Composers;
use Roots\Acorn\View\Composer;

use Log1x\Navi\Facades\Navi;

class Footer extends Composer
{
    protected static $views = [
        'partials.footer',
    ];

    public function with()
    {
        return [
            'footer_text' => get_field('Footer Text', 'options'),
            'footer_logo' => get_field('Footer Logo', 'options'),
            'footer_nav' => $this->navigation(),
        ];
    }

    public function navigation()
    {
        if (Navi::build('footer_navigation')->isEmpty()) {
            return;
        }
        
        return Navi::build('footer_navigation')->toArray();
    }

}