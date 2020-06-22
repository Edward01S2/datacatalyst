<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    // return ' &hellip; <a href="' . get_permalink() . '">' . __('Continued', 'sage') . '</a>';
    return '&hellip;';
});

add_filter('admin_footer_text', function() {
    echo '<span>Custom theme development by <a href="https://rndr.tech" target="_blank">rndr.tech</a></span>';
});

add_filter('tiny_mce_before_init', function($init) {

    $custom_colours = '
        "4d8dca", "blue-100",
        "0e4162", "blue-200",
        "6acf4b1", "teal-100",
        "3d3d3d", "gray-300",
    ';

    // build colour grid default+custom colors
    $init['textcolor_map'] = '['.$custom_colours.']';

    // change the number of rows in the grid if the number of colors changes
    // 8 swatches per row
    $init['textcolor_rows'] = 1;

    return $init;
});