<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use StoutLogic\AcfBuilder\FieldsBuilder;

class InsightsHome extends Block
{
    /**
     * The name of the block.
     *
     * @var string
     */
    public $name = 'InsightsHome';

    public $slug = 'insightshome';

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
    public $icon = 'star-half';

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
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'title' => get_field('title'),
            'posts' => $this->getPosts(),
        ];
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $insightsHome = new FieldsBuilder('insights_home');

        $insightsHome
            ->addText('title')
            ->addRelationship('posts', [
                'return_format' => 'id',
                'post_type' => ['post'],
            ]);

        return $insightsHome->build();
    }

    public function getPosts() {
        $posts = get_field('posts');

        $post_data = [];

        foreach($posts as $post) {

            $post_author = get_post_field('post_author', $post);

            if($auth = get_field('author', $post)) {
                $author_name = get_the_title($auth);
                $author_img = get_the_post_thumbnail_url($auth);
            }
            else {
                $author_name = get_the_author_meta('display_name', $post_author);
                $author_img = "";
            }

            $post_data[] = [
                'image' => get_the_post_thumbnail_url($post),
                'title' => get_the_title($post),
                'author' => $author_name,
                'author_img' => $author_img,
                'link' => get_the_permalink($post),
                'excerpt' => get_the_excerpt($post),
            ];
        }

        return $post_data;
    }

}
