import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  // FaCode,
} from "react-icons/fa";
// import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/E_commerceAdmin.png";
import Work2 from "./assets/E_commerceUser.png";
import Work3 from "./assets/toyTeaterGameUsingJavascript.png";
import Work4 from "./assets/BootstrapWebPage.png";
import Work5 from "./assets/staticWebpage.png";
import Work6 from "./assets/FormValidator.png";
import Work7 from "./assets/MonthlyIntakeGraph.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Muthuraj",
  },

  {
    id: 2,
    title: "Father's Name : ",
    description: "Chelladurai",
  },

  {
    id: 3,
    title: "Age : ",
    description: "28 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Chennai",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "(+91) 8508457998",
  },

  {
    id: 8,
    title: "Email : ",
    description: "muthuraj.chella@gmail.com",
  },

  {
    id: 9,
    title: "Langages : ",
    description: "English",
  },
];

export const status = [
  {
    id: 1,
    no: "4+",
    title: "Years of overall work experience.",
  },
  {
    id: 2,
    no: "3+",
    title: "Years of professional experience specializing in React.js",
  },
  {
    id: 3,
    no: "20+",
    title: "Completed <br /> Projects",
  },

  {
    id: 4,
    no: "1",
    title: "Years of experience in mechanical engineering",
  },

  // {
  //   id: 3,
  //   no: "3",
  //   title: " Awards <br /> Won",
  // },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title:
      "Front End Developer <span> Milanity Innovation Pvt Ltd - Chennai </span>",
    desc: "Milanity Innovation Pvt Ltd is an IoT-focused company where I develop dynamic, user-interactive web applications, leveraging React.js to create seamless digital experiences aligned with W3 standards,",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2022",
    title: "Front End Developer <span> Fabevy - Chennai </span>",
    desc: "At Fabevy, I contributed as a front-end developer, building responsive and interactive web applications using React.js, ensuring high-quality user interfaces and adherence to industry standards",
  },
  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2019 - 2020",
    title:
      "Production Supervisor – Quality Control <span>Arumuga Groups of Industrial - Puliyangudi, Tamil Nadu</span>",
    desc: "Monitored production processes, ensured quality standards, conducted inspections, and collaborated with teams to improve efficiency and reduce defects.",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "Engineering Degree <span> Anna University - Chennai </span>",
    desc: "I hold a Bachelor's degree in Mechanical Engineering, which provided me with a solid foundation in analytical thinking, problem-solving, and technical skills applicable across various domains",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014",
    title: "School <span> Government High School - Vasudevanallur </span>",
    desc: "I completed my schooling at Government High School, where I built a strong academic foundation and developed essential skills in mathematics, science, and problem-solving, setting the stage for my engineering and professional journey",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },
  {
    id: 2,
    title: "Javascript",
    percentage: "70",
  },

  {
    id: 5,
    title: "Wordpress",
    percentage: "60",
  },

  {
    id: 8,
    title: "React",
    percentage: "80",
  },

  {
    id: 8,
    title: "Redux",
    percentage: "70",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "E-commerce Administration Site",
    link: "https://illa-shop.netlify.app/admin",
    desc: "E-commerce Administration Site",
  },

  {
    id: 2,
    img: Work2,
    title: "E-commerce Customer Site",
    link: "https://illa-shop.netlify.app/",
    desc: "E-commerce Customer Site",
  },
  {
    id: 3,
    img: Work3,
    title: "Logical Operations Game",
    link: "https://muthurajchella.github.io/Toy-Theater-JsProject/",
    desc: "Logical Operations Game",
  },
  {
    id: 7,
    img: Work7,
    title: "Graph Displaying Monthly Data on the Dashboard",
    link: "https://muthurajchella.github.io/Monthly-Scaling-/",
    desc: "Graph Displaying Monthly Data on the Dashboard",
  },
  {
    id: 4,
    img: Work4,
    title: "Responsive Website Using Bootstrap",
    link: "https://muthurajchella.github.io/pixelStudio/",
    desc: "",
  },

  {
    id: 5,
    img: Work5,
    title: "Customize Responsive React Wesite",
    link: "https://muthurajchella.github.io/eNo/",
    desc: "Customize React Wesite",
  },

  {
    id: 6,
    img: Work6,
    title: "Form valitation Using Javascript",
    link: "https://muthurajchella.github.io/formValidationjs/",
    desc: "Form valitation Using Javascript",
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
