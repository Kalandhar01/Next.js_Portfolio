import { socialMedia } from "@/data"
import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid"
        className='w-full h-full opacity-50' />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45w]">Ready To Take
          <span className="text-purple"> Your </span>
          Digital Presence to The  Next Level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center">React out to me Today and lets Discuss How I can help you Achieve Your goals</p>
        <a href="kalandars2004@gmail.com">
          <MagicButton 
          title="Lets get in to Touch"
          icon={<FaLocationArrow/>}
          position="right"
          />
        </a>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full ">
          <p className='md:text-base text-sm md:font-bold font-light'>Copyright © 2024 <span className="text-purple">Kalandhar</span> </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map( (profile)=>(
              <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={profile.img} alt="" width={20} height={20}/>
              </div>
            ))}

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer