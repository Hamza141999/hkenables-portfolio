import github from "./public/assets/aboutme_section_assets/github.svg";
import ai from "./public/assets/aboutme_section_assets/ai.svg";
import aws from "./public/assets/aboutme_section_assets/aws.svg";
import dart from "./public/assets/aboutme_section_assets/dart.svg";
import figma from "./public/assets/aboutme_section_assets/figma.svg";
import js from "./public/assets/aboutme_section_assets/js.svg";
import metamask from "./public/assets/aboutme_section_assets/metamask.svg";
import next from "./public/assets/aboutme_section_assets/next.svg";
import psd from "./public/assets/aboutme_section_assets/psd.svg";
import react from "./public/assets/aboutme_section_assets/react.svg";
import ts from "./public/assets/aboutme_section_assets/ts.svg";
import graph from "./public/assets/aboutme_section_assets/graphql.svg";

import rentto from "./public/assets/portfolio_section/rentto.png";
import auqta from "./public/assets/portfolio_section/auqta.png";
import farbe from "./public/assets/portfolio_section/farbe.png";
import isekaiverse from "./public/assets/portfolio_section/isekaiverse.png";
import fm from "./public/assets/portfolio_section/fm.png";

const PROJECTS_DATA = [
  {
    project_name: "Auqta",
    project_type: "Immersive Real Estate Portal",
    project_description:
      "AUQTA is an Immersive Real Estate Portal where Real Estate Agents and Developers can list their properties/projects for customers to purchase, invest, or rent. It also allows agents/developers to upload their property's 360 degree tours for people to visualise properties without having to visit it physically.",
    project_tech: [js, aws, next],
    live_link: "https://auqta.com",
    github_link: "asd",
    project_image: auqta,
    secondary_color: "#85DBF0",
    primary_color: "#4CA7F7",
    dark_color: "#16255B",
    isFreelance: true,
    isComplete: true,
    isLive: true,
  },
  {
    project_name: "Renttoapp",
    project_type: "Real Estate Portal",
    project_description:
      "Rentto is a Real Estate Portal where users can rent Workplaces and Properties without the hassle of a middle man. Users can directly contact the owners, who list their properties on Rentto, and can negotiate a ruitable price!",
    project_tech: [js, aws, next],
    live_link: "https://renttoapp.com/",
    github_link: "asd",
    project_image: rentto,
    secondary_color: "#f09737",
    primary_color: "#387F80",
    dark_color: "#053434",
    isFreelance: true,
    isComplete: false,
  },
  {
    project_name: "Isekaiverse",
    project_type: "Anime Themed Blockchain Ecosystem",
    project_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    project_tech: [js, aws, next, metamask, graph],
    live_link: "https://www.isekaiverse.io/",
    project_image: isekaiverse,
    secondary_color: "#40EA6B",
    primary_color: "#5F11D1",
    dark_color: "#2C016A",
    isFreelance: false,
    isComplete: true,
  },
  {
    project_name: "FARBE",
    project_type: "NFT Marketplace",
    project_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    project_tech: [js, aws, next, metamask, graph],
    live_link: "https://www.isekaiverse.io/",
    project_image: farbe,
    secondary_color: "#17FFC6",
    primary_color: "#FFFFFF",
    dark_color: "#098F6E",
    isFreelance: false,
    isComplete: true,
  },
  {
    project_name: "Football Meta",
    project_type: "Blockchain P2E Game",
    project_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    project_tech: [ts, aws, next, metamask, graph],
    live_link: "https://www.isekaiverse.io/",
    project_image: fm,
    secondary_color: "#18B5CD",
    primary_color: "#73EAFC",
    dark_color: "#1B2B41",
    isFreelance: false,
    isComplete: true,
  },
];

export { PROJECTS_DATA };
