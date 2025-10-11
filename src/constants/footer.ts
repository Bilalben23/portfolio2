type Sitemap = {
    label: string;
    href: string;
}

type Social = {
    label: string;
    href: string
}

export const sitemap: Sitemap[] = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
] as const;

export const socials: Social[] = [
    {
        label: 'GitHub',
        href: 'https://github.com/Bilalben23'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/bilal-ben-youssef-b38a27251'
    },
    {
        label: 'Twitter X',
        href: 'https://x.com/BenyBilal31567'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/bial4220'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.io/Bilal2023'
    }
] as const;