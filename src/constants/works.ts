import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import project6 from "../assets/images/project-6.jpg";


export type Work = {
    imgSrc: string;
    title: string;
    description: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
    linkedinPost?: string
}

export const works: Work[] = [
    {
        imgSrc: project1,
        title: 'Full stack music app',
        description: 'A full-stack music app with playlists and search functionality.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'API'],
        demoLink: 'https://musify-5al0.onrender.com/',
        githubLink: 'https://github.com/yourusername/musify',
        linkedinPost: 'https://www.linkedin.com/posts/...'
    },
    {
        imgSrc: project2,
        title: 'Free stock photo app',
        description: 'A SPA for browsing and downloading free stock photos.',
        technologies: ['React', 'API', 'SPA'],
        demoLink: 'https://pixstock-official.vercel.app/',
        githubLink: 'https://github.com/yourusername/pixstock',
        linkedinPost: 'https://www.linkedin.com/posts/...'
    },
    {
        imgSrc: project3,
        title: 'Recipe app',
        description: 'An app for discovering and saving recipes.',
        technologies: ['React', 'API', 'Development'],
        demoLink: 'https://your-demo-link.com',
        githubLink: 'https://github.com/yourusername/recipe-app'
    },
    {
        imgSrc: project4,
        title: 'Real estate website',
        description: 'A modern website for showcasing real estate properties.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web-design', 'Development'],
        demoLink: 'https://wealthome.com',
        githubLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: project5,
        title: 'eCommerce website',
        description: 'A fully functional online store with product catalog and checkout.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'eCommerce'],
        demoLink: 'https://anon-ecommerce.vercel.app',
        githubLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: project6,
        title: 'vCard Personal portfolio',
        description: 'A personal vCard portfolio website to showcase projects and skills.',
        technologies: ['React', 'TailwindCSS', 'Web-design', 'Development'],
        demoLink: 'https://vcard-portfolio.vercel.app',
        githubLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    }
];
