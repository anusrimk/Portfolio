import paintImg from "../assets/paint.png";
import cameraImg from "../assets/camera.png";
import asperiteImg from "../assets/aseprite_file.png";
import githubImg from "../assets/github.png";
import contactImg from "../assets/contact_book.png";
import fileImg from "../assets/file.png";

import reactLogo from "../assets/logos/react.svg";
import firebaseLogo from "../assets/logos/firebase.svg";
import githubLogo from "../assets/logos/github.svg";
import graphLogo from "../assets/logos/graphql.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import nodeLogo from "../assets/logos/node.svg";
import pythonLogo from "../assets/logos/python.svg";
import cssLogo from "../assets/logos/css.svg";
import htmlLogo from "../assets/logos/html.svg";
import expressLogo from "../assets/logos/express.svg";
import mongoLogo from "../assets/logos/mongodb.svg";
import figmaLogo from "../assets/logos/figma.svg";
import adobeExpressLogo from "../assets/logos/adobe_express.svg"

import dog1 from "../assets/dog1.gif";
import dog2 from "../assets/dog2.gif";
import unicorn from "../assets/unicorn.gif";
import cloud from "../assets/cloud.gif";
import snail from "../assets/snail.gif";

const techIcons = [
  figmaLogo,
  adobeExpressLogo,
  reactLogo,
  javascriptLogo,
  htmlLogo,
  cssLogo,
  firebaseLogo,
  nodeLogo,
  expressLogo,
  mongoLogo,
  pythonLogo,
  graphLogo,
  githubLogo,
];

const icons = [
  {
    id: 1,
    icon: asperiteImg,
    name: "Me",
  },
  {
    id: 2,
    icon: cameraImg,
    name: "About",
  },
  {
    id: 3,
    icon: paintImg,
    name: "Tech",
  },
  {
    id: 4,
    icon: githubImg,
    name: "Projects",
  },
  {
    id: 5,
    icon: contactImg,
    name: "Contact",
  },
];

const projects = [
  {
    name : "Vitals", 
    techStack : ["ReactJS", "NodeJS", "MongoDB", "Tailwind CSS", "GSAP", "Gemini"],
    description : "A health-risk analyser app that combines all your health data and gives you a dynamic underwriters dashboard for an insurance, and during the times of emergencies, it gives out the most suitable place for you to claim your insurance aNnd guides you for the process of it",
    whereMade : "HackX Hackathon 2025", 
    links : {
      github : ""
    }
  },
  {
    name: "Surge",
    techStack: ["ReactJS", "NodeJS", "MongoDB", "Tailwind CSS", "ThreeJS"],
    description:
      "AI-powered sales assistant that analyzes your workflow and performance, providing feedback and learning resources on the go. Selected for final screening and received funding proposals.",
    whereMade: "Imagine Hackathon 2025",
    links: {
      github: "https://github.com/Manmeet64/Surge",
    },
  },
  {
    name: "BigO",
    techStack: ["ReactJS", "Tailwind CSS", "MongoDB", "NodeJS"],
    description:
      "A flashcard learning tool that helps working professionals as well as students to gamify their quick learning process on the go! This project stood at the 4th place in the hackathon.",
    whereMade: "ISTD Hackathon 2025",
    links: {
      github: "https://github.com/Manmeet64/BigO-frontend",
    },
  },
  {
    name: "Visio",
    techStack: ["Figma", "ReactJS", "NodeJS", "MongoDB", "Firebase"],
    description:
      "A MERN stack project which is an educational website where students can study from K - 12th grade while learning with animations and assignments while parents also having all the analytics of their kids.",
    whereMade: "ITM Skills University",
    links: {
      github: "https://github.com/anusrimk/Byjus_The_Learning_App_1",
    },
  },
  {
    name: "Nurturon",
    techStack: ["Figma"],
    description:
      "An app which is your personal health assistant and which keeps a track of your previous health profile and gives you a health diagnosis based on that, keeps track of your medicines, reports and appointments and gives you the address of your nearest medical when your medicines are over.",
    whereMade: "ITM Skills University",
    links: {
      figma:
        "https://www.figma.com/design/xqCMG7mwPGhgYONm1Q999J/Nurturon?node-id=0-1&t=m5VdwEmpmxKnNb9g-1",
    },
  },
  {
    name: "Nirvana",
    techStack: ["ReactJS", "MongoDB", "NodeJS", "Figma"],
    description:
      "Nirvana was a matrimonial site that helped the users find their most compatible matches, calculate their astrological necessities and chat with their matches.",
    whereMade: "ITM Skills University",
    links: {
      github: "link_to_github_repo",
    },
  },
];

const animatedPets = [dog1, dog2, unicorn, cloud, snail];

export { icons, projects, githubImg, techIcons, fileImg, animatedPets };
