import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Hriday Agrawal",
  title: "Hey, I'm Hriday",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀. With Knowledge of many cool frameworks & languages"
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hridaya423",
  gmail: "hridayahoney@gmail.com",
  gitlab: "https://gitlab.com/hridaya423",
  facebook: "https://www.facebook.com/LearnEarn4Fun",
  medium: "https://medium.com/@hridayahoney",
  stackoverflow: "https://stackoverflow.com/users/15129164/hridaya-agrawal",
  twitter: "https://twitter.com/AgrawalHridaya",
  instagram: "https://www.instagram.com/hridayaagrawal2/",
  fiverr: "https://www.fiverr.com/hridyaagrawal",
  upwork: "https://www.upwork.com/freelancers/~01b556a47770df08a5",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    { title: "Data Science & AI",
      descBullets: [emoji("⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases"),
                    emoji("⚡ Experience of working with Computer Vision and NLP projects"),
                    emoji("⚡ Complex quantitative modelling for dynamic forecasting and time series analysis")]
      
    },
    { title: "Full Stack Development",
      descBullets: [emoji("⚡ Building resposive website front end using React-Redux"),
                    emoji("⚡ Developing mobile applications using Flutter, React Native and solo android apps using Android"),
                    emoji("⚡ Creating application backend in Node, Express.")]
    },
    { title: "Cloud Infra-Architecture",
     descBullets: [emoji("⚡ Experience working on multiple cloud platforms"),
                   emoji("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"),
                   emoji("⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS")]
    },
    { title: "UI/UX Design",
      descBullets: [emoji("⚡ Designing highly attractive user interface for mobile and web applications"),
                    emoji("⚡ Customizing logo designs and building logos from scratch"),
                    emoji("⚡ Creating the flow of application functionalities to optimize user experience")]
    }
  ],

  softwareSkills: [
    {
      skillName: "Solidity",
      img: "https://www.blockchainacademy.asia/wp-content/uploads/2019/04/solidity-188x300.png",
      color: "#346ce4"
    },
     {
      skillName: "Chainlink",
      img: "https://cryptologos.cc/logos/chainlink-link-logo.png",
      color: "#346ce4"
    },
    {
      skillName: "Biconomy",
      img: "https://cwstatic.nyc3.digitaloceanspaces.com/4569/Biconomy-Logo.jpg",
      color: "#346ce4"
    },
    {
      skillName: "Superfluid",
      img: "https://media-exp1.licdn.com/dms/image/C4D0BAQHwwz5cJJsdew/company-logo_200_200/0/1595701202437?e=1654732800&v=beta&t=eENH6UOUetnDV1R3BkJyN04sYz45CPrqbjDSkUxukhY",
      color: "#346ce4"
    },
    {
      skillName: "Livepeer",
      img: "https://logowik.com/content/uploads/images/t_livepeer-lpt-coin7356.jpg",
      color: "#346ce4"
    },
    {
      skillName: "IPFS",
      img: "https://definicionesde.org/wp-content/uploads/2020/07/Ipfs-logo-1024-ice-text.png",
      color: "#346ce4"
    },
    {
      skillName: "Arcana",
      img: "https://media-exp1.licdn.com/dms/image/C4E0BAQGexYINdJal4Q/company-logo_200_200/0/1622567556893?e=1654732800&v=beta&t=580t6BjFtHhNm9eo8JAqw2NzaS_tzJum7jsMYcwWDTs",
      color: "#346ce4"
    },
    {
      skillName: "FileCoin",
      img: "https://cryptologos.cc/logos/filecoin-fil-logo.png",
      color: "#346ce4"
    },
    {
      skillName: "Alchemy",
      img: "https://res.cloudinary.com/cryptojobslist/image/fetch/w_300,h_300,c_pad,b_white,q_auto,fl_lossy,f_auto/dpr_2.0/https://storage.googleapis.com/job-listing-logos/c6f317ee-eeac-4392-bbbf-a86b1322313d.png",
      color: "#346ce4"
    },
    {
      skillName: "HTML 5",
      img: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
      color: "#F06529"
    },
    {
      skillName: "CSS 3",
      img: "https://clipground.com/images/css-3-logo-clipart.jpg  ", 
      color: "#3C99DC"
    },
    {
      skillName: "Sass",
      img: "http://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",
      color: "#CD6799"
    },
    {
      skillName: "JavaScript",
      img: "http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg",
      color: "#FDC72E"
    },
    {
      skillName: "React JS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      color: "#61DBFB"
    },
      {
        skillName: "Node JS",
        img: "https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png",
        color: "#68A063"
      },
    {
      skillName: "NPM",
      img: "https://www.logolynx.com/images/logolynx/7f/7fb976a537620fed310872d533cd161c.png",
      color: "#68A063"
    },
    {
      skillName: "SQL",
      img: "https://th.bing.com/th/id/OIP.E6i6aq5yJucBSl3QlkIMIAHaHa?pid=ImgDet&rs=1",
      color: "#00008b"
    },
    {
      skillName: "AWS",
      img: "https://images.idgesg.net/images/article/2018/11/aws_logo-100781597-large.jpg",
      color: "#FF9900"
    },
    {
      skillName: "Firebase",
      img: "http://pluspng.com/img-png/firebase-logo-png-firebase-logo-png-transparent-amp-svg-vector-pluspng-2400x3291.png",
      color: "#FFA611"
    },
    {
      skillName: "Python",
      img: "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png",
      color: "#306998"
    },
    {
      skillName: "Docker",
      img: "http://logos-download.com/wp-content/uploads/2016/09/Docker_logo.png",
      color: "#0db7ed"
    },
    {
      skillName: "Tensorflow",
      img: "https://miro.medium.com/max/4000/0*4Z6mwORGhtSAgeQ2.png",
      color: "#EC8C24"
    },
    {
      skillName: "PyTorch",
      img: "https://shiftlab.github.io/pytorch/assets/images/pytorch-logo.png",
      color: "#EC4C2C"
    },
    {
      skillName: "Keras",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png",
      color: "#D40404"
    },
    {
      skillName: "Java",
      img: "http://logos-download.com/wp-content/uploads/2016/10/Java_logo.png",
      color: "#5382a1"
    },
    {
      skillName: "Vue JS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      color: "#41B883"
    },
    {
      skillName: "Angular JS",
      img: "https://img2.freepng.es/20180701/rht/kisspng-angularjs-logo-javascript-security-token-5b38e22b8a3f38.7851363415304545715663.jpg",
      color: "#B52E31"
    },
    {
      skillName: "Passport JS",
      img: "https://miro.medium.com/max/400/1*YI1tt4kGzvea-v4dAhZ90w.png",
      color: ""
    },
    {
        skillName: "Express JS",
        img: "https://buttercms.com/static/images/tech_banners/ExpressJS.8587dd0647ca.png",
        color: ""
    },
    {
      skillName: "Android",
      img: "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo.png",
      color: "#32DE84"
    },
    {
      skillName: "Bootstrap",
      img: "https://sdtimes.com/wp-content/uploads/2018/01/bootstrap-stack.png",
      color: "#602C50"
    },
    {
      skillName: "Yarn",
      img: "https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png",
      color: "#348CBB"
    },
    {
      skillName: "MongoDB",
      img: "https://clipartart.com/images/mongodb-logo-clipart-6.jpg",
      color: "#3FA037"
    },
    {
      skillName: "Figma",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
      color: "#F86040"
    },
    {
      skillName: "Gatsby",
      img: "https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png",
      color: "#744c9c"
    },
    {
      skillName: "Azure",
      img: "https://swimburger.net/media/0zcpmk1b/azure.jpg",
      color: "#0962b0"
    },
    {
      skillName: "Flutter",
      img: "https://yt3.ggpht.com/a/AGF-l7-pLWHhqjLR5ZVoKzV9_eU6IjYrDyhvSLRjsw=s900-mo-c-c0xffffffff-rj-k-no",
      color: "#5dc9f9"
    },
    {
      skillName: "Kubernetes",
      img: "http://www.thagomizer.com/img/kubernetes-logo.png",
      color: "#346ce4"
    },
    {
      skillName: "Unity",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Funity-logo.png&f=1&nofb=1",
      color: "#000"
    },
    {
      skillName: "Unreal Engine",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2018%2F09%2FUnreal_Tournament_Logo_round_1.png&f=1&nofb=1",
      color: "#000"
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
      duration: "May 2018 - Apr 2022",
      desc: "Learnt a lot!",
      descBullets: ["Learnt a lot!"]
    },
    {
      schoolName: "Vydehi School Of Excellence",
      logo: "https://th.bing.com/th/id/OIP.U2pSLkQdWVgPRob3hpqxUQAAAA?pid=ImgDet&rs=1",
      subHeader: "Grade 2",
      duration: "May 2017 - Apr 2018",
      desc: "Learnt a lot!",
      descBullets: ["Learnt a lot!"]
    },
    {
      schoolName: "Orchids the International School Vivekananda",
      logo: "https://1.bp.blogspot.com/-NbmbXp7B1mM/Vr8wt3Ev3BI/AAAAAAAAE8k/fZVoTCGQpXg/s1600/ccccc.jpg",
      subHeader: "Grade 1",
      duration: "May 2016 - Apr 2017",
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

const techStackData = {
  title: "Tech Stacks",
  subtitle: "Tech Stacks that I know",
  display: false,
  techStacks: [
  {
    name: "MEAN Stack",
    icons: [
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "fab fa-envira",
        color: "#3FA037",
      },
      {
        skillName: "Express JS",
        fontAwesomeClassname: "fas fa-train",
        color: "",
      },
      {
        skillName: "Angular JS",
        fontAwesomeClassname: "fab fa-angular",
        color: "#B52E31",
      },
      {
        skillName: "Node JS",
        fontAwesomeClassname: "fab fa-node",
        color: "#68A063",
      }
    ]
  },
  {
    name: "MERN Stack",
    icons: [
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "fab fa-envira",
        color: "#3FA037",
      },
      {
        skillName: "Express JS",
        fontAwesomeClassname: "fas fa-train",
        color: "",
      },
      {
        skillName: "React JS",
        fontAwesomeClassname: "fab fa-react",
        color: "#61DBFB",
      },
      {
        skillName: "Node JS",
        fontAwesomeClassname: "fab fa-node",
        color: "#68A063",
      }
    ]
  },
  {
    name: "MEVN Stack",
    icons: [
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "fab fa-envira",
        color: "#3FA037",
      },
      {
        skillName: "Express JS",
        fontAwesomeClassname: "fas fa-train",
        color: "",
      },
      {
        skillName: "Vue JS",
        fontAwesomeClassname: "fab fa-vuejs",
        color: "#41B883"
      },
      {
        skillName: "Node JS",
        fontAwesomeClassname: "fab fa-node",
        color: "#68A063",
      }
    ]
  }
 ]
};


// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
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

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

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
  display: false // Set false to hide this section, defaults to true
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
      image: require("./assets/images/YLF Cert.png"),
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
  display: false // Set false to hide this section, defaults to true
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
  techStackData,
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
