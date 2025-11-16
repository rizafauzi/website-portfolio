export interface IEducation {
  gpa: string;
  link: string;
  major: string;
  image: string;
  faculty: string;
  university: string;
  firstColor: string;
  secondColor: string;
}

export const education: IEducation[] = [
  {
    university: "***** ******* *********",
    faculty: "Postgraduate really soon",
    major: "Wish me the best!",
    image: "memoji_explode.png",
    gpa: "",
    link: "",
    firstColor: "#60CECE",
    secondColor: "#329B3D",
  },
  {
    university: "Universitas Indonesia",
    faculty: "Faculty of Computer Science",
    major: "Information System",
    image: "logo_ui.png",
    gpa: "3.74",
    link: "https://www.ui.ac.id/",
    firstColor: "#E37575",
    secondColor: "#AC46C6",
  },
  {
    university: "Universitas Gadjah Mada",
    faculty: "Vocational School",
    major: "Electrical Engineering",
    image: "logo_ugm.png",
    gpa: "3.64",
    link: "https://ugm.ac.id/",
    firstColor: "#F4E984",
    secondColor: "#C24D3D",
  },
];
