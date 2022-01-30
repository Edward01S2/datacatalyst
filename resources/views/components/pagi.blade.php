@if ($pagi->hasPages())
  <nav class="flex items-center my-8" role="navigation" aria-label="pagination">

      <a
        href="{{ $pagi->previousPageUrl() }}"
        rel="prev"
        aria-label="Previous Page"
        class="mr-3 py-1 px-4 underline text-c-blue-100 hover:text-c-blue-200 {{ ($pagi->onFirstPage()) ? 'disabled' : ''}}"
      >< Previous</a>



      <a
        href="{{ $pagi->nextPageUrl() }}"
        rel="next"
        aria-label="Next Page"
        class="mr-3 py-1 px-4 underline text-c-blue-100 hover:text-c-blue-200 {{ (!$pagi->hasMorePages()) ? 'disabled' : ''}}"
      >Next ></a>

  </nav>
@endif
