<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Author extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {

        $author = new FieldsBuilder('author');

        $author
            ->setLocation('post_type', '==', 'post');

        $author
            ->addPostObject('author', [
                'post_type' => 'author',
                'return_format' => 'id',
                'allow_null' => 1,
            ]);

        return $author->build();
    }
}
