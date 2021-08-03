// * Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Hridaya Agrawal",
  title: "Hi all, I'm Hridaya",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / React JS / Node JS / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hridaya423",
  linkedin: "https://www.linkedin.com/in/learnearnfun/",
  gmail: "hridayahoney@gmail.com",
  gitlab: "https://gitlab.com/hridaya423",
  facebook: "https://www.facebook.com/LearnEarn4Fun",
  medium: "https://medium.com/@hridayahoney",
  stackoverflow: "https://stackoverflow.com/users/15129164/hridaya-agrawal",
  twitter: "https://twitter.com/AgrawalHridaya",
  instagram: "https://www.instagram.com/hridayaagrawal2/",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "Data Science & AI",
    emoji("⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases"),
    emoji("⚡ Experience of working with Computer Vision and NLP projects"),
    emoji("⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"),
    "Full Stack Development",
    emoji("⚡ Building resposive website front end using React-Redux"),
    emoji("⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin"),
    emoji("⚡ Creating application backend in Node, Express & Flask"),
    "Cloud Infra-Architecture",
    emoji("⚡ Experience working on multiple cloud platforms"),
    emoji("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"),
    emoji("⚡ Deploying deep learning models on cloud to use on mobile devices"),
    emoji("⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"),
    "UI/UX Design",
    emoji("⚡ Designing highly attractive user interface for mobile and web applications"),
    emoji("⚡ Customizing logo designs and building logos from scratch"),
    emoji("⚡ Creating the flow of application functionalities to optimize user experience")
  ],

  softwareSkills: [
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React JS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node JS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Vue JS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Angular JS",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Passport JS",
      fontAwesomeClassname: "fas fa-passport"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Orchids the International School Vivekananda",
      logo: "https://1.bp.blogspot.com/-NbmbXp7B1mM/Vr8wt3Ev3BI/AAAAAAAAE8k/fZVoTCGQpXg/s1600/ccccc.jpg",
      subHeader: "Grade 3, 4, 5",
      duration: "May 2018 - May 2021",
      desc: "Learnt a lot!",
      descBullets: ["Learnt a lot!"]
    },
    {
      schoolName: "Vydehi School Of Excellence",
      logo: "https://th.bing.com/th/id/OIP.U2pSLkQdWVgPRob3hpqxUQAAAA?pid=ImgDet&rs=1",
      subHeader: "Grade 2",
      duration: "May 2017 - May 2018",
      desc: "Learnt a lot!",
      descBullets: ["Learnt a lot!"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "99%"
    },
    {
      Stack: "Backend",
      progressPercentage: "99%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founder, CEO",
      company: "Learn Earn & Fun",
      companylogo: "https://yt3.ggpht.com/a-/AAuE7mCEl9wTEQHSb8JrEvy4WIO2cBF1hV5zTeMF3Q=s900-mo-c-c0xffffffff-rj-k-no",
      date: "July 2016 – Present",
      desc: "E-Learning for Kids & Programmers!",
      descBullets: [
        "Free & Paid E-Learning for Kids & Programmers!"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://yt3.ggpht.com/a-/AAuE7mCEl9wTEQHSb8JrEvy4WIO2cBF1hV5zTeMF3Q=s900-mo-c-c0xffffffff-rj-k-no",
      projectName: "Learn Earn & Fun",
      projectDesc: "Helped Creating their tutorials, website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://learnearnfun.com/"
        },
        {
          name: "Youtube Channel",
          url: "https://youtube.com/c/LearningFunEarn"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "3K YouTube Subscribers",
      subtitle: "3K YouTube Subscribers",
      image: "https://th.bing.com/th/id/OIP.rRY-_NyMCCvm6KCMmf_lvAHaEo?pid=ImgDet&rs=1",
      footerLink: []
    },
    {
      title: "Attended SAP Young Thinkers",
      subtitle:
        "Attended SAP Young Thinkers Festival.",
      image: require("../assets/YLF Cert.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://learnearnfun.com",
      title: "Learn Earn & Fun Blog",
      description:
        "Learn Earn & Fun Blog"
    },
    {
      url: "https://kids.learnearnfun.com",
      title: "Learn Earn & Fun Kids",
      description:
        "Learn Earn & Fun Kids"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false  // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "hridayahoney@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "AgrawalHridaya", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
