@extends('layouts.app')

@section('content')

  <div class="bg-video">
    <video id="bgvid" class="object-cover w-screen h-screen fixed top-0 left-0 z-0" playsinline autoplay muted loop poster="@field('BG Video Poster', 'url')">
      <source src="@field('BG Video', 'url')" type="video/mp4">
    </video>
  </div>

  <div class="z-30 relative mt-4">
    @while(have_posts()) @php(the_post())
      @includeFirst(['partials.content-page', 'partials.content'])
    @endwhile
  </div>

@endsection
