import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Capgemini() {
  return (
    <div className="group relative h-full w-full">
      <div className="absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-rg sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className="block translate-y-[-170px] select-none dark:hidden sm:translate-y-0">
        <Image
          src={"/images/capgemini.webp"}
          alt="photo of capgemini"
          width={3292}
          height={2002}
          loading="lazy"
        />
      </div>
      <div className="hidden translate-y-[-170px] select-none dark:block sm:translate-y-0">
        <Image
          src={"/images/capgemini.webp"}
          alt="photo of capgemini"
          width={3292}
          height={2002}
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-2 left-4 m-2 box-border flex h-12 w-8 items-center justify-center transition-all duration-500 group-hover:w-[130px] ">
        <div className="rounded-full border-transparent transition-all duration-300 hover:border-4 hover:border-white/20">
          <div className="flex h-8 w-8 items-center justify-end gap-4 overflow-hidden rounded-full bg-dw p-2 text-text transition-all duration-500 group-hover:w-[130px] hover:w-[130px] ">
            <Link
              href="/projects/capgemini"
              passHref
              title="go to the capgemini project page"
              className="flex items-center gap-2"
            >
              <h1 className="translate-x-[-10px] opacity-0 transition-all delay-200 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Capgemini
              </h1>
              <ImArrowUpRight2 />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
