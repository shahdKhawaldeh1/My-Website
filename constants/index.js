import {
    ux,
    asal,
    pr,
    android,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    git,
    Recipes,
   restaurant,
   portfolio,
   palestine,
    sport,
    movieworld,
    CarWash,
    watch,
    Tic,
    ece ,gazaSky, figma,
    shopping,gallery ,luxury, behance 
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

// array has collection of objects for about section 
const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "UX / UI  Design",
        icon: ux,
    },
    {
        title: "Marketing & PR",
        icon: pr,
    },
    {
        title: "Android Development",
        icon: android,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
   
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Figma",
        icon: figma,
    },

    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Front End Developer Training",
        company_name: "Asal Technologies",
        icon: asal,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Sep 2023",
        points: [
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "In-depth exploration of Js and react to create interactive web content.",
            "Developing and maintaining a web application for a store e-commerce website. ",
            "Dealing with APIs and implementing consistent design templates.",

        ],
    },
    {
        title: "UX / UI Design",
        company_name: "Gaza Sky Geeks",
        icon: gazaSky,
        iconBg: "#E6DEDD",
        date: "May 2023",
        points: [
            "Engaged in multiple courses and boot camps to enhance UI/UX design skills.",
            "Committed to delivering exceptional user experiences by applying design principles and best practices.",
            " Crafting visually stunning and highly functional user interfaces and case studies."
        ],
    },
    {
        title: "Marketing & PR",
        company_name: "IEEE , ECE Club, Mazya Mall",
        icon: ece,
        iconBg: "#E6DEDD",
        date: "November 2021 - Present",
        points: [
            "Passionate about creating and implementing effective marketing and PR strategies.",
            "Actively engaged in Birzeit University clubs and Volunteer Coordination.",
            "Event planning and coordination, demonstrating organizational and leadership abilities.",
            "Organized hackathons to promote teamwork and networking among students.",
        ],
    },

];
const projects = [
    {
        name: "Recipes Api",
        description:
            "XMLHttpRequest (XHR)",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
           
            {
                name: "Api JS",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap5",
                color: "green-text-gradient",
            },
        ],
        image: Recipes,
        source_code_link: "https://github.com/shahdKhawaldeh1/Api-XHR",
        projectType:2,
    },
    {
        name: "Frensh Resturant",
        description:
            "All about our French Restarant",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "media query",
                color: "green-text-gradient",
            },
           
        ],
        image: restaurant,
        source_code_link: "https://github.com/shahdKhawaldeh1/French-Restaurant",
        projectType:1,
    },
    {
        name: "Palestine",
        description:
            "background content change animation" ,
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "JS",
                color: "green-text-gradient",
            },
        
        ],
        image: palestine,
        source_code_link: "https://github.com/shahdKhawaldeh1/Fetch-Api",
        projectType:2,
    },
    {
        name: "Tic Tac Tie",
        description:
            " Tic Tac Tie Game by JS",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
         
        ],
        image: Tic,
        source_code_link: "https://github.com/shahdKhawaldeh1/Tic-Tac-Tie",
        projectType:2,
    },
    {
        name: "Simple Portfolio",
        description:
            "Responsive template.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            
            
        ],
        image: portfolio,
        source_code_link: "https://github.com/shahdKhawaldeh1/task2",
        projectType:1,
    },
    {
        name: "Time Zone",
        description:
            "Responsive.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "animation",
                color: "green-text-gradient",
            },
            {
                name: "media query",
                color: "blue-text-gradient",
            },
            
        ],
        image: watch,
        source_code_link: "https://github.com/Dalia-Alawneh/herobiz-website",
        projectType:1,
    },
    {
        name: "Movies world",
        description:
            "React js movie api and jwt auth and formik.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Api",
                color: "pink-text-gradient",
            },
            {
                name: "Bootstrap5",
                color: "green-text-gradient",
            },
            
        ],
        image: movieworld,
        source_code_link: "https://github.com/shahdKhawaldeh1/Movie-Web-",
        projectType:3,
    },
    {
        name: "Luxury Store",
        description:
            "An Ecommerce Website | Fake Store API",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Api",
                color: "pink-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "JS",
                color: "blue-text-gradient",
            },
            
        ],
        image: luxury,
        source_code_link: "https://github.com/shahdKhawaldeh1/Luxury-Store-",
        projectType:3,
    },
    {
        name: "BZU Sport",
        description:
            "Fitness Exercises App With APIs | RapidAPI",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Api",
                color: "pink-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "Tybography and Box Model",
                color: "pink-text-gradient",
            },
            {
                name: "Bootstrap5",
                color: "blue-text-gradient",
            },
            
        ],
        image: sport,
        source_code_link: "https://github.com/Dalia-Alawneh/Noxs",
        projectType:3,
    },
    {
        name: "Car Wash",
        description:
            "Case Study ",
        tags: [
            {
                name: "UX/UI Design",
                color: "blue-text-gradient",
            },
            {
                name: "Figma",
                color: "pink-text-gradient",
            },
        
        ],
        image: CarWash,
        source_code_link: "https://github.com/Dalia-Alawneh/crazy-gallary-next-js-api",
        projectType:4,
    },
    {
        name: "Novera",
        description:
            "Case Study",
        tags: [
            {
                name: "UX/UI Design",
                color: "blue-text-gradient",
            },
            {
                name: "Figma",
                color: "pink-text-gradient",
            },
        
        ],
        image: shopping,
        source_code_link: "https://github.com/Dalia-Alawneh/crazy-gallary-next-js-api",
        projectType:4,
    },
    {
        name: "Gallery Studio",
        description:
            "UX Design",
        tags: [
            {
                name: "UX/UI Design",
                color: "blue-text-gradient",
            },
            {
                name: "Figma",
                color: "pink-text-gradient",
            },
        
        ],
        image: gallery,
        source_code_link: "https://github.com/Dalia-Alawneh/crazy-gallary-next-js-api",
        projectType:4,
    },

];

export { services, technologies, experiences, projects };