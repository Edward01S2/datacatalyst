<section class="mb-8 sm:mb-12">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-c-teal-100 shadow-xs p-4 py-8 sm:p-6 lg:p-8 xl:flex xl:space-x-16">
      <div class="flex text-white space-x-4 items-center pb-6 xl:flex-grow xl:pb-0 xl:space-x-8 xl:w-3/5">
        <div class="flex-shrink-0">
          @svg($icon['url'], 'w-12 h-12 fill-current xl:w-16 xl:h-16')
        </div>
        <h4 class="text-white text-lg mb-0 md:text-2xl">{!! $title !!}</h4>
      </div>
      <div class="xl:w-2/5">
        <div class="mb-2 md:mb-0">
          @include('partials.form', ['form' => $form])
        </div>
        <p class="text-white leading-5 text-sm mb-0">We care about the protection of your data. Read our <a class="underline text-c-blue-100 hover:text-c-blue-200" href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </div>
  </div>
</section>

