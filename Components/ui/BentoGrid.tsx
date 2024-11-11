import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imgClassName,
  titleClassName,
  spareImg,
  id,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-transparent justify-between flex flex-col space-y-4 border-2",
        className
      )}
      style={{
        background: "rgb(4, 7, 29)", // Fixed typo here
        backgroundColor: "linear-gradient(135deg, #6e7f80, #212529)", // Example gradient; adjust as necessary
      }}
    >

      <div className={` ${id === 6} && 'flex justify-center h-full `}>
        <div className="w-full h-full absolute">{
          img && (
            <img
            src={img}
            alt={img}
            className={cn(imgClassName ,'object-cover ,object-center')}
        
          />
          
          )
          }

        </div>

        <div className={`absolute right-0 bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
             <img
             src={spareImg}
             alt={spareImg}
             className={'object-cover ,object-center ,w-full , h-full'}
         
           />
            
          )}

        </div>

{ id===6 && (
  <BackgroundGradientAnimation>
    <div className="absolute z-50 flex items-center justify-center text-white font-bold  "></div>

  </BackgroundGradientAnimation>

)


}
        

      </div>





      {/* Image or other content can be added here */}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className={cn("font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2", titleClassName)}>
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
