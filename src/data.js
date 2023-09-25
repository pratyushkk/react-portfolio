import p1 from "./assets/project-1.jpeg";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Figma to HTML",
    id: "to-html",
  },
  {
    name: "Mobile App",
    id: "mobile-app",
  },
  {
    name: "Website",
    id: "website",
  },
];

export const projects = [
  {
    name: "Sumz AI Summery App",
    image: p1,
    tags: ["dashboard", "website"],
    link: "https://github.com/pratyushkk/sumz-ai",
  },
  {
    name: "Watcher-Movie recommendation App",
    image: p2,
    link: "https://github.com/pratyushkk/sumz-ai",
    tags: ["website"],
  },
  {
    name: "Figma to React App",
    image: p3,
    link: "https://github.com/pratyushkk/sumz-ai",
    tags: ["to-html"],
  },
  {
    name: "We Are Solving Global Problems",
    image: p4,

    tags: ["mobile-app"],
  },
  {
    name: "The English Tea Ceremony",
    image: p5,

    tags: ["website", "dashboard"],
  },
  {
    name: "Saving Photo Memories",
    image: p6,

    tags: ["website"],
  },
];

export const achievements = [
  {
    id: 1,
    year: 12,
    description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
  },
  {
    id: 2,
    year: 1,
    description: "YEARS OF<br />EXPERIENCE",
  },
  {
    id: 3,
    year: 10,
    description: "TECHNOLOGIES",
  },
  {
    id: 4,
    year: 10,
    description: "BLOG<br />POSTS",
  },
];
