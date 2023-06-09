import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";

export default function CapgeminiSmall() {
  return (
    <div className=" flex h-full w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/companies/cap.webp"
        alt="Capgemini"
        height={110}
        width={110}
        loading="lazy"
        className="rounded-3xl border-white"
      />
      <div className="absolute bottom-2 left-4 m-2 box-border flex h-12 w-8 items-center justify-center transition-all duration-500 group-hover:w-[130px] ">
        <div className="rounded-full border-transparent transition-all duration-300 hover:border-4 hover:border-white/20">
          <div className="flex h-8 w-8 items-center justify-end gap-4 overflow-hidden rounded-full bg-dw p-2 text-text transition-all duration-500 group-hover:w-[130px] hover:w-[130px] ">
            <Link
              href="/projects/capgemini"
              passHref
              title="go to the Capgemini project page"
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
