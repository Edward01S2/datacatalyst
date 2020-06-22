<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Events extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $events = new FieldsBuilder('events');

        $events
            ->setLocation('post_type', '==', 'event');

        $events
            ->addDatePicker('event date', [
                'display_format' => 'm/d/y',
                'return_format' => 'F j, Y',
            ])
            ->addTimePicker('event start', [
                'wrapper' => [
                    'width' => '33.33%'
                ],
                'return_format' => 'g:iA'
            ])
            ->addTimePicker('event end', [
                'wrapper' => [
                    'width' => '33.33%'
                ],
                'return_format' => 'g:iA'
            ])
            ->addText('timezone', [
                'wrapper' => [
                    'width' => '33.33%'
                ]
            ])
            ->addTrueFalse('external registration')
            ->addLink('register')
            ->addGoogleMap('map');


        return $events->build();
    }
}
