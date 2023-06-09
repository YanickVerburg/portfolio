import FlynImg from "@/components/gridcomponents/flynImg";
import Janskapsalonflat from "@/components/gridcomponents/janskapsalonflat";
import About from "@/components/about";
import AnimatedLayout from "@/layouts/animatedLayout";
import Janskapsalonsmall from "@/components/gridcomponents/janskapsalonsmall";
import { type Metadata } from "next";
import Babble from "@/components/projects/babble";
import Capgemini from "@/components/projects/capgemini";
import CapgeminiSmall from "@/components/projects/capgeminiSmall";
import BabbleSmall from "@/components/projects/babbleSmall";

export const metadata: Metadata = {
  title: "Projects",
  description: "This beautiful page shows some of the projects I've worked on.",
};

export default function Projects() {
  return (
    <AnimatedLayout>
      <div className="flex h-full flex-col items-center justify-center py-2">
        <div className="w-full overflow-visible transition-all duration-300 ease-in ">
          <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pb-6 pt-2 [grid-auto-columns:265px] [grid-auto-rows:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
            <div className="order-1 col-span-1 rounded-[2rem] bg-card p-4 pl-6 pt-[18px] sm:col-span-2 xl:col-span-1">
              <About />
            </div>
            <div className="group relative order-3 overflow-hidden rounded-[2rem] bg-br sm:order-3 sm:row-span-2">
              <FlynImg />
            </div>
            <div className="group relative hidden overflow-hidden rounded-[2rem] bg-br sm:order-2 sm:col-span-2 sm:block">
              <Janskapsalonflat />
            </div>
            <div className="group relative order-4 overflow-hidden rounded-[2rem] bg-br sm:hidden">
              <Janskapsalonsmall />
            </div>
            <div className="group relative order-4 hidden overflow-hidden rounded-[2rem] bg-br sm:order-3 sm:col-span-2 sm:block">
              <Babble />
            </div>
            <div className="group relative order-2 overflow-hidden rounded-[2rem] bg-br sm:hidden">
              <BabbleSmall />
            </div>
            <div className="group relative order-5 overflow-hidden rounded-[2rem] bg-br">
              <CapgeminiSmall />
            </div>
            {/* TO DO: WijWetenHetWel */}
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
