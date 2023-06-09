import clsx from "clsx";
import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";
import type { ProjectList } from "@/types";

export default function ProjectImage({ project }: { project: ProjectList }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] bg-br">
      <div className="absolute h-[500px] w-[500px] translate-x-12 translate-y-8 overflow-hidden rounded-full bg-pg sm:translate-y-[-12.5rem] sm:rounded-t-none" />
      <div className={clsx("block select-none dark:hidden", project.translate)}>
        <Image
          src={project.projectImageLight}
          alt={`product photo of ${project.title}`}
          width={2002}
          height={3292}
        />
      </div>
      <div className={clsx("hidden select-none dark:block", project.translate)}>
        <Image
          src={project.projectImage}
          alt={`product photo of ${project.title}`}
          width={2002}
          height={3292}
        />
      </div>
      <div
        className={clsx(
          "absolute bottom-2 left-3 m-2 box-border flex h-12 w-8 items-center justify-center transition-all duration-500",
          `group-hover:${project.width}`
        )}
      >
        <div className="rounded-full border-transparent transition-all duration-300 hover:border-4 hover:border-white/20">
          <div
            className={clsx(
              "flex h-8 w-8 items-center justify-end gap-4 overflow-hidden rounded-full bg-dw p-2 text-text transition-all duration-500",
              `group-hover:${project.width} hover:${project.width}`
            )}
          >
            <a
              href={project.url}
              target={"_blank"}
              rel="noreferrer"
              className="flex items-center gap-3"
            >
              <h1 className="translate-x-[-10px] whitespace-nowrap opacity-0 transition-all delay-200 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {project.title}
              </h1>
              <ImArrowUpRight2 />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
