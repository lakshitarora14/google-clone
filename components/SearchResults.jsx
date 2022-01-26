import PaginationButtons from './PaginationButtons'

function SearchResults({ results }) {
  return (
    <div className='pl-6 sm:mx-auto w-full sm:px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-500 mb-5 mt-3 text-xl sm:text-sm '>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className='max-w-xl mb-8'>
          <div className='group'>
            <a href={result.link} className='sm:text-sm text-xl line-clamp-1'>
              {result.formattedUrl}
            </a>
            <a
              href={result.link}
              className='truncate text-2xl sm:text-xl text-blue-800 font-medium group-hover:underline'
            >
              <h2>{result.title}</h2>
            </a>
          </div>
          <p className='sm:text-base text-xl line-clamp-2 sm:pb-0 pb-1'>
            {result.snippet}
          </p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  )
}

export default SearchResults
