import projectQuickBlog from "../assets/images/quick-blog.png";
import projectVegiffy from "../assets/images/vegiffy.png";
import projectRestaura from "../assets/images/restaura.png";
import projectLinkedInClone from "../assets/images/linkedin-clone.png";
import projectNetflixClone from "../assets/images/netflix-clone.png"
import projectBarbero from "../assets/images/barbero.png";

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
        imgSrc: projectQuickBlog,
        title: 'Quick Blog',
        description: 'A modern full-stack blogging platform built with the MERN stack and TypeScript, featuring AI-powered content generation, JWT authentication, and an intuitive admin dashboard.',
        technologies: [
            'React 19',
            'TypeScript',
            'Node.js',
            'Express 5',
            'MongoDB',
            'React Query',
            'Tailwind CSS',
            'Zod',
            'Passport.js',
            'ImageKit',
            'Gemini (Google GenAI)'
        ],
        demoLink: 'https://quick-blog-alpha-ten.vercel.app',
        githubLink: 'https://github.com/Bilalben23/ai-powered-blog',
        linkedinPost: 'https://www.linkedin.com/posts/bilal-ben-youssef-b38a27251_newproject-fullstack-react-activity-7346847817849618433-3HwF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5EH5wBpdKQYFltPKE6szxOk4kejBcZ5M8'
    },
    {
        imgSrc: projectVegiffy,
        title: 'Vegiffy',
        description: 'A responsive full-stack recipe application where users can explore, read, and interact with delicious recipes and cooking tips. Built with a modern stack focused on performance, scalability, and developer experience.',
        technologies: [
            'React 19',
            'TypeScript',
            'Node.js',
            'Express 5',
            'MongoDB',
            'React Query',
            'Tailwind CSS',
            'Zod',
            'Axios',
            'Mongoose',
            'CORS'
        ],
        demoLink: 'https://vegiffy.vercel.app',
        githubLink: 'https://github.com/Bilalben23/recipe-blog-app',
        linkedinPost: 'https://www.linkedin.com/posts/bilal-ben-youssef-b38a27251_mern-typescript-react-activity-7344665882003927040-tgbi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5EH5wBpdKQYFltPKE6szxOk4kejBcZ5M8'
    },
    {
        imgSrc: projectRestaura,
        title: 'Restaura',
        description: 'A modern and fully responsive landing page for restaurants, designed to showcase signature dishes, mission, customer reviews, and contact information, all in a clean single-page experience with smooth animations.',
        technologies: [
            'React 19',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'Framer Motion',
            'React Icons',
            'ESLint'
        ],
        demoLink: 'https://restaura-landing-page.vercel.app',
        githubLink: 'https://github.com/Bilalben23/restaurant-landing-page',
        linkedinPost: 'https://www.linkedin.com/posts/bilal-ben-youssef-b38a27251_react-typescript-tailwindcss-activity-7341045784248811521-KU2N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5EH5wBpdKQYFltPKE6szxOk4kejBcZ5M8'
    },
    {
        imgSrc: projectLinkedInClone,
        title: 'LinkedIn Clone',
        description: 'A responsive full-stack social networking platform built with the MERN stack and TypeScript, allowing users to create accounts, connect with others, post content, react, comment, and receive notifications.',
        technologies: [
            'React 19',
            'Tailwind CSS',
            'Framer Motion',
            'React Router DOM',
            'Axios',
            'React Query',
            'React Toastify',
            'Formik & Yup',
            'React Spinners',
            'Express 5',
            'MongoDB',
            'Passport.js',
            'JWT',
            'Helmet & CORS',
            'Cloudinary',
        ],
        demoLink: 'https://linkedin-clone.vercel.app',
        githubLink: 'https://github.com/Bilalben23/linkedIn-clone',
        linkedinPost: 'https://www.linkedin.com/posts/bilal-ben-youssef-b38a27251_mernstack-reactjs-nodejs-activity-7340321003580874754-B43o?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5EH5wBpdKQYFltPKE6szxOk4kejBcZ5M8'
    },
    {
        imgSrc: projectNetflixClone,
        title: 'Netflix Clone',
        description: 'A modern streaming platform inspired by Netflix, featuring user authentication, movie browsing, search functionality, and trailer previews. Built with a scalable architecture and a smooth, responsive UI for a real streaming experience.',
        technologies: [
            'React 19',
            'Redux Toolkit',
            'React Query',
            'Tailwind CSS',
            'DaisyUI',
            'Node.js',
            'Express',
            'MongoDB',
            'JWT Auth',
            'TMDB API'
        ],
        demoLink: 'https://netflix-clone-ten-zeta.vercel.app',
        githubLink: 'https://github.com/Bilalben23/netflix-clone',
        linkedinPost: 'https://www.linkedin.com/posts/bilal-ben-youssef-b38a27251_mern-reactjs-fullstackdeveloper-activity-7338257332600008704-wvkl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5EH5wBpdKQYFltPKE6szxOk4kejBcZ5M8'
    },
    {
        imgSrc: projectBarbero,
        title: 'Barbero - Barber Shop Landing Page',
        description: 'An elegant and fully responsive landing page for a premium barber shop, designed to showcase services, client testimonials, working hours, and contact information, with smooth scrolling and a modern UI that encourages online booking.',
        technologies: [
            'React 19',
            'Tailwind CSS',
            'DaisyUI',
            'React Icons',
            'Vite'
        ],
        demoLink: 'https://barber-landing-page.vercel.app',
        githubLink: 'https://github.com/Bilalben23/barber_loading_page',
        linkedinPost: 'https://www.linkedin.com/posts/bilal-ben-youssef-b38a27251_react-webdevelopment-barberapp-activity-7259343425605431296-dax-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5EH5wBpdKQYFltPKE6szxOk4kejBcZ5M8'
    }
];
