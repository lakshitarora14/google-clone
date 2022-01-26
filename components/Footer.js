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

        <div className='grid text-xs'>
          <div className = 'flex justify-center whitespace-nowrap '>
          <div className='flex sm:hidden pr-10'>
            <p>Dark Theme: off</p>
          </div>
          <div className='flex space-x-8 whitespace-nowrap'>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>  
          </div>
          <div className = 'sm:hidden flex space-x-8 whitespace-nowrap mt-4 mb-6 justify-center'>
            <p>Advertising</p>
            <p>Business</p>
            <p>About</p>
          </div>
        </div>
      
      
      </div>
    </footer>
  )
}

export default Footer
