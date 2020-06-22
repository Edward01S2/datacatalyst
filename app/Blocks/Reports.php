<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Reports extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'Reports';

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
    public $post_types = ['post', 'page'];

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
            'reports' => $this->getReports(),
            'dummy' => get_field('reports'),
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
        $reports = new FieldsBuilder('reports');

        $reports
            ->addTextarea('reports', [
                'placeholder' => 'Reports Block',
                'maxlength' => 0,
            ]);


        return $reports->build();
    }

    public function getReports() {
        $args = [
            'posts_per_page' => -1,
            'post_type' => 'report'
        ];

        $data = [];

        $wp_query = new \WP_Query($args);

        foreach($wp_query->posts as $post) {

            // $terms = get_the_terms($post->ID, 'tag');

            $data[] = [
                'title' => get_the_title($post->ID),
                'url' => get_the_permalink($post->ID),
                'image' => get_field('thumbnail', $post->ID)['url'],
                'excerpt' => get_the_excerpt($post->ID),
                'date' => get_the_date('F Y', $post->ID),
                // 'terms' => $terms,
            ];

        }

        return $data;
    }
}
