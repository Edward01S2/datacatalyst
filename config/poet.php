<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Post Types
    |--------------------------------------------------------------------------
    |
    | Here you may specify the post types to be registered by Poet using the
    | Extended CPTs library. <https://github.com/johnbillion/extended-cpts>
    |
    */

    'post' => [
        'report' => [
            'enter_title_here' => 'Enter report title',
            'menu_icon' => 'dashicons-analytics',
            'supports' => ['title', 'editor', 'author', 'revisions', 'thumbnail', 'excerpt', 'taxonomy'],
            'show_in_rest' => true,
            'has_archive' => false,
            'labels' => [
                'singular' => 'Report',
                'plural' => 'Reports',
            ],
            'admin_cols' => array(
                'title',
                'tag' => array(
                    'taxonomy' => 'tag'
                ),
                'date' => array(
                    'title' => 'Date',
                    'default' => 'DESC',
                ),
            ),
        ],

        'people' => [
            'enter_title_here' => 'Enter Name',
            'menu_icon' => 'dashicons-groups',
            'supports' => ['title', 'editor', 'author', 'revisions', 'thumbnail', 'excerpt'],
            'show_in_rest' => true,
            'has_archive' => false,
            'labels' => [
                'singular' => 'People',
                'plural' => 'People',
            ],
        ],

        'law' => [
            'enter_title_here' => 'Enter Law Title',
            'menu_icon' => 'dashicons-shield-alt',
            'supports' => ['title', 'editor', 'author', 'thumbnail'],
            'show_in_rest' => true,
            'has_archive' => false,
            'labels' => [
                'singular' => 'Law',
                'plural' => 'Laws',
            ],
        ],


        'event' => [
            'enter_title_here' => 'Enter Event Title',
            'menu_icon' => 'dashicons-calendar-alt',
            'supports' => ['title', 'editor', 'author', 'thumbnail'],
            'show_in_rest' => true,
            'has_archive' => false,
            'labels' => [
                'singular' => 'Event',
                'plural' => 'Events',
            ],
        ]
    ],

    /*
    |--------------------------------------------------------------------------
    | Taxonomies
    |--------------------------------------------------------------------------
    |
    | Here you may specify the taxonomies to be registered by Poet using the
    | Extended CPTs library. <https://github.com/johnbillion/extended-cpts>
    |
    */

    'taxonomy' => [
        'tag' => [
            'links' => ['report'],
            'show_in_rest' => true,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Blocks
    |--------------------------------------------------------------------------
    |
    | Here you may specify the block types to be registered by Poet and
    | rendered using Blade.
    |
    | Blocks are registered using the `namespace/label` defined when
    | registering the block with the editor. If no namespace is provided,
    | the current theme text domain will be used instead.
    |
    | Given the block `sage/accordion`, your block view would be located at:
    |   ↪ `views/blocks/accordion.blade.php`
    |
    | Block views have the following variables available:
    |   ↪ $data    – An object containing the block data.
    |   ↪ $content – A string containing the InnerBlocks content.
    |                Returns `null` when empty.
    |
    */

    'block' => [
        // 'sage/accordion',
    ],

    /*
    |--------------------------------------------------------------------------
    | Block Categories
    |--------------------------------------------------------------------------
    |
    | Here you may specify block categories to be registered by Poet for use
    | in the editor.
    |
    */

    'categories' => [
        // 'cta' => [
        //     'title' => 'Call to Action',
        //     'icon' => 'star-filled',
        // ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Editor Palette
    |--------------------------------------------------------------------------
    |
    | Here you may specify the color palette registered in the Gutenberg
    | editor.
    |
    | A color palette can be passed as an array or by passing the filename of
    | a JSON file containing the palette.
    |
    | If a color is passed a value directly, the slug will automatically be
    | converted to Title Case and used as the color name.
    |
    | If the palette is explicitly set to `true` – Poet will attempt to
    | register the palette using the default `palette.json` filename generated
    | by <https://github.com/roots/palette-webpack-plugin>
    |
    */

    'palette' => [
            'blue-100' => '#4d8dca',
            'blue-200' => '#0e4162',
            'teal-100' => '#6ac4b1',
        // 'red' => '#ff0000',
        // 'blue' => '#0000ff',
    ],

    /*
    |--------------------------------------------------------------------------
    | Admin Menu
    |--------------------------------------------------------------------------
    |
    | Here you may specify admin menu item page slugs you would like moved to
    | the Tools menu in an attempt to clean up unwanted core/plugin bloat.
    |
    | Alternatively, you may also explicitly pass `false` to any menu item to
    | remove it entirely.
    |
    */

    'menu' => [
        // 'gutenberg',
    ],

];