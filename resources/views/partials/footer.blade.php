<footer class="relative bg-c-blue-200 z-30">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex items-center py-4">
        <img class="h-20 mr-4 md:mr-0" src="{!! $footer_logo['url'] !!}" alt="">
        <p class="text-white mb-0 text-xs leading-5 pl-4 ml-4 py-1 border-l-2 border-c-teal-100 md:w-48 lg:text-sm lg:w-56">{!! $footer_text !!}</p>
      </div>
      @if ($footer_nav)
        <ul class="pb-8 grid grid-cols-2 gap-2 px-4 md:flex md:px-0 md:space-x-6 md:pb-0 lg:space-x-12">
          @foreach ($footer_nav as $item)
            <li class="{{ $item->classes ?? '' }} {{ $item->active ? 'active' : '' }}">
              <a class="text-white hover:text-c-blue-100" href="{{ $item->url }}">
                {{ $item->label }}
              </a>
            </li>
          @endforeach
        </ul>
      @endif
    </div>
  </div>
</footer>

{{-- @dump($footer_nav) --}}