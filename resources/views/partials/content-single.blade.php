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

<article @php(post_class())>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="">
      <div class="pt-12">
        @if(get_the_post_thumbnail_url())
          <img class="object-center h-64 md:h-96 object-cover w-full mb-4" src="{!! get_the_post_thumbnail_url() !!}" alt="">
        @endif
        <p class="text-c-blue-100 text-sm mb-2">@published('F d, Y')</p>
        <h1 class="text-3xl lg:text-4xl leading-none text-c-blue-200 mb-4">
          {!! $title !!}
        </h1>

        <div class="flex items-center">
          <div class="mr-2 lg:text-lg">By {!! $author_name !!}</div>
          @if($author_img)
            <img src="{!! $author_img !!}" alt="" class="h-10 w-10 rounded-full">
          @endif
        </div>
      
        <div class="content-markup py-8">
          @php(the_content())
        </div>
      </div>
    </div>

  </div>
</article>

<section class="insights-home mb-8 sm:mb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="uppercase text-lg mb-2 lg:text-xl">More Insights</h3>
    <div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        @foreach($insights as $post)
          <div class="flex flex-col p-4 bg-white lg:flex-row lg:space-x-4 xl:p-8 xl:space-x-8">
            <div class="flex-shrink-0 mb-4 lg:w-2/5 lg:mb-0">
              <a href="{!! $post['link'] !!}">
                <img class="object-cover h-40 w-full object-center lg:h-full" src="{!! $post['image'] !!}" alt="">
              </a>
            </div>
            <div class="lg:w-3/5 lg:flex lg:flex-col">
              <a href="{!! $post['link'] !!}">
                <h4 class="font-normal mb-1 text-lg hover:text-c-blue-100 leading-snug">{!! $post['title'] !!}</h4>
              </a>
              <p class="line-clamp-4 leading-snug mb-4">{!! $post['excerpt'] !!}</p>
              <div class="flex items-center justify-end lg:flex-grow">
                <div class="mr-2">By {!! $post['author'] !!}</div>
                @if($post['author_img'])
                  <img src="{!! $post['author_img'] !!}" alt="" class="h-10 w-10 rounded-full">
                @endif
              </div>
            </div>
          </div>
        @endforeach
      </div>  
    </div>
  </div>
</section>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <div class="bg-c-blue-200 blue-gradient h-1 w-full my-8 md:mt-4 lg:mt-0"></div>
</div>

<div class="text-center pt-4 pb-12">
  <a class="inline-block py-2 px-4 text-c-blue-100 underline hover:text-c-blue-200" href="/insights">< Back</a>
</div>


