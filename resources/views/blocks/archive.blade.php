<section class="mb-8 sm:mb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-c-blue-200 p-6 flex flex-wrap items-center lg:flex-no-wrap lg:space-x-6 lg:p-8 xl:space-x-12">
        <div class="w-1/4 md:w-1/6 lg:w-auto lg:flex-shrink-0">
          <img class="w-16 h-16 mr-2 md:h-20 md:w-20 lg:mr-0" src="{!! $icon['url'] !!}" alt="">
        </div>
        <div class="w-3/4 text-white md:w-5/6 lg:w-auto">
          <h4 class="text-white text-lg mb-2">{!! $title !!}</h4>
          <p class="text-sm italic leading-5 lg:mb-0">{!! $content !!}</p>
        </div>
      <div class="text-center w-full md:mt-2 lg:w-auto lg:flex-shrink-0 lg:mt-0">
        <a class="bg-white px-4 py-3 inline-block uppercase rounded hover:text-white hover:bg-c-blue-100" href="{!! $link['url'] !!}">{!! $link['title'] !!}</a>
      </div>
    </div>
  </div>
</section>