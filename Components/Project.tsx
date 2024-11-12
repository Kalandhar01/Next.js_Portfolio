import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/3d-pin'

const Project = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
           A Small Selection of {' '}
            <span className='text-purple'>
                Recent Project
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-16 '>
            {projects.map( (project) =>(
            <div key={project.id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]' >
             <PinContainer
             title={project.link} href={project.link}            

             >

                <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[50vh] gap-5 '>
                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                        <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img src={project.img} alt={project.title}
                    className='z-10 absolute bottom-10' />
                </div>
                <h1 className='font-bold lg:text-xl md:text-xs text-sm line-clamp-1'>{project.title}</h1>
            
            <p className='lg:text-sm lg:font-normal font-light text-sm line-clamp-2 mt-2'>
                {project.des}
            </p>

            <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                    {project.iconLists.map( (icon,index) => (
                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg;w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}>

                            <img src={icon} alt={icon} 
                            className='p-2' />

                        </div>

                    ))}
                </div>

                <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xs md:text-xs text-sm text-purple'>Check Live Site</p>
                    <FaLocationArrow className='ms-3' 
                    color='#CBACF9'/>
                </div>

            </div>


             </PinContainer>
            
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Project
