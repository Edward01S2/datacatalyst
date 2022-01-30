<?php

/**
 * Theme helpers.
 */

namespace App;

add_action('pre_get_posts', function($query) {

    if( !$query->is_main_query() ) return;

    if(is_admin()) return;

    if(is_home()) {


        $query->set('posts_per_page', 9);
        $query->set('category__not_in', array(25));

    }
});