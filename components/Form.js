import { SearchIcon, MicrophoneIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'

function Form() {
  const router = useRouter()
  const input = useRef(null)
  const search = (e) => {
    e.preventDefault()
    const text = input.current.value
    if (!text) {
      return
    }
    router.push(`/search?q=${text}`)
  }
  return (
    <form className='flex flex-col items-center mt-36 sm:mt-44 flex-grow sm:w-4/5 w-11/12'>
      <div className='transform scale-75 sm:scale-110 lg:scale-125 sm:pb-4'>
        <Image
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='google'
          height={100}
          width={300}
        />
      </div>
      <div
        className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg
                    rounded-full border border-gray-200 px-5 py-3 items-center
                    sm:max-w-xl lg:max-w-2xl h-10 sm:h-12'
      >
        <SearchIcon className='h-5 mr-3 text-gray-500' />
        <input
          ref={input}
          type='text'
          className='flex-grow focus:outline-none'
        />
        <MicrophoneIcon className='h-5 text-gray-500' />
      </div>
      <div
        className='hidden sm:flex mt-8 flex-col w-1/2 space-y-2 justify-center 
                    sm:space-y-0 sm:flex-row sm:space-x-4'
      >
        <button onClick={search} className='btn'>
          {'Google Search'}
        </button>
        <button onClick={search} className='btn'>{`I'm Feeling Lucky`}</button>
      </div>

      <div className='sm:flex mt-10 grid justify-items-center'>
        <p className='text-sm text-gray-600 pr-4 whitespace-nowrap'>
          Google offered in:
        </p>
        <div className='flex space-x-6 sm:p-0 p-2 sm:space-x-3 text-sm text-blue-800 flex-wrap w-full justify-center'>
          <p className='link-lang'>हिन्दी</p>
          <p className='link-lang'>বাংলা</p>
          <p className='link-lang'>తెలుగు</p>
          <p className='link-lang'>मराठी</p>
          <p className='link-lang'>தமிழ்</p>
          <p className='link-lang'>ગુજરાતી</p>
          <p className='link-lang'>ಕನ್ನಡ</p>
          <p className='link-lang'>മലയാളം</p>
          <p className='link-lang'>ਪੰਜਾਬੀ</p>
        </div>
      </div>
    </form>
  )
}

export default Form
