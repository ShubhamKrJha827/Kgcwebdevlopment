import {} from 'react'


function Card({image, title, link}) {
  

    return (
        <div className='w-full rounded-md'>
            <div className=''>
            <img  className='w-full rounded-t-lg' src={image} alt="" />
            </div>
            <div className='bg-black rounded-b-lg text-white px-5 py-4'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <div><a href={link}>{link}</a></div>
            </div>
        </div>
    )

}
export default Card