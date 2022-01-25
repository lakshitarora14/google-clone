import { GlobeIcon } from '@heroicons/react/solid'
function Footer() {
  return (
    <footer
      className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100
   text-sm text-gray-500'
    >
      <div className='px-8 py-3'>
        <p>India</p>
      </div>
      <div className='sm:flex sm:justify-between grid grid-cols-1 px-8 py-3'>
        
        
        <div className='hidden sm:flex justify-center space-x-8 whitespace-nowrap'>
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>

        <div className='flex justify-between'>
          <div className='flex sm:hidden'>
            <p>Dark Theme: off</p>
          </div>
          <div className='flex space-x-8 whitespace-nowrap'>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      
      
      </div>
    </footer>
  )
}

export default Footer
