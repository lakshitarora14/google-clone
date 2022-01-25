import Image from 'next/image'
function Avatar({ url }) {
  return (
    <div>
      <Image
        className='scale-75 rounded-full cursor-pointer ring-gray-200 hover:ring-4' //transition duration-150 transform hover:scale-150'
        src={url}
        alt='Google'
        height={40}
        width={40}
      />
    </div>
  )
}

export default Avatar
