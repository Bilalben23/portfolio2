export type Review = {
    content: string;
    name: string;
    imgSrc: string;
    role: string;
    profileLink: string;
    commentLink?: string
};

export const reviews: Review[] = [
    {
        content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
        name: 'Sophia Ramirez',
        imgSrc: '/images/people-1.jpg',
        role: 'Frontend Developer',
        profileLink: 'https://www.linkedin.com/in/sophia-ramirez',
        commentLink: 'https://www.linkedin.com/posts/your-post-link-1'
    },
    {
        content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
        name: 'Ethan Caldwell',
        imgSrc: '/images/people-2.jpg',
        role: 'Tech Enthusiast',
        profileLink: 'https://www.linkedin.com/in/ethan-caldwell',
        commentLink: 'https://www.linkedin.com/posts/your-post-link-2'
    },
    {
        content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
        name: 'Liam Bennett',
        imgSrc: '/images/people-3.jpg',
        role: 'Software Engineer',
        profileLink: 'https://www.linkedin.com/in/liam-bennett',
        commentLink: 'https://www.linkedin.com/posts/your-post-link-3'
    },
    {
        content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
        name: 'Noah Williams',
        imgSrc: '/images/people-4.jpg',
        role: 'UI/UX Designer',
        profileLink: 'https://www.linkedin.com/in/noah-williams',
        commentLink: 'https://www.linkedin.com/posts/your-post-link-4'
    },
    {
        content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
        name: 'Ava Thompson',
        imgSrc: '/images/people-5.jpg',
        role: 'Product Designer',
        profileLink: 'https://www.linkedin.com/in/ava-thompson',
        commentLink: 'https://www.linkedin.com/posts/your-post-link-5'
    },
    {
        content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
        name: 'Jonathan',
        imgSrc: '/images/people-6.jpg',
        role: 'Full Stack Developer',
        profileLink: 'https://www.linkedin.com/in/jonathan',
        commentLink: 'https://www.linkedin.com/posts/your-post-link-6'
    }
];
