<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

$parent = acf_add_options_page([
    'page_title' => 'Theme Options',
    'menu_title' => 'Theme Options',
    'menu_slug'  => 'theme-options',
    'capability' => 'edit_theme_options',
    'position'   => '59.1',
    'autoload'   => true
]);

acf_add_options_sub_page(array(
    'page_title' 	=> 'Options',
    'menu_title' 	=> 'Options',
    'parent_slug' 	=> $parent['menu_slug'],
) );

acf_add_options_sub_page(array(
    'page_title' 	=> 'Scripts',
    'menu_title' 	=> 'Scripts',
    'parent_slug' 	=> $parent['menu_slug'],
) );

class ThemeOptions extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $forms = \GFAPI::get_forms();
        $choices= [];
        foreach($forms as $form) {
            $choices[] = [
                $form['id'] => $form['title']
            ];
        }
        //var_dump($choices);

        $gravityforms = new FieldsBuilder('gravityforms');
        $gravityforms
            ->addSelect('footer_form', [
                'label' => 'Select Form',
                'choices' => $choices,
            ]);

        $themeOptions = new FieldsBuilder('theme_options');

        $themeOptions
            ->setLocation('post_type', '==', 'post');

        $themeOptions
            ->setLocation('options_page', '==', 'acf-options-options')
            
            ->addTab('Logos', ['placement' => 'top'])
                ->addImage('Logo')
                ->addImage('Logo Inverse')
                ->addImage('Footer Logo')

            ->addTab('Footer', ['placement' => 'top'])
                ->addText('Footer Text')

            ->addTab('Forms', ['placement' => 'top'])
                ->addText('Signup Text')
                ->addImage('Signup Icon')
                ->addSelect('Signup Form', [
                    'label' => 'Select Form',
                    'choices' => $choices,
                ])

            ->addTab('Social', ['placement' => 'top'])
                ->addRepeater('Icons')
                    ->addImage('Icon')
                    ->addLink('Link')
                ->endRepeater();


        return $themeOptions->build();
    }
}
