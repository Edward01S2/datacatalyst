<article @php(post_class())>
  <div class="md:flex md:space-x-8 border-b border-gray-300">
    <div class="flex-shrink-0 mb-8">
      <a href="@permalink()">
        @if(get_the_post_thumbnail())
          <img class="hidden h-24 w-24 rounded-sm object-cover object-center md:block" src="{!! get_the_post_thumbnail_url() !!}" alt="">
        @else
          <div class="hidden h-24 w-24 bg-gray-200 rounded-sm object-cover object-center md:block"></div>
        @endif
      </a>
    </div>
    <div class="">
      <h2 class="entry-title leading-5">
        <a class="text-xl text-c-blue-200 hover:text-c-blue-100" href="{{ get_permalink() }}">
          {!! $title !!}
        </a>
      </h2>
    
      <div class="entry-summary mb-4 text-c-gray-100">
        {!! wp_trim_words(get_the_excerpt(), 20, '...') !!}
      </div>
      <div class="uppercase underline text-c-blue-100 hover:text-c-blue-200 text-sm mb-8">
        <a href="@permalink()">Continue Reading</a>
      </div>
    </div>
  </div>

</article>
