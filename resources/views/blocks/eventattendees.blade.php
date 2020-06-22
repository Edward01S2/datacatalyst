<section>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-12 md:py-16 lg:py-20 xl:py-24">
      <div class="flex items-center justify-center">
        <h2 class="text-3xl uppercase text-center md:text-3xl lg:text-4xl lg:mb-12">{!! $title !!}</h2>
      </div>
      <div class="">
        <div class="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
          @foreach($gallery as $i)
          <a class="group" href="{!! $i['Link']['url'] !!}">
            <div class="col-span-1 flex justify-center px-4 py-4 group-hover:bg-white group-hover:border transition duration-200">
              <img class="h-10 object-contain md:h-12 lg:h-16" src="{!! $i['Image']['url'] !!}" alt="" />
            </div>
          </a>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>