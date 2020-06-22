<section class="bg-c-blue-200 bg-cover bg-center bg-fixed" style="background-image: url('{!! $bg['url'] !!}');">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center py-12 pb-16 md:py-20 md:pb-24 lg:py-32 lg:pb-36">
      <div class="mb-8 lg:mb-12">
        <img class="h-16 lg:h-20" src="{!! $logo['url'] !!}" alt="">
      </div>
      <h1 class="text-white uppercase tracking-widest text-center lg:max-w-2xl lg:text-6xl">@title()</h1>
      <p class="text-white uppercase tracking-widest text-lg mb-8 lg:text-2xl lg:mb-16">{!! $date !!}</p>
      <div>
        <a class="text-white bg-c-blue-100 px-8 py-4 text-xl uppercase tracking-widest rounded mb-0 block hover:bg-c-teal-100" href="{!! $register['url'] !!}" target="{!! $register['target'] !!}">{!! $register['title'] !!}</a>
      </div>
    </div>
  </div>
</section>
