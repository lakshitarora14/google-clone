import { XIcon } from '@heroicons/react/solid'
import { MicrophoneIcon, SearchIcon, MenuIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import ResultHeaderOptions from './ResultHeaderOptions'
function ResultsHeader() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const search = (e) => {
    const searchTerm = searchInputRef.current.value
    e.preventDefault()
    if (!searchTerm) {
      return
    }
    router.push(`/search?q=${searchTerm}`)
  }
  return (
    <header className='stick top-0 bg-white'>

      <div className='sm:hidden pb-5'>


        <div className='flex justify-between p-3 mt-4 w-full flex-grow'>
          <MenuIcon className='h-12 text-gray-500 sm:hidden' />
          <Image
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='google'
            height={70}
            width={200}
            className='cursor-pointer'
            onClick={() => router.push('/')}
          />
          <Avatar
            url='https://i.postimg.cc/MZdQ43Kr/Whats-App-Image-2019-04-21-at-1-59-51-AM-01.jpg'
            className='ml-auto'
          />
        </div>
        
        
        <div className='flex pb-4'>
          <form
            className='flex px-4 py-2 flex-grow ml-10 mr-5 border border-gray-200
      rounded-full shadow-lg max-w-2xl items-center'
          >
            <SearchIcon className='h-10 text-gray-400 flex pr-3' />
            <input
              className='h-12 flex-group w-full focus:outline-none'
              type='text'
              ref={searchInputRef}
            />
            <MicrophoneIcon
              className='h-10 text-gray-400'
            />
            <button type='submit' onClick={search} className='hidden'>
              Search
            </button>
          </form>
        </div>
      </div>

      <div className='hidden sm:flex w-full p-6 items-center'>

        <Image
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='google'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form
          className='flex px-6 py-2 flex-grow ml-10 mr-5 border border-gray-200
      rounded-full shadow-lg max-w-2xl items-center'
        >
          <input
            className='flex-group w-full focus:outline-none'
            type='text'
            ref={searchInputRef}
          />
          <XIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transform
        hover:scale-110 transition duration-100'
            onClick={() => (searchInputRef.current.value = null)}
          />
          <MicrophoneIcon
            className='mr-3 h-6 text-blue-500 hidden sm:flex 
        border-l-2 pl-4 border-gray-300 cursor-pointer'
          />
          <SearchIcon className='h-6 text-blue-500 hidden sm:flex cursor-pointer' />
          <button type='submit' onClick={search} className='hidden'>
            Search
          </button>
        </form>
        <div className='ml-auto'>
          <Avatar
            url='https://i.postimg.cc/MZdQ43Kr/Whats-App-Image-2019-04-21-at-1-59-51-AM-01.jpg'
            className='ml-auto'
          />
        </div>
      </div>
      
      <ResultHeaderOptions />
    </header>
  )
}

export default ResultsHeader
