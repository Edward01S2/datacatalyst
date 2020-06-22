<article @php(post_class())>
  <div class="pt-4 mb-12 md:pt-6 lg:pt-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <img class="w-full object-cover object-center h-56 md:h-64 lg:h-96" src="@thumbnail('full', false)" alt="">
      </div>
      <div class="pt-4">
        <h2 class="text-2xl mb-0 md:text-3xl lg:text-4xl">@title</h2>
        <p class="text-c-gray-100 italic text-sm font-sorts-mill lg:text-base">@published('F Y')</p>
      </div>

      <div class="content-markup pb-8">
        @php(the_content())
      </div>

      <div class="md:flex md:space-x-8 lg:max-w-3xl">
        <div class="md:w-2/5">
          <img class="w-3/4 mx-auto md:w-full" src="@field('thumbnail', 'url')" alt="">
        </div>
        <div class="md:w-3/5 md:flex md:items-center">
          <div>
            <div class="pt-4 text-center md:text-left md:pt-0">
              <h3 class="text-lg mb-2 md:max-w-xs lg:text-xl">@field('title')</h3>
              <p class="mb-1 font-sorts-mill text-sm text-c-gray-100 leading-none">@field('author')</p>
              <p class="mb-0 font-sorts-mill text-sm text-c-gray-100 italic leading-none mr-2">@published('F Y')</p>
            </div>
            <div class="text-center pt-4 md:text-left">
              <a class="inline-block py-2 px-4 text-white rounded bg-c-blue-100 hover:bg-c-blue-200" target="_blank" href="@field('file', 'url')">Download</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</article>

@include('blocks.signup', ['form' => get_field('Signup Form', 'options'), 'title' => get_field('Signup Text', 'options'), 'icon' => get_field('Signup Icon', 'options')])

