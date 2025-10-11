import figma from '../assets/icons/figma.svg';
import html5 from '../assets/icons/html5.svg';
import css3 from '../assets/icons/css3.svg';
import javascript from '../assets/icons/javascript.svg';
import typescript from '../assets/icons/typescript.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import tailwindcss from '../assets/icons/tailwindcss.svg';
import nodejs from '../assets/icons/nodejs.svg';
import expressjs from '../assets/icons/expressjs.svg';
import mongodb from '../assets/icons/mongodb.svg';
import mySQL from '../assets/icons/mysql.svg';
import redis from '../assets/icons/redis.svg';
import git from '../assets/icons/git.svg';
import github from '../assets/icons/github.svg';
import storybook from '../assets/icons/storybook.svg';


export type skillItem = {
    imgSrc: string;
    label: string;
    desc: string;
};

export const skillItems: skillItem[] = [
    {
        imgSrc: figma,
        label: 'Figma',
        desc: 'Designs interfaces',
    },
    {
        imgSrc: html5,
        label: 'HTML5',
        desc: 'Structures web pages',
    },
    {
        imgSrc: css3,
        label: 'CSS3',
        desc: 'Styles web pages',
    },
    {
        imgSrc: javascript,
        label: 'JavaScript',
        desc: 'Adds interactivity',
    },
    {
        imgSrc: typescript,
        label: 'TypeScript',
        desc: 'Typed, safer code',
    },
    {
        imgSrc: react,
        label: 'React',
        desc: 'Creates dynamic UIs',
    },
    {
        imgSrc: redux,
        label: 'Redux Toolkit',
        desc: 'State management',
    },
    {
        imgSrc: tailwindcss,
        label: 'TailwindCSS',
        desc: 'Speeds up styling',
    },
    {
        imgSrc: nodejs,
        label: 'NodeJS',
        desc: 'Runs backend logic',
    },
    {
        imgSrc: expressjs,
        label: 'ExpressJS',
        desc: 'Manages server APIs',
    },
    {
        imgSrc: mongodb,
        label: 'MongoDB',
        desc: 'Stores flexible data',
    },
    {
        imgSrc: mySQL,
        label: 'MySQL',
        desc: 'Manages relational data',
    },
    {
        imgSrc: redis,
        label: 'Redis',
        desc: 'In-memory caching',
    },
    {
        imgSrc: git,
        label: 'Git',
        desc: 'Version control',
    },
    {
        imgSrc: github,
        label: 'GitHub',
        desc: 'Hosts projects & manages code',
    },
    {
        imgSrc: storybook,
        label: 'Storybook',
        desc: 'Develops and tests UI components',
    },
];
