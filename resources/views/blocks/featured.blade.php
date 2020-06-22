<section class="mb-8 sm:mb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col space-y-4 md:space-y-6 lg:flex-row lg:space-y-0 lg:space-x-8">
      @foreach($feat as $x)
        <div class="bg-white shadow-xs flex flex-col lg:w-1/3">
          <div class="flex px-4 py-3 items-center" style="background: {!! $x['Color'] !!}">
            @if($x['Icon']['url'])
              @svg( $x['Icon']['url'], 'w-6 h-6 text-white fill-current mr-2')
            @endif
            <h5 class="text-white mb-0 uppercase text-lg">{!! $x['Title'] !!}</h5>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between lg:p-8">
            <p>{!! $x['Content'] !!}</p>
            <a class="inline-flex items-center text-c-blue-100 hover:underline" href="{!! $x['Link']['url'] !!}">
              <span class="mr-2">{!! $x['Link']['title'] !!}</span>
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      @endforeach
    </div>
  </div>
</section>