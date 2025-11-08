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
        label: 'WhatsApp',
        href: 'https://wa.me/212664897030?text=Hello%20Bilal%2C%20I%20saw%20your%20profile%20and%20would%20like%20to%20connect!'
    },
    {
        label: 'CodePen',
        href: 'https://codepen.io/Bilal2023'
    }
] as const;