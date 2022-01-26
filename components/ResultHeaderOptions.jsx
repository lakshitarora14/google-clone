import ResultHeaderOption from './ResultHeaderOption'
import {
  SearchIcon,
  NewspaperIcon,
  PhotographIcon,
  TagIcon,
  VideoCameraIcon,
  DotsVerticalIcon
} from '@heroicons/react/outline'

function ResultHeaderOptions() {
  return (
    <div
      className='flex w-full text-gray-500 sm:text-gray-700 justify-evenly sm:text-base 
    sm:justify-start sm:space-x-36 sm:pl-48 border-b-[1px]'
    >
      <div className='flex space-x-4'>
        <ResultHeaderOption Icon={SearchIcon} title='All' selected />
        <ResultHeaderOption Icon={NewspaperIcon} title='News' />
        <ResultHeaderOption Icon={TagIcon} title='Shopping' />
        <ResultHeaderOption Icon={PhotographIcon} title='Images' />
        <ResultHeaderOption Icon={VideoCameraIcon} title='Video' />
        <ResultHeaderOption Icon={DotsVerticalIcon} title='More' />
        <div className = 'flex sm:hidden'>
        <ResultHeaderOption className = 'hidden' Icon={DotsVerticalIcon} title='Maps' />
        <ResultHeaderOption className = 'hidden' Icon={DotsVerticalIcon} title='Books' />
        <ResultHeaderOption className = 'hidden' Icon={DotsVerticalIcon} title='Flights' />
        <ResultHeaderOption className = 'hidden' Icon={DotsVerticalIcon} title='Finance' />
        </div>
      </div>
      <div className='sm:flex hidden'>
        <p className='link'>Tools</p>
      </div>
    </div>
  )
}

export default ResultHeaderOptions
