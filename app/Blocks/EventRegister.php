<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class EventRegister extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'EventRegister';

    /**
     * The description of the block.
     *
     * @var string
     */
    public $description = 'Lorem ipsum...';

    /**
     * The category this block belongs to.
     *
     * @var string
     */
    public $category = 'common';

    /**
     * The icon of this block.
     *
     * @var string|array
     */
    public $icon = 'screenoptions';

    /**
     * An array of block keywords.
     *
     * @var array
     */
    public $keywords = [];

    /**
     * An array of post types the block will be available to.
     *
     * @var array
     */
    public $post_types = ['post', 'page', 'event'];

    /**
     * The default display mode of the block that is shown to the user.
     *
     * @var string
     */
    public $mode = 'edit';

    /**
     * The block alignment class.
     *
     * @var string
     */
    public $align = 'wide';

    /**
     * Features supported by the block.
     *
     * @var array
     */
    public $supports = [];

    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'title' => get_field('title'),
            'content' => get_field('content'),
            'link' => get_field('link'),
            'form' => get_field('form'),
            'register' => get_field('register', get_the_ID()),
        ];
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    {
        //
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        if(class_exists('gfapi')) {
            $forms = \GFAPI::get_forms();
            $choices= [];
            foreach($forms as $form) {
                $choices[] = [
                    $form['id'] => $form['title']
                ];
            }
            //var_dump($choices);
        }

        $eventRegister = new FieldsBuilder('event_register');

        $eventRegister
            ->addText('title')
            ->addWysiwyg('content')
            ->addTrueFalse('register form')
            ->addSelect('form', [
                'label' => 'Select Form',
                'choices' => $choices,
            ])
                ->conditional('register form', '==', '1');

        return $eventRegister->build();
    }

}
