<div class="bg-white rounded-sm shadow-xs flex flex-col">
  <div>
    <a href="@permalink">
      <img class="object-cover h-56 w-full rounded-t-sm" src="{!! get_the_post_thumbnail_url() !!}" alt="">
    </a>
  </div>
  <div class="p-4 flex-grow flex flex-col justify-between md:p-6">
    <div>
      <p class="text-c-blue-100 text-sm mb-0">@published('F Y')</p>
      <a href="@permalink()">
        <h3 class="text-2xl mb-2 hover:text-c-blue-100">@title()</h3>
      </a>
      </a>
      <p class="text-base text-c-gray-100 mb-0">{!! wp_trim_words(get_the_excerpt(), 20, '...') !!}</p>
    </div>
    <div>
      <div class="text-left pt-4">
        <a class="inline-block py-2 px-4 text-white rounded bg-c-blue-100 hover:bg-c-blue-200" href="@permalink()">Read More</a>
      </div>
    </div>
  </div>
</div>