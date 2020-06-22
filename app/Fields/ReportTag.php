<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class ReportTag extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $reportTag = new FieldsBuilder('report_tag');

        $reportTag
            ->setLocation('taxonomy', '==', 'tag');

        $reportTag
            ->addImage('Icon')
            ->addColorPicker('Color');

        return $reportTag->build();
    }
}
