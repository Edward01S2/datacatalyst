<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Exclusive extends Block
{
    /**
     * The display name of the block.
     *
     * @var string
     */
    public $name = 'Exclusive';

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
            'reports' => get_field('Reports'),
            'data' => $this->reports(),
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
        $exclusive = new FieldsBuilder('exclusive');

        $exclusive
            ->addRelationship('Reports', [
                'max' => 4,
                'post_type' => ['report'],
            ]);

        return $exclusive->build();
    }

    public function reports() {
        $posts = get_field('Reports');

        $data = [];

        foreach($posts as $post) {

            $terms = get_the_terms($post->ID, 'tag');

            $data[] = [
                'title' => get_the_title($post->ID),
                'url' => get_the_permalink($post->ID),
                'image' => get_the_post_thumbnail_url($post->ID),
                'excerpt' => get_the_excerpt($post->ID),
                'date' => get_the_date('F j, Y', $post->ID),
                'terms' => [
                    'name' => $terms[0]->name,
                    'slug' => $terms[0]->slug,
                    'icon' => get_field('Icon', $terms[0])['url'],
                    'color' => get_field('Color', $terms[0]),
                ],
                // 'terms' => $terms,
            ];

        }

        return $data;
    }

}

