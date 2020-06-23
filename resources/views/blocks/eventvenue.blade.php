<section id="event-map" class="bg-c-blue-200">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-12 md:py-16 lg:py-20 xl:py-24">
      <div class="text-white text-center mb-8 lg:mb-12">
        <h2 class="text-3xl uppercase text-white md:text-3xl lg:text-4xl lg:mb-8">{!! $title !!}</h2>
        <p class="text-lg lg:text-2xl">{!! $location['address'] !!}</p>
        <p class="font-sorts-mill lg:text-lg xl:max-w-3xl xl:mx-auto">{!! $content !!}</p>
      </div>
      <div>
        <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 lg:space-x-8">
          <div class="md:w-1/2">
            <div class="acf-map w-full h-72 lg:h-96 xl:h-108" data-zoom="16">
              <div class="marker" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>"></div>
            </div>
          </div>
          <div class="md:w-1/2">
            <img class="h-72 object-cover w-full object-center lg:h-96 xl:h-108" src="{!! $image['url'] !!}" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>