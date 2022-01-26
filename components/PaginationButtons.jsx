import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

function PaginationButtons() {
  const router = useRouter()
  const startIndex = Number(router.query.start) || 0
  return (
    <div className = 'flex max-w-lg justify-between text-blue-800 mb-10'>
      {startIndex >= 10 && (
        <Link
          href={`/search?q=${router.query.q}&start=${startIndex - 10}`}
          passHref
        >
          <div className='flex flex-col cursor-pointer hover:underline flex-grow items-center'>
            <ChevronLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
        href={`/search?q=${router.query.q}&start=${startIndex + 10}`}
        passHref
      >
        <div className='flex flex-col cursor-pointer hover:underline flex-grow items-center'>
          <ChevronRightIcon className='h-5' />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons
