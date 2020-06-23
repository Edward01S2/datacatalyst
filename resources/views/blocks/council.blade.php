<section class="pb-8 sm:pb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 lg:grid-cols-4 xl:grid-cols-5">
      @foreach($people as $p)
        <div class="flex flex-col">
          <div class="">
            <a href="{!! $p['link'] !!}">
              <img class="object-cover w-full h-72 md:h-64" src="{!! $p['image'] !!}" alt="">
            </a>
          </div>
          <div class="md:flex md:flex-col md:h-full md:justify-between">
            <div class="pt-4">
              <a href="{!! $p['link'] !!}">
                <h3 class="mb-2 text-2xl hover:text-c-blue-100">{!! $p['title'] !!}</h3>
              </a>
              <p class="font-sorts-mill text-c-gray-200 text-base leading-snug">{!! $p['excerpt'] !!}</p>
            </div>
            <a class="text-c-blue-100 flex items-center hover:text-c-blue-200" href="{!! $p['link'] !!}">
              <span class="mr-2">Read Bio</span>
              <svg class="h-4 w-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>
      @endforeach
    </div>
  </div>
</section>