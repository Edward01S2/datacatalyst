<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class EventDetails extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'EventDetails';

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
        $id = get_the_ID();
        $start = get_field('event start', $id);
        $end = get_field('event end', $id);
        $zone = get_field('timezone', $id);

        $time = $start . ' - ' . $end . ' ' . $zone; 

        $location = get_field('map', $id);

        return [
            'date' => get_field('event date', get_the_ID()),
            'time' => $time,
            'address' => $location,
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
        $eventDetails = new FieldsBuilder('event_details');

        $eventDetails
            ->addTextarea('banner', [
                'placeholder' => 'Event Details Block',
                'maxlength' => 0,
            ]);

        return $eventDetails->build();
    }
}
