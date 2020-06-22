<section>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-12 md:py-16 lg:py-20 lg:max-w-3xl lg:mx-auto xl:py-24">
      <div class="text-center mb-8">
        <h2 class="text-3xl uppercase md:text-3xl lg:text-4xl lg:mb-8">{!! $title !!}</h2>
        <div class="content-markup">
          {!! $content !!}
        </div>
      </div>

      @if($form)
        <div>
          @php
          //gravity_form_enqueue_scripts($form, true);
            gravity_form($form, false, false, false, ['event_title' => $title ], true, 1);
          @endphp
        </div>
      @else
        <div class="text-center">
          <a class="text-white bg-c-blue-100 px-8 py-4 text-xl uppercase tracking-widest rounded mb-0 inline-block hover:bg-c-teal-100" href="{!! $register['url'] !!}" target="{!! $register['target'] !!}">{!! $register['title'] !!}</a>
        </div>
      @endif
    </div>
  </div>
</section>