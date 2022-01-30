@if($posts)
<section class="insights-home mb-8 sm:mb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h3 class="uppercase text-lg mb-2 lg:text-xl">{!! $title !!}</h3>
    <div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        @foreach($posts as $post)
          <div class="flex flex-col p-4 bg-white lg:flex-row lg:space-x-4 xl:p-8 xl:space-x-8">
            <div class="flex-shrink-0 mb-4 lg:w-2/5 lg:mb-0">
              <a href="{!! $post['link'] !!}">
                <img class="object-cover h-40 w-full object-center lg:h-full" src="{!! $post['image'] !!}" alt="">
              </a>
            </div>
            <div class="lg:w-3/5 lg:flex lg:flex-col">
              <a href="{!! $post['link'] !!}">
                <h4 class="font-normal mb-1 text-lg hover:text-c-blue-100 leading-snug">{!! $post['title'] !!}</h4>
              </a>
              <p class="line-clamp-4 leading-snug mb-4">{!! $post['excerpt'] !!}</p>
              <div class="flex items-center justify-end lg:flex-grow">
                <div class="mr-2">By {!! $post['author'] !!}</div>
                @if($post['author_img'])
                  <img src="{!! $post['author_img'] !!}" alt="" class="h-10 w-10 rounded-full">
                @endif
              </div>
            </div>
          </div>
        @endforeach
      </div>  
    </div>
  </div>
</section>
@endif