@extends('layouts.app')

@section('content')
  <section class="column-title pb-8 sm:pb-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:space-x-8 md:py-8 xl:py-16">
        <div class="md:w-2/5">
          <h2 class="uppercase font-medium leading-9 md:mb-0 lg:text-5xl lg:leading-none">Insights</h2>
        </div>
        {{-- <div class="md:w-3/5">
          <h2 class="text-c-blue-100 text-xl md:mb-0 lg:text-3xl">{!! $subtitle !!}</h2>
        </div> --}}
      </div>
      <div class="bg-c-blue-200 blue-gradient h-1 w-full my-8 md:mt-4 lg:mt-0"></div>
    </div>
  </section>

  <section class="mb-8 lg:mb-12 xl:mb-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      @if (! have_posts())
        <x-alert type="warning">
          {!! __('Sorry, no results were found.', 'sage') !!}
        </x-alert>
      @endif

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-2">
        @php($i = 1)
        @while(have_posts()) @php(the_post())
          <?php
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

          ?>
          @if($i === 1)
            <div class="flex flex-col p-4 bg-white md:flex-row md:space-x-6 xl:p-8 xl:space-x-8 md:p-6 lg:col-span-2">
              <div class="flex-shrink-0 mb-4 md:w-2/5 md:mb-0">
                <a href="{!! get_the_permalink() !!}">
                  <img class="object-cover h-40 w-full object-center md:h-full" src="{!! get_the_post_thumbnail_url() !!}" alt="">
                </a>
              </div>
              <div class="md:w-3/5 lg:flex lg:flex-col">
                <a href="{!! get_the_permalink() !!}">
                  <h4 class="font-normal mb-3 text-lg hover:text-c-blue-100 leading-snug md:text-xl lg:leading-snug lg:text-2xl xl:leading-snug xl:text-3xl">{!! get_the_title() !!}</h4>
                </a>
                <p class="line-clamp-4 leading-snug mb-4 lg:mb-6 xl:text-lg">{!! get_the_excerpt() !!}</p>
                <div class="lg:mb-6">
                  <a class="inline-block py-2 px-4 text-white rounded bg-c-blue-100 hover:bg-c-blue-200" href="{!! get_the_permalink() !!}">Read More</a>
                </div>
                <div class="flex items-center justify-end lg:flex-grow">
                  <div class="mr-2 lg:text-lg">By {!! $author_name !!}</div>
                  @if($author_img)
                    <img src="{!! $author_img !!}" alt="" class="h-10 w-10 rounded-full">
                  @endif
                </div>
              </div>
            </div>
          @else
            <div class="flex flex-col p-4 bg-white md:flex-row md:space-x-4 md:p-6 xl:p-8 lg:space-x-6 lg:col-span-2 xl:col-span-1">
              <div class="flex-shrink-0 mb-4 md:w-2/5 md:mb-0 md:relative">
                <a href="{!! get_the_permalink() !!}">
                  <img class="object-cover h-40 w-full object-center md:h-full md:absolute md:inset-0" src="{!! get_the_post_thumbnail_url() !!}" alt="">
                </a>
              </div>
              <div class="md:w-3/5 md:flex md:flex-col">
                <a href="{!! get_the_permalink() !!}">
                  <h4 class="font-normal mb-3 text-lg hover:text-c-blue-100 leading-snug lg:text-xl">{!! get_the_title() !!}</h4>
                </a>
                <p class="line-clamp-4 leading-snug mb-4">{!! get_the_excerpt() !!}</p>
                <div class="flex items-center justify-end md:flex-grow md:items-end">
                  <div class="flex items-center">
                    <div class="mr-2">By {!! $author_name !!}</div>
                    @if($author_img)
                      <img src="{!! $author_img !!}" alt="" class="h-10 w-10 rounded-full">
                    @endif
                  </div>
                </div>
              </div>
            </div>
          @endif
          @php($i++)
        @endwhile
      </div>

      <div class="flex justify-center">
        {!! $pagi!!}
      </div>

    </div>
  </section>


@endsection
