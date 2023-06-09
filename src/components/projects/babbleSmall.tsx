import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
export default function BabbleSmall() {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-[2rem]">
      <div className="absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-pg sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className="block w-[250] translate-x-[98px] translate-y-[-80px] select-none dark:hidden">
        <Image
          src={"/images/babble.webp"}
          alt="photo from babble"
          width={2002}
          height={3292}
        />
      </div>
      <div className="hidden w-[250] translate-x-[98px] translate-y-[-80px] select-none dark:block ">
        <Image
          src={"/images/babble.webp"}
          alt="photo from babble"
          width={2002}
          height={3292}
        />
      </div>
      <div className="absolute bottom-2 left-4 m-2 box-border flex h-12 w-8 items-center justify-center transition-all duration-700 group-hover:w-[130px] ">
        <div className="rounded-full border-transparent transition-all duration-300 hover:border-4 hover:border-white/20">
          <div className="flex h-8 w-8 items-center justify-end gap-4 overflow-hidden rounded-full bg-dw p-2 text-text transition-all duration-700 group-hover:w-[130px] hover:w-[130px] ">
            <Link
              href="/projects/babble"
              passHref
              title="go to the babble project page"
              className="flex items-center gap-2"
            >
              <h1 className="translate-x-[-10px] opacity-0 transition-all delay-200 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Babble
              </h1>
              <ImArrowUpRight2 />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
