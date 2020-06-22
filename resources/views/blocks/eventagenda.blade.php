<section class="bg-gray-200">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-12 md:py-16 lg:py-20 xl:py-24">
      <div>
        <h2 class="text-3xl uppercase md:text-3xl md:mb-8 lg:text-4xl lg:mb-12">{!! $title !!}</h2>
      </div>
      <div class="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        @foreach($agenda as $x)
          <div class="flex flex-col space-y-2 lg:flex-row lg:space-x-12 lg:space-y-0">
            <div class="lg:w-1/6">
              <div class="text-c-teal-100 text-2xl leading-none lg:text-3xl">{!! $x['start'] !!}</div>
            </div>
            <div>
              <p class="mb-0 uppercase text-lg text-c-gray-200 leading-none mb-2 md:text-xl lg:text-2xl lg:mb-4">{!! $x['title'] !!}</p>
              <p class="font-sorts-mill text-c-gray-100 mb-0 md:text-lg">{!! $x['content'] !!}</p>
            </div>
          </div>
        @endforeach
      </div>
    </div>
  </div>
</section>