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
}
