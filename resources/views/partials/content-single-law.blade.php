<article @php(post_class())>

  <div class="bg-c-tan-100 pt-8 pb-12 lg:pt-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="md:mb-12">
        <div class="mb-4 md:mb-16">
          <span class="uppercase text-c-blue-100 text-sm xl:text-base">@option('law title')</span>
          <h2 class="my-1 text-3xl xl:text-4xl">@title</h2>
          <span class="text-sm xl:text-base">@published('F Y')</span>
        </div>
        <div class="flex items-center">
          <div class="text-white rounded-full inline-block text-2xl h-12 w-12 flex items-center justify-center lg:h-20 lg:w-20 lg:text-4xl xl:h-24 xl:w-24 xl:text-5xl" style="background-color:{!! $cube['scoreColor'] !!}">
            <div class="">{!! $cube['totalScore'] !!}</div>
          </div>
          <div class="text-xl font-normal ml-2 xl:text-3xl">/100 <span class="uppercase text-base">score</span></div>
        </div>
        <div class="-mt-12 -mx-8 md:mx-0 md:-ml-16 md:-mt-36 lg:-ml-28 lg:-mt-48 xl:-mt-64 xl:-ml-20">
          @include('partials.cube', ['lawChart' => $cube['lawChart'], 'style' => $cube['style'], 'chartIndex' => $cube['chartIndex'], 'scores' => $cube['scores']] )
        </div>
      </div>

      <div class="md:mb-16">
        <div class="bg-c-blue-200 blue-gradient h-1 w-full my-8 md:mt-4 lg:mb-16"></div>
        @foreach($content as $c)
          <div class="lg:flex lg:mb-12 lg:space-x-8 xl:space-x-16">
            <div class="lg:w-1/5">
              <h3 class="lg:text-right">{!! $c['Heading'] !!}</h3>
            </div>
            <div class="lg:w-4/5">
              <div class="content-markup">
                {!! $c['Content'] !!}
              </div>
            </div>
          </div>
        @endforeach
        {{-- @dump($content) --}}
      </div>

      <div class="md:mb-16 lg:mb-8 xl:mb-12">
        <div class="bg-c-blue-200 blue-gradient h-1 w-full my-8 md:mt-4 lg:mb-16"></div>
        <h3 class="md:mb-8 lg:mb-12">Criteria</h3>
        <div class="flex flex-col xl:flex-row xl:space-x-12">

          <div class="xl:w-1/2">
            @foreach($criteria as $c)
              @if($loop->index < 5)
                <div class="mb-6 md:mb-8">
                  <div class="flex">
                    <div class="h-3 w-3 rounded-full flex-shrink-0 mt-1 mr-2" style="background-color: {!! $c['color'] !!}"></div>
                    <h5 class="text-lg mb-2 font-medium tracking-tighter xl:text-xl">
                      <span class="uppercase">{!! $c['title'] !!}:</span>
                      <span class="">{!! $c['description'] !!}</span>
                      <span class="">[Score: {!! $c['score'] !!}/10]</span>
                    </h5>
                  </div>
                  <div class="content-markup text-c-gray-50 ml-5">{!! $c['content'] !!}</div>
                </div>
              @endif
            @endforeach
          </div> 

          <div class="xl:w-1/2">
            @foreach($criteria as $c)
              @if($loop->index > 4)
                <div class="mb-6 md:mb-8">
                  <div class="flex">
                    <div class="h-3 w-3 rounded-full flex-shrink-0 mt-1 mr-2" style="background-color: {!! $c['color'] !!}"></div>
                    <h5 class="text-lg mb-2 font-medium tracking-tighter xl:text-xl">
                      <span class="uppercase">{!! $c['title'] !!}:</span>
                      <span class="">{!! $c['description'] !!}</span>
                      <span class="">[Score: {!! $c['score'] !!}/10]</span>
                    </h5>
                  </div>
                  <div class="content-markup text-c-gray-50 ml-5">{!! $c['content'] !!}</div>
                </div>
              @endif
            @endforeach
          </div>

        </div>
      </div>

      <div>
        <div class="bg-c-blue-200 blue-gradient h-1 w-full my-8 md:mt-4 lg:mb-12 xl:mb-16"></div>
        <div class="text-sm text-c-gray-50">
          {!! $footer !!}
        </div>
      </div>

    </div>
  </div>
  
  </article>
  {{-- @dump($criteria) --}}
  
  {{-- @dump($cube) --}}