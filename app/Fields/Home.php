<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Home extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $home = new FieldsBuilder('home', [
            'position' => 'side',
        ]);

        $home
            ->setLocation('page_type', '==', 'front_page');

        $home
            ->addFile("BG Video")
            ->addImage("BG Video Poster");


        return $home->build();
    }
}
