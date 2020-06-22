<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Policies extends Block
{
    /**
     * The name of the block.
     *
     * @var string
     */
    public $name = 'Policies';

    /**
     * The block description.
     *
     * @var string
     */
    public $description = 'Lorem ipsum...';

    /**
     * The block category.
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
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'laws' => $this->getLaws(),
        ];
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $policies = new FieldsBuilder('policies');

        $policies
            ->addTextarea('laws', [
                'placeholder' => 'Laws Block',
                'maxlength' => 0,
            ]);

        return $policies->build();
    }

    public function getLaws() {

        $args = [
            'posts_per_page' => -1,
            'post_type' => 'law',
        ];

        $data = [];

        $wp_query = new \WP_Query($args);

        $chartIndex = 0;

        //COLORS
        $colors = [];
        foreach(get_field('law criteria', 'options') as $index=>$row) {
            $colors[] = $row['color'];
        }
        
        foreach($wp_query->posts as $post) {
            setup_postdata($post);            // $terms = get_the_terms($post->ID, 'tag');

            $scores = [
                get_field('clear terms', $post->ID)['score'],
                get_field('specific harms', $post->ID)['score'],
                get_field('helpful processes', $post->ID)['score'],
                get_field('not retroactive', $post->ID)['score'],
                get_field('not harmful', $post->ID)['score'],
                get_field('free speech', $post->ID)['score'],
                get_field('simple consents', $post->ID)['score'],
                get_field('international commerce', $post->ID)['score'],
                get_field('fair enforcement', $post->ID)['score'],
                get_field('small enterprises', $post->ID)['score'],
            ];
            $total = array_sum($scores);

            if($total < 50 ) {
                $scoreColor = '#f15c66';
            }
            elseif($total < 75 ) {
                $scoreColor = '#e4a277';
            }
            else {
                $scoreColor = '#77e593';
            }

            $row = 1;
            $style = '';
            foreach ($scores as $index => $score)
            {
                for ($col = 1; $col <= $score; $col++)
                {
                    $style .=
                        ".rcdcLawsChart--index--{$chartIndex} .rcdcLawsChartCube--row--$row.rcdcLawsChartCube--col--" . ($col) . " polygon{\r\n" .
                        "   fill: {$colors[$index]};\r\n" .
                        "}\r\n";
                }
                $row++;
            }

            $data[] = [
                'title' => get_the_title($post->ID),
                'url' => get_the_permalink($post->ID),
                'country' => get_field('Country', $post->ID),
                'scoreColor' => $scoreColor,
                'totalScore' => $total,
                'scores' => $scores,
                'chartIndex' => $chartIndex,
                'style' => $style,
                // 'terms' => $terms,
            ];

            $chartIndex++;

        }

        return $data;
    }

}
