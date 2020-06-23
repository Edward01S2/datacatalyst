<article @php(post_class())>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="">
      <div class="pt-12">
        <h1 class="text-3xl lg:text-5xl leading-none text-c-blue-100 mb-2">
          {!! $title !!}
        </h1>
        <p class="text-c-blue-100 text-sm mb-4">@published('F d, Y')</p>
        @if(get_the_post_thumbnail_url())
          <img class="object-center h-64 md:h-96 object-cover w-full" src="{!! get_the_post_thumbnail_url() !!}" alt="">
        @endif
    
        <div class="content-markup pt-8">
          @php(the_content())
        </div>
      </div>
    </div>
    <div class="text-center pt-4 pb-12">
      <a class="inline-block py-2 px-4 text-white rounded bg-c-blue-100 hover:bg-c-blue-200" href="/news">Back to News</a>
    </div>
  </div>
</article>

@include('blocks.news', ['posts' => $posts, 'title' => 'Other News'])
