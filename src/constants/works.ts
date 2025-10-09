export type Work = {
    imgSrc: string;
    title: string;
    description: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
    linkedinPost?: string;
}

export const works: Work[] = [
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Full stack music app',
        description: 'A full-stack music app with playlists and search functionality.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'API'],
        demoLink: 'https://musify-5al0.onrender.com/',
        githubLink: 'https://github.com/yourusername/musify',
        linkedinPost: 'https://www.linkedin.com/posts/...'
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Free stock photo app',
        description: 'A SPA for browsing and downloading free stock photos.',
        technologies: ['React', 'API', 'SPA'],
        demoLink: 'https://pixstock-official.vercel.app/',
        githubLink: 'https://github.com/yourusername/pixstock',
        linkedinPost: 'https://www.linkedin.com/posts/...'
    },
    {
        imgSrc: '/images/project-3.jpg',
        title: 'Recipe app',
        description: 'An app for discovering and saving recipes.',
        technologies: ['React', 'API', 'Development'],
        demoLink: 'https://your-demo-link.com',
        githubLink: 'https://github.com/yourusername/recipe-app'
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Real estate website',
        description: 'A modern website for showcasing real estate properties.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web-design', 'Development'],
        demoLink: 'https://wealthome.com',
        githubLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'eCommerce website',
        description: 'A fully functional online store with product catalog and checkout.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'eCommerce'],
        demoLink: 'https://anon-ecommerce.vercel.app',
        githubLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: '/images/project-6.jpg',
        title: 'vCard Personal portfolio',
        description: 'A personal vCard portfolio website to showcase projects and skills.',
        technologies: ['React', 'TailwindCSS', 'Web-design', 'Development'],
        demoLink: 'https://vcard-portfolio.vercel.app',
        githubLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    }
];
