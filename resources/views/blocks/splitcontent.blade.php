<section class="split-content pb-8">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col space-y-8 pb-8 md:flex-row md:space-x-8 md:space-y-0">
      <div class="content-left md:w-2/5">
        @if($image_left)
          <img class="mx-auto" src="{!! $image_left['url'] !!}" alt="">
        @endif
        @if($content_left)
        <div class="content-markup pb-8 lg:pb-12">
          {!! $content_left !!}
        </div>
      @endif
      </div>
      <div class="content-right md:w-3/5">
        @if($content_right)
          <div class="content-markup pb-8 lg:pb-12">
            {!! $content_right !!}
          </div>
        @endif
        @if($border)
          <div class="border border-b border-c-gray-100"></div>
        @endif
        @if($form_right)
          @include('partials.form', ['form' => $form_right])
        @endif
      </div>
    </div>
  </div>
</section>