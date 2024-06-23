import {
    projectsIcon1,
    projectsIcon2,
    projectsIcon3,
    projectsIcon4,
    projectsImage2,
    chromecast,
    disc02,
    react,
    discordBlack,
    facebook,
    pandas,
    file02,
    scikitlearn,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    mongodb,
    mysql,
    plusSquare,
    python,
    js,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    flutter,
    sliders04,
    telegram,
    twitter,
    yourlogo,
    beeware,
    flutterBW,
    programmingDash,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "1",
      title: "Abilities",
      url: "#abilities",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    // {
    //   id: "4",
    //   title: "New account",
    //   url: "#signup",
    //   onlyMobile: true,
    // },
    // {
    //   id: "5",
    //   title: "Sign in",
    //   url: "#login",
    //   onlyMobile: true,
    // },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Lorem Ipsum",
    "Dolor Sit Amet",
    "Consectetur Adipiscing",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "December 2024",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date: "December 2024",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Some of the languages, technologies and frameworks i have worked with are below.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Multidisciplinary Programming",
      text: "Frontend, Backend and cross-platform developer. I love creating visually appealing and user-friendly business solutions.",
    },
    {
      id: "1",
      title: "Machine Learning and Artificial Intelligence",
      text: "Strong interest in AI and ML. I have experience in creating models for various applications, from image recognition to predictive analytics.",
    },
    {
      id: "2",
      title: "Cloud Computing",
      text: 'Although not commercial experience, I have a great understanding of cloud computing and have worked with GCP. Working on attaining certifications and integration for future projects.',
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Python",
      icon: python,
      width: 42,
      height: 54,
    },
    {
      id: "1",
      title: "MySQL",
      icon: mysql,
      width: 50,
      height: 43,
    },
    {
      id: "2",
      title: "Scikit-learn",
      icon: scikitlearn,
      width: 60,
      height: 46,
    },
    {
      id: "3",
      title: "React",
      icon: react,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Pandas",
      icon: pandas,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Flutter",
      icon: flutter,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "MongoDB",
      icon: mongodb,
      width: 44,
      height: 34,
    },
    {
      id: "7",
      title: "JavaScript",
      icon: js,
      width: 45,
      height: 32,
    },
  ];
  
  export const projects = [
    {
      id: "0",
      title: "Inventory Manager",
      text: "Cross platform inventory manager with a focus on ease of use and scalability. Built with Flutter and MongoDB, allowing cloud storage as well as CRUD operations with Node.js.",
      backgroundUrl: "./src/assets/projects/card-1.svg",
      iconUrl: flutterBW,
      imageUrl: projectsImage2,
      projectUrl: "https://github.com/mwilko/Inventory-Manager",
    },
    {
      id: "1",
      title: "Mobile Health Application",
      text: "Mobile application made with BeeWare, utilising Pose Estimation and Machine Learning Algorithms to predict chronic conditions.",
      backgroundUrl: "./src/assets/projects/card-2.svg",
      iconUrl: beeware,
      imageUrl: projectsImage2,
      light: true,
      projectUrl: "https://github.com/mwilko/Mobile_Health_App",
    },
    {
      id: "2",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      backgroundUrl: "./src/assets/projects/card-3.svg",
      iconUrl: projectsIcon3,
      imageUrl: projectsImage2,
      projectUrl: "",
    },
    {
      id: "3",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      backgroundUrl: "./src/assets/projects/card-4.svg",
      iconUrl: projectsIcon4,
      imageUrl: projectsImage2,
      light: true,
      projectUrl: "",
    },
    {
      id: "4",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      backgroundUrl: "./src/assets/projects/card-5.svg",
      iconUrl: projectsIcon1,
      imageUrl: projectsImage2,
      projectUrl: "",
    },
    {
      id: "5",
      title: "Coming Soon!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      backgroundUrl: "./src/assets/projects/card-6.svg",
      iconUrl: projectsIcon2,
      imageUrl: projectsImage2,
      projectUrl: "",
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];