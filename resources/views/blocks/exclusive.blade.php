<section class="mb-8 sm:mb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row lg:space-x-8">
      {{-- @dump($data) --}}
      @foreach($data as $x)
        @if($loop->first)
          <div class="shadow-xs bg-white lg:w-3/5 xl:w-2/3">
            <div class="relative">
              <a href="{!! $x['url'] !!}">
                <div class="absolute top-0 left-0 uppercase px-4 py-1 mt-4 text-white bg-red-700 leading-tight tracking-widest text-sm md:mt-6 xl:text-base">Exclusive</div>
                <img class="object-cover h-48 w-full md:h-56 lg:h-64 xl:h-full"  src="{!! $x['image'] !!}" />
              </a>
            </div>
            <div class="bg-white p-4 md:p-6">
              <a class="group" href="{!! $x['url'] !!}">
                <h3 class="font-normal mb-2 hover:text-c-blue-100 xl:text-4xl">{!! $x['title'] !!}</h3>
              </a>
              <p class="font-light">{!! $x['excerpt'] !!} <a class="underline text-c-blue-100 hover:text-c-blue-200" href="{!! $x['url'] !!}">Read More</a></p>
              <div class="flex items-center">
                @if($x['terms']['icon'])
                  @svg($x['terms']['icon'], 'mr-1 w-4 h-4 fill-current', ['aria-label' => $x['terms']['name'], 'style' => 'color: ' . $x['terms']['color']])
                @endif 
                <span class="uppercase font-light text-xs tracking-none">{!! $x['terms']['name'] !!}</span>
              </div>
              <p class="italic font-light text-xs mb-0 leading-normal">{!! $x['date'] !!}</p>
            </div>
          </div>
        @endif
      @endforeach

      <div class="relative shadow-xs bg-white p-4 mt-4 md:p-6 md:mt-6 lg:w-2/5 lg:mt-0 lg:p-8 xl:w-1/3">
        <div class="absolute top-0 left-0 bg-c-tan-200 text-c-blue-100 uppercase text-sm px-4 py-1 mt-4 md:mt-6">Exclusive Research</div>
        <div class="flex flex-col pt-12 space-y-4 md:mt-2 md:space-y-6 lg:space-y-8 lg:mt-0">
          @foreach($data as $x)
            @if($loop->index > 0)
              <div class="flex">
                <div class="flex-shrink-0">
                  <a href="{!! $x['url'] !!}">
                    <img class="object-cover h-20 w-20 lg:h-24 lg:w-24"  src="{!! $x['image'] !!}" />
                  </a>
                </div>
                <div class="ml-4 md:ml-6">
                  <a class="group" href="{!! $x['url'] !!}">
                    <h4 class="font-normal mb-2 text-base hover:text-c-blue-100 md:text-lg lg:text-base">{!! $x['title'] !!}</h4>
                  </a>
                  <div class="flex items-center">
                    @if($x['terms']['icon'])
                      @svg($x['terms']['icon'], 'mr-1 w-4 h-4 fill-current', ['aria-label' => $x['terms']['name'], 'style' => 'color: ' . $x['terms']['color']])
                    @endif
                    <span class="uppercase font-light text-xs tracking-none">{!! $x['terms']['name'] !!}</span>
                  </div>
                  <p class="italic font-light text-xs mb-0 leading-normal">{!! $x['date'] !!}</p>
                </div>
              </div>
            @endif
          @endforeach
        </div>
      </div>

    </div>
  </div>
</section>
