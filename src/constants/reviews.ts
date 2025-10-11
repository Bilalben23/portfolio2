import nikitaShalnev from "../assets/images/nikita-shalnev.jpeg";
import robertKocharyan from "../assets/images/robert-kocharyan.jpeg";
import irodaTurajanova from "../assets/images/iroda-turajanova.jpeg";
import amineMohamed from "../assets/images/amine-mohamed.jpeg";
import vasilyNikiforov from "../assets/images/vasily-nikiforov.jpeg";
import abdulKarimBukhshAansari from "../assets/images/abdul-karim-bukhsh-ansari.jpeg";


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
        content: 'Very well done, Bilal',
        name: 'Amine Mohamed',
        imgSrc: amineMohamed,
        role: 'Mern stack developer | Software engineer | web developer | frontend | backend | mobile Developer',
        profileLink: 'https://www.linkedin.com/in/amine-mohamed-5a914a23a',
        commentLink: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7340738680782774274?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7340738680782774274%2C7341077928769667072%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287341077928769667072%2Curn%3Ali%3AugcPost%3A7340738680782774274%2'
    },
    {
        content: 'Greate job! I like how it looks 👏',
        name: 'Vasily Nikiforov ⚛',
        imgSrc: vasilyNikiforov,
        role: 'Senior Frontend developer, 5+ years | Next.js | Tailwind | React | Typescript | JavaScript',
        profileLink: 'https://www.linkedin.com/in/vasily-nikiforov',
        commentLink: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7340044924739809280?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7340044924739809280%2C7345450011985334272%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287345450011985334272%2Curn%3Ali%3AugcPost%3A7340044924739809280%2'
    },
    {
        content: "Impressive stack and feature set. Love the AI- assisted flow and clean separation — looks production - ready already",
        name: 'Nikita Shalnev',
        imgSrc: nikitaShalnev,
        role: 'Senior Frontend Engineer | Angular • TypeScript • RxJS | Remote (CET ±1)',
        profileLink: 'https://www.linkedin.com/in/nikitashalnev',
        commentLink: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7339701304820215808?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7339701304820215808%2C7347971403645657089%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287347971403645657089%2Curn%3Ali%3AugcPost%3A7339701304820215808%2'
    },
    {
        content: 'Great work! This project looks very cool. You used many good tools, and I like the design.',
        name: 'Robert Kocharyan',
        imgSrc: robertKocharyan,
        role: 'Web Developer @UPC | React | TypeScript | JavaScript | Node.js | Express.js | API Development (RESTful & GraphQL) | GitHub | Git',
        profileLink: 'https://www.linkedin.com/in/robert-kocharyan-92a112243',
        commentLink: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7340142120789241857?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7340142120789241857%2C7340425576622546946%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287340425576622546946%2Curn%3Ali%3AugcPost%3A7340142120789241857%29'
    },
    {
        content: 'Great project! Excellent choice of modern tech stack. Everything is well thought out and the UX is outstanding. Keep it up! 💪',
        name: 'Iroda Turajanova',
        imgSrc: irodaTurajanova,
        role: 'Frontend Developer | React, Next.js, TypeScript',
        profileLink: 'https://www.linkedin.com/in/iro-tur',
        commentLink: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7338257331383676929?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7338257331383676929%2C7338277430329049091%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287338277430329049091%2Curn%3Ali%3AugcPost%3A7338257331383676929%29'
    },
    {
        content: 'Great job Bilal Ben Youssef , hope you have learnt a lot during the development process of this application .',
        name: 'Abdul Karim Bukhsh Ansari',
        imgSrc: abdulKarimBukhshAansari,
        role: "Software Engineer | Web Developer | React Native Developer | SE ' 27 | NED UET",
        profileLink: 'https://www.linkedin.com/in/abdul-karim-bukhsh-ansari',
        commentLink: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7338257331383676929?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7338257331383676929%2C7338265134777200641%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287338265134777200641%2Curn%3Ali%3AugcPost%3A7338257331383676929%2'
    }
];
