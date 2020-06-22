<section class="mb-8 sm:mb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="uppercase text-lg mb-2 lg:text-xl">{!! $title !!}</h3>
    <div class="bg-white shadow-xs">
      <div class="grid grid-cols-1 gap-4 p-4 sm:p-6 lg:p-8 sm:gap-6 lg:gap-8 lg:grid-cols-3">
        @foreach($posts as $post)
          <div class="flex space-x-4">
            <div class="flex-shrink-0">
              <a href="{!! $post['url'] !!}">
                <img class="object-cover h-20 w-20 lg:h-24 lg:w-24" src="{!! $post['image'] !!}" alt="">
              </a>
            </div>
            <div>
              <a href="{!! $post['url'] !!}">
                <h4 class="font-normal mb-1 text-base hover:text-c-blue-100 md:text-lg lg:text-base">{!! $post['title'] !!}</h4>
              </a>
              <p class="italic font-light text-xs mb-0 leading-normal">{!! $post['date'] !!}</p>
            </div>
          </div>
        @endforeach
      </div>  
    </div>
  </div>
</section>