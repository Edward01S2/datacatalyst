<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class EventAgenda extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'EventAgenda';

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
            'agenda' => get_field('agenda'),
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
        $eventAgenda = new FieldsBuilder('event_agenda');

        $eventAgenda
            ->addText('title')
            ->addRepeater('agenda', [
                'layout' => 'block',
            ])
                ->addTimePicker('start', [
                    'return_format' => 'g:i A',
                    'wrapper' => [
                        'width' => '25%'
                    ]
                ])
                ->addText('title', [
                    'wrapper' => [
                        'width' => '75%'
                    ]
                ])
                ->addTextarea('content', [
                    'rows' => 2,
                ])
            ->endRepeater();

        return $eventAgenda->build();
    }

}
