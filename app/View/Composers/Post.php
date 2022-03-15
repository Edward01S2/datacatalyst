<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Post extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.page-header',
        'partials.content',
        'partials.content-*',
        'partials.content-single'
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            'title' => $this->title(),
            'posts' => $this->posts(),
            'insights' => $this->getInsights(),
        ];
    }

    /**
     * Returns the post title.
     *
     * @return string
     */
    public function title()
    {
        if ($this->view->name() !== 'partials.page-header') {
            return get_the_title();
        }

        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }

            return __('Latest Posts', 'sage');
        }

        if (is_archive()) {
            return get_the_archive_title();
        }

        if (is_search()) {
            /* translators: %s is replaced with the search query */
            return sprintf(
                __('Search Results for <span class="text-c-blue-100 underline">%s</span>', 'sage'),
                get_search_query()
            );
        }

        if (is_404()) {
            return __('Not Found', 'sage');
        }

        return get_the_title();
    }

    public function posts() {
        $current = get_the_ID();
        $args = [
            'posts_per_page' => get_field('Post Count'),
            'post_type' => 'post',
            'post__not_in' => [$current],
            'orderby' => 'rand',
            'posts_per_page' => 6,
        ];

        $data = [];

        $wp_query = new \WP_Query($args);

        foreach($wp_query->posts as $post) {

            $terms = get_the_terms($post->ID, 'tag');

            $data[] = [
                'title' => get_the_title($post->ID),
                'url' => get_the_permalink($post->ID),
                'image' => get_the_post_thumbnail_url($post->ID),
                'date' => get_the_date('F j, Y', $post->ID),
                // 'terms' => $terms,
            ];

        }

        return $data;
    }

    public function getInsights() {

        $current = get_the_ID();
        $args = [
            'posts_per_page' => 2,
            'post_type' => 'post',
            'post__not_in' => [$current],
            'orderby' => 'rand',
            'category__not_in' => array(24),
            'ignore_sticky_posts' => 1,
        ];

        $post_data = [];

        $wp_query = new \WP_Query($args);

        while($wp_query->have_posts()): $wp_query->the_post(); 

            $post = get_the_ID();

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
        

        endwhile;

        wp_reset_query();

        return $post_data;
    }
}
