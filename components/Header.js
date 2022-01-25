import Avatar from '../components/Avatar'
// import { ViewGridIcon,MenuIcon } from '@heroicons/react/outline'
import { ViewGridIcon,MenuIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className = 'flex items-center justify-between sm:justify-end p-2 w-full'>

        <div className='sm:hidden flex flex-grow items-center'>
          <MenuIcon className='h-6 pr-3 text-gray-500' />
          <p className='link-m text-blue-500  border-b-2 border-blue-500 px-2'>
            ALL
          </p>
          <p className='link-m px-3'>IMAGES</p>
        </div>

        <div className='flex space-x-2 sm:space-x-4 items-center'>
          <p className='link hidden sm:flex sm:text-sm'>Gmail</p>
          <p className='link hidden sm:flex sm:text-sm'>Images</p>
          <ViewGridIcon className='text-gray-500 sm:text-gray-600 cursor-pointer h-10 p-2 rounded-full hover:bg-gray-100 w-10' />
          <Avatar url='https://i.postimg.cc/MZdQ43Kr/Whats-App-Image-2019-04-21-at-1-59-51-AM-01.jpg' />
        </div>
    </header>
  )
}

export default Header
