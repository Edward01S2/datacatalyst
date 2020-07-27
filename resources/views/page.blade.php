@extends('layouts.app')

@section('content')

  <div class="bg-c-tan-100 pt-8 pb-4">
    <div class="container mx-auto">
      @while(have_posts()) @php(the_post())
        {{-- @include('partials.page-header') --}}
        @includeFirst(['partials.content-page', 'partials.content'])
      @endwhile
    </div>
  </div>

@endsection
