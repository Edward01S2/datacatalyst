<section class="mb-12 lg:mb-20 xl:mb-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="my-12 lg:my-20 xl:my-24">
      <div class="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 lg:gap-8">
        @foreach($gallery as $img)
          <img class="object-cover object-center h-36 w-full md:h-48 lg:h-40" src="{!! $img['url'] !!}" alt="">
        @endforeach
      </div>
    </div>
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
      <div>
        <h3 class="tracking-widest leading-normal text-2xl md:text-3xl lg:text-4xl xl:pr-12">{!! $title !!}</h3>
      </div>
      <div>
        <div class="content-markup">
          {!! $content !!}
        </div>
        <div class="mt-8">
          <a class="text-white bg-c-blue-100 px-8 py-4 text-xl uppercase tracking-widest rounded mb-0 inline-block hover:bg-c-teal-100" href="{!! $register['url'] !!}" target="{!! $register['target'] !!}">{!! $register['title'] !!}</a>
        </div>
      </div>
    </div>
  </div>
</section>