<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Council extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'Council';

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
            'people' => $this->getPeople(),
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
        $council = new FieldsBuilder('council');


        return $council->build();
    }

    public function getPeople() {
        $args = array(
            // 'paged' => $paged,
            'post_type' => 'people',
            'post_status' => 'publish',
            'posts_per_page' => -1,
        );


        $posts = new \WP_Query($args);

        $post_data = [];
        while($posts->have_posts()): $posts->the_post();

        $post_data[] = [
            'title' => get_the_title(),
            'link' => get_permalink(),
            'image' => get_the_post_thumbnail_url(),
            'excerpt' => get_the_excerpt(),
        ];

        endwhile;

        wp_reset_postdata();

        return $post_data;
    }   

}
