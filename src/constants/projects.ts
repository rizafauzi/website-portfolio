export interface IProject {
  // id: number;
  title: string;
  slug: string;
  year: string;
  description: string;
  summary: string;
  navigation: string;
  first_color: string;
  second_color: string;
  website: string | null;
  role: string;
  image: string;
  company: string;
  tech_used: string[];
}

export interface Itech_used {
  label: string;
  image: string;
  url: string;
  first_color: string;
  second_color: string;
}

export const projects: IProject[] = [
  {
    title: "Backoffice UI",
    slug: "backoffice-bibit",
    year: "November 2020 - Present",
    description:
      "Bibit is a mutual fund application to help beginner investors to start investing. Anyone can directly invest optimally according to the level of risk. No experience needed and without confusion.",
    summary: "Bibit is a mutual fund application to help beginner investors to start investing.",
    navigation: "#",
    first_color: "#7ED19A",
    second_color: "#5198B7",
    website: null,
    role: "Frontend Developer",
    image: "bibit",
    company: "bibit",
    tech_used: ["react-js"],
  },
  {
    title: "House of Talent (HOT+)",
    slug: "hot-rcti",
    year: "May - July 2020",
    description:
      "Home of Talent (HOT) is a feature for digital talent shows and also social media for users. From the beginning of the competition, judging, to the end, everything is done digitally. In this feature, contestants just upload videos on the platform provided by RCTI+. Participants can follow, like, comment, and vote for each other.",
    summary:
      "Home of Talent (HOT) is a feature for digital talent shows and also social media for users.",
    navigation: "#",
    first_color: "#7ED19A",
    second_color: "#5198B7",
    website: "https://hot.rctiplus.com",
    role: "Frontend Engineer",
    image: "rcti",
    company: "rcti",
    tech_used: ["react-js", "next-js"],
  },
  {
    title: "Virtual Playfest",
    slug: "virtual-playfest",
    year: "September - December 2020",
    description:
      "Virtual Playfest is part of Playfest. Playfest is annual event held by Narasi.tv that inviting artists, influencers, and a lot of inspirational person. Due to Covid-19, Virtual Playfest was held online. And this is the first time Virtual Playfest ",
    summary:
      "Virtual Playfest is part of Playfest. Virtual Playfest 2020 id the first event that held online, contains a lot of amazing event.",
    navigation: "#",
    first_color: "#7ED19A",
    second_color: "#5198B7",
    website: "https://virtualplayfest.narasi.tv",
    role: "Frontend Developer",
    image: "virtual_playfest",
    company: "narasi",
    tech_used: ["vue-js", "nuxt-js"],
  },
  {
    title: "Playfest",
    slug: "playfest",
    year: "Sep - Dec 2020",
    description:
      "Playfest 2020 is an annual festival held by Narasi. Playfest 2020 was held online because of COVID-19. Narasi that we usually know Narasi TV is a digital-based media as a place and space for opinions, enriches perspectives and encourages creating like we are good friends, you know.",
    summary:
      "Playfest 2020 is an annual festival held by Narasi.tv. Playfest 2020 was held online because of COVID-19.",
    navigation: "#",
    first_color: "#FF9CE9",
    second_color: "#8E64C4",
    role: "Frontend Developer",
    website: "https://playfest.narasi.tv",
    image: "playfest",
    company: "narasi",
    tech_used: ["vue-js", "nuxt-js"],
  },
  {
    title: "Indonesia Butuh Anak Muda",
    slug: "ibam",
    year: "Dec 2020 - Present",
    description:
      "IBAM is a series of conferences, talkshows with the community, and art installation exhibitions.",
    summary:
      "IBAM is a series of conferences, talkshows with the community, and art installation exhibitions.",
    navigation: "#",
    first_color: "#7ED19A",
    second_color: "#5198B7",
    role: "Frontend Developer",
    website: "https://indonesiabutuhanakmuda.narasi.tv/",
    image: "ibam",
    company: "narasi",
    tech_used: ["vue-js", "nuxt-js"],
  },
  {
    title: "Narasi.tv",
    slug: "narasitv",
    year: "Dec 2020 - Present",
    description:
      "Narasi.tv is the official website of Narasi TV. Narasi TV itself is a startup that was founded by Najwa since the beginning of 2018. Narasi TV was created by Najwa from scratch. He and two other co-founders are determined to create a quality program that still attracts the attention of the audience.",
    summary:
      "Narasi.tv is the official website of Narasi TV. Narasi TV itself is a startup that was founded by Najwa since the beginning of 2018.",
    navigation: "#",
    first_color: "#FF9CE9",
    second_color: "#8E64C4",
    role: "Frontend Developer",
    website: "https://narasi.tv",
    image: "narasi_tv",
    company: "narasi",
    tech_used: ["figma", "xd", "prisma"],
  },
  {
    title: "Event Narasi.tv",
    slug: "event-narasi",
    year: "Dec 2020 - Present",
    description:
      "Narasi.tv events is a website that contains all past and future Narasi.tv events & festivals.",
    summary:
      "Narasi.tv events is a website that contains all past and future Narasi.tv events & festivals.",
    navigation: "#",
    first_color: "#FF9CE9",
    second_color: "#8E64C4",
    role: "Frontend Developer",
    website: "https://event.narasi.tv",
    image: "event_narasi",
    company: "narasi",
    tech_used: ["vue-js", "nuxt-js"],
  },
  {
    title: "1Medix App",
    slug: "onemedix",
    year: "Jun 2020 - Nov 2020",
    description:
      "1Medix App is pre-medical checkup for COVID-19. It allows user to books a SWAB / Rapid test based on nearest location.",
    summary:
      "1Medix App is pre-medical checkup for COVID-19. It allows user to books a SWAB / Rapid test based on nearest location.",
    navigation: "#",
    website: null,
    first_color: "#FF9CE9",
    second_color: "#8E64C4",
    role: "Tech Leader",
    image: "pcmi",
    company: "xapiens",
    tech_used: ["react-js", "xd", "node-js", "postgresql"],
  },
  {
    title: "Loudspeaker",
    slug: "loudspeaker",
    year: "Jun 2020 - Nov 2020",
    description:
      "Loudspeaker is Learning Management System (LMS) for MBSS Tbk. Built with interactive article, video, quiz, and assessment. Ship Crew. It educates ship crew  Health, Safety and Environment (HSE) and fundamental knowledge about Shiping.",
    summary:
      "Loudspeaker is Learning Management System (LMS) for MBSS Tbk., built with interactive article, video, quiz, and assessment.",
    navigation: "#",
    first_color: "#FF9CE9",
    second_color: "#8E64C4",
    role: "UI Designer, Mobile Dev, Web Dev",
    website: "https://play.google.com/store/apps/details?id=com.mbss_loudspeaker",
    image: "lms",
    company: "xapiens",
    tech_used: ["xd", "react-js"],
  },
  {
    title: "Asset Resource Management System",
    slug: "arms",
    year: "Dec 2018 - Sept 2019",
    description: `ARMS is system that help Petrosea.Tbk to manage assets and resources for daily basis. ARMS is integrated with internal Petrosea SAP as master data. The apps are web based (for admin) and mobile based (for Crew) It contains schedule management, roster, real-time approval message, `,
    summary:
      "ARMS is system that help Petrosea.Tbk to manage assets and resources for daily basis.",
    navigation: "#",
    website: null,
    first_color: "#FF9CE9",
    second_color: "#8E64C4",
    role: "Backend Engineer",
    image: "arms",
    company: "xapiens",
    tech_used: ["node-js", "graphql", "postgresql", "prisma"],
  },
];
