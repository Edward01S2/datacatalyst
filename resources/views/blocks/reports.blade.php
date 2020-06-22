<section class="mb-8 sm:mb-12 lg:mb-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-16">
      @foreach($reports as $report)
        <div class="flex flex-col md:flex-row md:space-x-8">
          <div class="md:w-2/5">
            <a href="{!! $report['url'] !!}">
              <img class="w-3/4 mx-auto md:w-full" src="{!! $report['image'] !!}" alt="">
            </a>
          </div>
          <div class="md:w-3/5">
            <div>
              <div class="flex items-center pt-8 pb-2 md:pt-0">
                <p class="mb-0 font-sorts-mill text-sm text-c-gray-100 leading-none mr-2">{!! $report['date'] !!}</p>
                <span class="flex-grow h-px bg-c-blue-200"></span>
              </div>
              <a class="hover:text-c-blue-100" href="{!! $report['url'] !!}">
                <h3 class="text-lg mb-2 hover:text-c-blue-100">{!! $report['title'] !!}</h3>
              </a>
              <p class="mb-0 text-c-gray-100 font-sorts-mill">
                {!! $report['excerpt'] !!}
              </p>
            </div>
            <div class="text-center pt-4 md:text-left">
              <a class="inline-block py-2 px-4 text-white rounded bg-c-blue-100 hover:bg-c-blue-200" href="{!! $report['url'] !!}">Read More</a>
            </div>
          </div>
        </div>
      @endforeach
    </div>
  </div>
</section>
{{-- @dump($reports) --}}