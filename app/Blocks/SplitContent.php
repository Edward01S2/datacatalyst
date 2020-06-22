<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class SplitContent extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'SplitContent';

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
    public $post_types = ['post', 'page', 'people'];

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
            'image_left' => get_field('image_left'),
            'content_left' => get_field('content_left'),
            'border' => (get_field('border')) ? true : false,
            'image_right' => get_field('image_right'),
            'content_right' => get_field('content_right'),
            'form_right' => get_Field('form_right'),
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

            $gravityforms = new FieldsBuilder('gravityforms');
            $gravityforms
                ->addSelect('form', [
                    'label' => 'Select Form',
                    'choices' => $choices,
                ]);
        }

        $splitContent = new FieldsBuilder('split_content');

        $splitContent
        ->addTab('Left')
            ->addSelect('type_left', [
                'label' => 'Type',
                'choices' => [
                    'Image',
                    'Content',
                ],
            ])
            ->addImage('image_left')
                ->conditional('type_left', '==', 'Image')
            ->addWysiwyg('content_left')
                ->conditional('type_left', '==', 'Content')
           
        ->addTab('Right')
            ->addTrueFalse('border')
            ->addSelect('type_right', [
                'label' => 'Type',
                'choices' => [
                    'Image',
                    'Content',
                    'Form',
                ],
            ])
            ->addImage('image_right')
                ->conditional('type_right', '==', 'Image')
            ->addWysiwyg('content_right')
                ->conditional('type_right', '==', 'Content')
            ->addSelect('form_right', [
                'label' => 'Select Form',
                'choices' => $choices,
            ])
                ->conditional('type_right', '==', 'Form');

        return $splitContent->build();
    }

}
