@extends('layouts.app')

@section('content')
  <section class="column-title pb-8 sm:pb-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:space-x-8 md:py-8 xl:py-16">
        <div class="md:w-2/5">
          <h2 class="uppercase font-medium leading-9 md:mb-0 lg:text-5xl lg:leading-none">Latest News</h2>
        </div>
        {{-- <div class="md:w-3/5">
          <h2 class="text-c-blue-100 text-xl md:mb-0 lg:text-3xl">{!! $subtitle !!}</h2>
        </div> --}}
      </div>
      <div class="bg-c-blue-200 blue-gradient h-1 w-full my-8 md:mt-4 lg:mt-0"></div>
    </div>
  </section>

  <section class="mb-8 lg:mb-12 xl:mb-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        @while(have_posts()) @php(the_post())
          @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
        @endwhile
      </div>

      <div class="flex justify-center">
        {!! $pagination !!}
      </div>

    </div>
  </section>





  {{-- @if (! have_posts())
    <x-alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif --}}

{{-- 

  {!! get_the_posts_navigation() !!} --}}
@endsection

{{-- @section('sidebar')
  @include('partials.sidebar')
@endsection --}}
