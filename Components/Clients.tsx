import { companies, testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard"

const Clients = () => {
  return (
    <div className='py-20 ' id='testimonials'>
    <h1 className='heading '>
       Kind Words From {' '}
        <span className='text-purple'>
        Friends & Tech That Drive My Journey
        </span>
    </h1>
    <div className='flex flex-col items-center '>
      
      <div className="h-[60vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden mt-20">

      <InfiniteMovingCards  
      items={testimonials}
      direction="right"
      speed="slow"
      />

      <div className="flex flex-warp items-center justify-center gap-4 md:gap-16 max-lg:mt-14">
        {companies.map( ( {id,img,name , nameImg}) =>(
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img}
            alt={name}
            className="md:w-10 w-5" />
            <img src={nameImg}
            alt={name}
            className="md:w-24 w-10" />
                
          </div>
        ))}
      </div>

      </div>




      </ div>
      </div>
  )
}

export default Clients
