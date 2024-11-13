import Clients from "@/Components/Clients";
import Exp from "@/Components/Exp";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import Project from "@/Components/Project";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
   
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}
          />
        <Hero/>
        <Grid/>
        <Project />
        <Clients />
        <Exp />
        <Footer/>
      
      </div>
    </main>
  );
}
