<div class="bg-c-teal-100">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-8 text-lg md:flex md:justify-center md:text-xl xl:text-2xl">
      <div class="flex flex-col space-y-4 lg:grid lg:grid-cols-3 lg:divide-x-2 lg:divide-white lg:space-y-0">
        <div class="text-white flex items-center lg:px-8 lg:justify-center xl:py-2">
          <svg class="h-10 w-10 mr-3 flex-shrink-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span>{!! $date !!}</span>
        </div>
        <div class="text-white flex items-center lg:px-8 lg:justify-center xl:py-2">
          <svg class="h-10 w-10 mr-3 flex-shrink-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>{!! $time !!}</span>
        </div>
        <div class="text-white flex items-center lg:px-8 lg:justify-center xl:py-2">
          <svg class="h-10 w-10 mr-3 flex-shrink-0" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span>{!! $address['address'] !!} (<a class="underline hover:text-c-blue-100" href="#event-map">map</a>)</span>
        </div>
      </div>
    </div>
  </div>
</div>