<header>
  <nav x-data="{ open: false, dark: {!! $home !!} }" class="bg-transparent relative z-40 pt-2">
    <div class="relative z-50 container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="flex items-center pb-2 md:w-full md:items-start">
          <div class="flex-shrink-0 mr-8 lg:mr-12">
            <a href="{{ home_url('/') }}">
              <img :class="{'hidden' : !dark, 'block': dark }" class="block h-20 w-auto hover:opacity-75 transiton duration-200" src="{!! $logo['url'] !!}" alt="{{ $siteName }}" />
              <img :class="{'block' : !dark, 'hidden': dark }" class="block h-20 w-auto hover:opacity-75 transiton duration-200 hidden" src="{!! $logo_alt['url'] !!}" alt="{{ $siteName }}" />
            </a>
          </div>

          <div class="hidden sm:ml-2 md:flex md:flex-col md:flex-grow">
            <div class="md:order-2 flex items-center md:justify-end md:space-x-8 md:space-x-reverse">
              <div class="md:order-2">
                <div class="header-nav flex items-center space-x-6">
                  @if ($navigation)
                    <ul class="flex space-x-8 list-none lg:space-x-12">
                      @foreach ($navigation as $item)
                        <li class="group relative {{ $item->classes ?? '' }} {{ $item->active ? 'active' : '' }}">
                          <a :class="{ 'text-white' : !dark }" class="uppercase tracking-wider font-medium text-sm pb-4 lg:text-base hover:text-c-blue-100" href="{{ $item->url }}">
                            {{ $item->label }}
                          </a>
                  
                          @if ($item->children)
                            <ul class="hidden list-none group-hover:block absolute shadow-xs z-40 top-0 mt-8 -ml-6 w-56 pt-2 px-6 pb-4 rounded-md space-y-2">
                              <div class="bg-white w-full h-full absolute inset-0"></div>
                              @foreach ($item->children as $child)
                                <li class="z-20 relative{{ $item->classes ?? '' }} {{ $child->active ? 'active' : '' }}">
                                  <a href="{{ $child->url }}" class="w-full block uppercase hover:text-c-blue-100">
                                    {{ $child->label }}
                                  </a>
                                </li>
                              @endforeach
                            </ul>
                          @endif
                        </li>
                      @endforeach
                    </ul>
                  @endif
                </div>
              </div>
              <div class="flex items-center space-x-3 md:order-1">
                @foreach($social as $icon)
                  <a href="{!! $icon['Link']['url'] !!}" class="bg-c-blue-100 rounded-full p-2 hover:scale-105 transform transition duration-200">
                    @svg($icon['Icon']['url'], 'w-4 h-4 fill-current text-white', ['aria-label' => $icon['Link']['title']])
                  </a>
                @endforeach
              </div>
            </div>

            {{-- SEARCH --}}
            <div id="search-container" class="hidden items-center md:order-1 md:flex md:justify-end md:mb-2">
              <div class="relative">
                <form action="{!! home_url(); !!}" role="search" method="post" id="c_searchform_header">
                  <input :class="{'border-white text-white' : !dark, 'border-c-blue-200' : dark }" type="text" id="s" name="s" value="" autocomplete="off" class="text-xs pt-1 w-32 border-b-2 pr-6 bg-transparent focus:outline-none lg:w-48" placeholder="Search">
                  <button class="absolute right-0 bottom-0 mb-2 mr-1" type="submit" id="searchsubmit">
                    <svg :class="{'text-white' : !dark, 'text-c-blue-200' : dark }" class="h-3 w-3 fill-current hover:text-c-blue-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {{-- @dump($navigation) --}}

        {{-- @dump($user) --}}

        <div class="-mr-2 flex md:ml-4 md:hidden">
          <button @click="open = !open" class="inline-flex items-center mr-2 justify-center p-1 rounded-md text-white bg-c-blue-200 border-2 border-c-blue-200 hover:text-white hover:bg-c-blue-100 hover:border-c-blue-100focus:outline-none focus:bg-c-blue-200 focus:text-white transition duration-150 ease-in-out">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path :class="{'hidden': open, 'inline-flex': !open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path :class="{'hidden': !open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div x-show="open" class="mobile-nav relative z-50 md:hidden">
      <div @click.away="open = false" class="relative flex flex-col items-start">
        <div class="bg-white absolute w-full h-full shadow-xs shadow-md"></div>
        <div class="mobile-nav-items p-4 w-full">
          @if ($navigation)
            <ul class="flex flex-col space-y-4">
              @foreach ($navigation as $item)
                <li class="group relative {{ $item->classes ?? '' }} {{ $item->active ? 'active' : '' }}">
                  <a class="uppercase tracking-wider text-xl block mb-1" href="{{ $item->url }}">
                    {{ $item->label }}
                  </a>
          
                  @if ($item->children)
                    <ul class="group-hover block ml-4 space-y-1">
                      @foreach ($item->children as $child)
                        <li class="{{ $item->classes ?? '' }} {{ $child->active ? 'active' : '' }}">
                          <a href="{{ $child->url }}" class="font-medium text-lg">
                            {{ $child->label }}
                          </a>
                        </li>
                      @endforeach
                    </ul>
                  @endif
                </li>
              @endforeach
            </ul>
          @endif
        </div>

        {{-- MOBILE SEARCH --}}
        <div class="p-4 pb-12 bg-transparent w-full">
          <div id="search-container" class="relative w-full">
            <form action="{!! home_url(); !!}" role="search" method="post" id="c_searchform" class="">
              <input type="text" id="s" name="s" value="" autocomplete="off" class="py-1 w-full border-b-2 border-c-blue-200 bg-transparent focus:outline-none" placeholder="Search">
              <button class="absolute right-0 bottom-0 mb-2 mr-1" type="submit" id="searchsubmit">
                <svg class="h-4 w-4 fill-current text-c-blue-200 hover:text-c-blue-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
    {{-- @dump($member) --}}
    {{-- @dump($home) --}}
    <div x-show="!dark" class="object-cover w-full h-full absolute top-0 overflow-hidden bg-c-blue-200">
      <div id="tsparticles" class="absolute h-auto w-full md:h-full top-0 object-cover left-0 z-0 bg-c-blue-200"></div>
    </div>
  </nav>


</header>
