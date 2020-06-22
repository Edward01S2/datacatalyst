<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Report extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $report = new FieldsBuilder('report');

        $report
            ->setLocation('post_type', '==', 'report');

        $report
            ->addText('title')
            ->addText('author')
            // ->addDatePicker('date', [
            //     'display_format' => 'm/d/Y'
            // ])
            ->addImage('thumbnail')
            ->addFile('file');

        return $report->build();
    }
}
