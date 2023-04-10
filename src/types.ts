export type ProjectList = {
  id: string;
  title: string;
  projectImage: string;
  coverImage: string;
  translate: string;
  width: string;
  url: string;
  grid: string;
  order: string;
  description: string;
  workedOn: {
    work: string;
  }[];
  newSkills: {
    skill: string;
  }[];
  icons: {
    icon: JSX.Element;
  }[];
};
