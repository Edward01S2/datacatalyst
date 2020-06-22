<?php

namespace App\View\Composers;
use Roots\Acorn\View\Composer;

use Log1x\Pagi\PagiFacade as Pagi;

class Index extends Composer
{
    protected static $views = [
        'index',
    ];

    public function with()
    {
        return [
          'pagination' => $this->pagination()
        ];
    }

    public function pagination()
    {
      $pagination = Pagi::build();

      return $pagination->links('components.pagination');
    }

}