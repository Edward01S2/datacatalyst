<section class="text-content pb-8 sm:pb-12 md:pt-8 lg:pt-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="law-container md:-mt-16 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12">
      @foreach($laws as $law)
        <div class="law mb-20 md:mb-16 md:overflow-hidden md:w-3/4 lg:w-full lg:mb-0">
          <div class="hidden items-center md:pt-0 md:flex">
            <p class="mb-0 text-xs leading-none mr-2 italic">{!! $law['country'] !!}</p>
            <span class="flex-grow h-px bg-c-blue-200"></span>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="-mt-16 mb-4 md:w-1/2 md:order-2 md:-mt-4 lg:w-3/5 xl:-mt-8">
              <a href="{!! $law['url'] !!}">
                @include('partials.cube', ['style' => $law['style'], 'chartIndex' => $law['chartIndex'], 'scores' => $law['scores']] )
              </a>
            </div>
            <div class="md:w-1/2 md:order-1 lg:w-2/5">
              <div class="flex items-center md:pt-0 md:hidden">
                <p class="mb-0 text-xs leading-none mr-2 italic">{!! $law['country'] !!}</p>
                <span class="flex-grow h-px bg-c-blue-200"></span>
              </div>
              <a href="{!! $law['url'] !!}">
                <h3 class="text-xl mb-2 hover:text-c-blue-100 mt-2">{!! $law['title'] !!}</h3>
              </a>
              {{-- <p class="italic text-sm mb-1">{!! $law['country'] !!}</p> --}}
              <div class="flex items-center">
                <div class="text-white rounded-full inline-block text-lg h-8 w-8 flex items-center justify-center lg:h-10 lg:w-10 lg:text-xl" style="background-color:{!! $law['scoreColor'] !!}">
                  <div class="">{!! $law['totalScore'] !!}</div>
                </div>
                <div class="text-base font-normal ml-2">/100 <span class="uppercase text-xs">score</span></div>
              </div>
              <div>
                <div class="text-center pt-4 md:text-left">
                  <a class="inline-block py-2 px-4 text-c-gray-100 rounded border border-c-gray-100 bg-transparent hover:text-white hover:bg-c-blue-100" href="{!! $law['url'] !!}">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      @endforeach
    </div>
    {{-- @dump($laws) --}}
  </div>
</section>
