import Image from 'next/image'
function Avatar({ url, className }) {
  return (
    <div>
      <Image
        className={` hidden sm:scale-75 rounded-full cursor-pointer ring-gray-200 hover:ring-4 ${className}`}
        src={url}
        alt='Google'
        height={40}
        width={40}
      />
    </div>
  )
}

export default Avatar
