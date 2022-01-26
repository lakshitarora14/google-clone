function ResultHeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex pb-3 ${selected && 'sm:border-blue-500 sm:text-blue-500 border-transparent text-gray-700'}
      items-center space-x-6 sm:space-x-2 ${!selected && 'border-transparent'}
      border-b-4 hover:text-blue-500 cursor-pointer 
    hover:border-blue-500}`}
    >
      <Icon className='hidden sm:flex h-4' />
      <p className={`flex sm:border-transparent ${selected && 'border-b-4 border-gray-700'}`}>{title}</p>
    </div>
  )
}

export default ResultHeaderOption
