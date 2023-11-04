export interface IExperience {
  slug: string;
  title: string;
  role: string;
  status: string;
  startTime: string;
  endTime: string;
  image: string;
  link: string;
  background: string;
  firstColor: string;
  secondColor: string;
  projects: string[];
}

export const experiences = [
  {
    slug: "flock",
    title: "Flock",
    role: "Senior Frontend Engineer",
    status: "Full-time",
    startTime: "2022",
    endTime: "Present",
    image: "logo_flock.png",
    link: "",
    background: "bibit_desktop",
    firstColor: "#88318a",
    secondColor: "#3c2873",
    projects: ["backoffice-bibit"],
  },
  {
    slug: "bibit",
    title: "Bibit.id",
    role: "Lead Frontend Engineer",
    status: "Full-time",
    startTime: "November 2020",
    endTime: "Present",
    image: "logo_bibit.png",
    link: "",
    background: "bibit_desktop",
    firstColor: "#88318a",
    secondColor: "#3c2873",
    projects: ["backoffice-bibit"],
  },
  {
    slug: "bibit",
    title: "Vision+",
    role: "Frontend Engineer",
    status: "Freelance",
    startTime: "2022",
    endTime: "Present",
    image: "logo_bibit.png",
    link: "",
    background: "bibit_desktop",
    firstColor: "#DC59DF",
    secondColor: "#5236A1",
    projects: ["backoffice-bibit"],
  },
  {
    slug: "rcti",
    title: "RCTI+",
    role: "Frontend Engineer",
    status: "Contract",
    startTime: "May 2021",
    endTime: "July 2021",
    image: "logo_rcti.png",
    background: "rcti_desktop",
    link: "",
    firstColor: "#2a5e7c",
    secondColor: "#411f74",
    projects: ["hot-rcti"],
  },
  {
    slug: "narasi",
    title: "Narasi.tv",
    role: "Frontend Developer",
    status: "Contract",
    startTime: "May 2021",
    endTime: "November 2020",
    image: "logo_narasi.png",
    background: "virtual_playfest_desktop",
    link: "",
    firstColor: "#60CECE",
    secondColor: "#329B3D",
    projects: ["playfest", "virtual-playfest", "ibam", "narasitv", "event-narasi"],
  },
  {
    slug: "xti",
    title: "Xapiens",
    role: "Fullstack Engineer",
    status: "Full-time",
    startTime: "December 2018",
    endTime: "November 2020",
    image: "logo_xapiens.png",
    background: "lms_desktop",
    link: "",
    firstColor: "#FFB8FB",
    secondColor: "#C24D3D",
    projects: ["arms", "loudspeaker", "onemedix"],
  },
  {
    slug: "ugm",
    title: "UGM",
    role: "Assistant Lecturer",
    status: "Full-time",
    startTime: "August 2016",
    endTime: "May 2018",
    image: "logo_ugm.png",
    background: "bibit_desktop",
    link: "#7BD86C",
    firstColor: "#E37575",
    secondColor: "#AC46C6",
    projects: [],
  },
];
