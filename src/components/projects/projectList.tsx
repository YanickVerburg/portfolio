import { ProjectList } from "../../types";

const projectList: ProjectList[] = [
  {
    id: "janskapsalon",
    title: "Jans kapsalon",
    coverImage: "/images/jk.webp",
    projectImage: "/images/jk.webp",
    url: "https://janskapsalon.vercel.app/",
    translate: "translate-y-[10px] sm:translate-y-[-96px]",
    width: "w-[162px]",
    grid: "col-span-2 row-span-1",
    order: "order-2",
    description:
      "Jans kapsalon is een website gemaakt voor een fictieve kapper. Het doel van de website is om informatie te vinden over de kapperszaak, en een afspraak te kunnen boeken. Ook moet de kapper zelf een managmentsysteem hebben om afspraken in te zien en gegevens aan te passen.",
    workedOn: [
      { work: "Design voor website gemaakt" },
      { work: "Design voor website gerealiseerd" },
      { work: "Website en bedrijf online gezet" },
    ],
    newSkills: [
      { skill: "Het maken van een website met React" },
      { skill: "Het stylen van een website met Tailwind CSS" },
      {
        skill:
          "Het online zetten van een website met Docker, Portainer, en Nginx Proxy Manager",
      },
      { skill: "Het ophalen van reviews van de google places api" },
      { skill: "Het ophalen van bedrijfsgegevens van google" },
    ],
  },
  {
    id: "fly-n",
    title: "Fly-n",
    coverImage: "/images/fly-n.webp",
    projectImage: "/images/fly-n-pf.webp",
    url: "https://flyn.vercel.app/",
    translate: "translate-y-[10px] sm:translate-y-0",
    width: "w-[90px]",
    grid: "col-span-1 row-span-2",
    order: "order-1",
    description:
      "Fly-n is een internationale reisapp die het mogelijk maakt om van deur tot deur reizen te vinden en te boeken. Het doel van fly-n is om verschillende reisaanbieders te combineren, om zo tot een compleet reisplan te komen. Je wordt doorverwezen om tickets te boeken.",
    workedOn: [
      { work: "Design voor app gemaakt" },
      { work: "Design voor app gerealiseerd" },
      { work: "App online gezet" },
      { work: "Terms of Service opgesteld" },
      {
        work: "Idee pitchen aan grote bedrijven voor eventuele samenwerkingen",
      },
    ],
    newSkills: [
      { skill: "Het maken van een app met react native" },
      { skill: "Het stylen van een app met react native paper" },
      { skill: "De benodigdheden om een app in de play store te zetten" },
      { skill: "Het opstellen van een Terms of Service" },
    ],
  },
];
export default projectList;
