@extends('layouts.app')

@section('content')
  <div class="mb-8 md:mb-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      @include('partials.page-header')

    @if (! have_posts())
      <div class="text-2xl mb-4">Sorry, no results weres found.</div>

      <div class="inline-block">
        <div class="relative mr-4">
          <form action="{!! home_url(); !!}" role="search" method="post" id="c_searchform_page">
            <input  type="text" id="s" name="s" value="" autocomplete="off" class="py-1 w-64 border-c-blue-200 border-b-2 pr-6 bg-transparent focus:outline-none" placeholder="Search">
            <button class="absolute right-0 bottom-0 mb-2 mr-1" type="submit" id="searchsubmit">
              <svg :class="{'text-white' : !dark, 'text-c-blue-200' : dark }" class="h-4 w-4 fill-current hover:text-c-blue-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
            </button>
          </form>
        </div>
      </div>
    @endif
    
      <div class="flex flex-col space-y-6 mb-8 md:space-y-8">
        @while(have_posts()) @php(the_post())
          @include('partials.content-search')
        @endwhile
      </div>

      <div class="flex justify-center">
        {!! $pagination !!}
      </div>

    </div>
  </div>

  {{-- {!! get_the_posts_navigation() !!} --}}
@endsection
