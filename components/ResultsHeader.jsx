import { XIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon, MenuIcon } from '@heroicons/react/outline'
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
    <header className='grid stick top-0 bg-white'>
      {/* mobile header */}
      <div className='sm:hidden pb-5'>
        <div className='flex justify-between py-5 px-8 mt-4 w-full flex-grow'>
          <MenuIcon className='h-12 text-gray-500 sm:hidden' />
          <Image
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='google'
            height={80}
            width={240}
            className='cursor-pointer'
            onClick={() => router.push('/')}
          />
          <div className='transform scale-125'>
            <Avatar
              url='https://i.postimg.cc/MZdQ43Kr/Whats-App-Image-2019-04-21-at-1-59-51-AM-01.jpg'
              className='ml-auto'
            />
          </div>
        </div>

        <div className='flex pb-4 justify-center max-w-3xl px-6'>
          <form
            className='flex flex-grow border border-gray-200 h-24 px-6 rounded-full 
            shadow-lg items-center'
          >
            <SearchIcon className='h-10 text-gray-400 flex pr-3' />
            <input
              className='h-12 flex-group w-full focus:outline-none lowercase text-3xl'
              type='text'
              ref={searchInputRef}
              defaultValue={router.query.q}
            />
            <MicrophoneIcon className='h-10 text-gray-400' />
            <button type='submit' onClick={search} className='hidden'>
              Search
            </button>
          </form>
        </div>
      </div>

      {/* desktop header */}
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
            className='flex-group w-full focus:outline-none lowercase'
            type='text'
            ref={searchInputRef}
            defaultValue={router.query.q}
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
