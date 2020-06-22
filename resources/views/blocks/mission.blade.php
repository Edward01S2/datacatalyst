<section class="pb-8 sm:pb-12 md:pb-16">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div>
      <div>
        <img class="mb-8" src="{!! $image['url'] !!}" alt="">
        <div class="mission-container flex flex-col space-y-4 md:grid md:grid-rows-4 md:grid-flow-col md:space-y-0 md:gap-2">
          @foreach($boxes as $box)
            <div class="mission-box flex flex-col md:flex-row">
              <div class="mission-img border-b-4 border-c-tan-100 md:border-b-0 md:border-r-4 md:w-1/2">
                <img class="object-cover w-full h-56 md:h-full" src="{!! $box['image']['url'] !!}" alt="">
              </div>
              <div class="mission-content bg-c-blue-200 p-4 sm:p-6 md:w-1/2 md:flex md:border-l-4 md:border-c-tan-100 md:items-center lg:p-8">
                <div>
                  <h4 class="text-white text-5xl leading-none xl:text-6xl">{!! $box['title'] !!}</h4>
                  <p class="text-c-teal-100 text-lg font-normal xl:text-xl">{!! $box['content'] !!}</p>
                </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>
