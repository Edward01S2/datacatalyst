<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Laws extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $laws = new FieldsBuilder('laws', [
            'style' => 'seamless'
        ]);

        $laws
            ->setLocation('post_type', '==', 'law');

        $laws
            ->addTab('General', ['placement' => 'top'])
                ->addText('Country')
                ->addRepeater('Content', ['layout' => 'block'])
                    ->addText('Heading')
                    ->addWysiwyg('Content')
                ->endRepeater()
            ->addTab('Scores', ['placement' => 'top'])
                ->addGroup('clear terms')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('specific harms')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('helpful processes')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('not retroactive')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('not harmful')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('free speech')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('simple consents')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('international commerce')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('fair enforcement')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup()
                ->addGroup('small enterprises')
                    ->addRange('score', [
                        'min' => 0,
                        'max' => 10,
                        'step' => 1,
                        'wrapper' => [
                            'width' => '25%'
                        ],
                    ])
                    ->addTextarea('content', [
                        'rows' => '4',
                        'wrapper' => [
                            'width' => '75%'
                        ],
                    ])
                ->endGroup();
                


        return $laws->build();
    }
}
