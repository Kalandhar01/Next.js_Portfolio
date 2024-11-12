import { projects } from '@/data'

const Project = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
           A Small Selection of {' '}
            <span className='text-purple'>
                Recent Project
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-16'>
            {projects.map( (project) =>(
            <div key={project.id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]' >
                {project.title}
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Project
