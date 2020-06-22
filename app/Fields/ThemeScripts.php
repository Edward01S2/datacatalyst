<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class ThemeScripts extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $themeScripts = new FieldsBuilder('themeScripts', [
            'title' => 'Theme Scripts',
            'style' => 'seamless'
        ]);

        $themeScripts
            ->addTextarea('header_scripts', [
                'label' => 'Header Scripts',
                'rows' => '15'
            ])
            ->addTextarea('footer_scripts', [
                'label' => 'Footer Scripts',
                'rows' => '15'
            ])
            ->setLocation('options_page', '==', 'acf-options-scripts');

        return $themeScripts->build();
    }
}
