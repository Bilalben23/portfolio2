import { memo, useEffect, useRef, type MouseEvent } from 'react';

const Navbar = ({ navOpen }: { navOpen: boolean }) => {
    const lastActiveLink = useRef<HTMLAnchorElement>(null);
    const activeBox = useRef<HTMLDivElement>(null);

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
        }
    }

    const activeCurrentLink = (e: MouseEvent<HTMLAnchorElement>) => {
        lastActiveLink.current?.classList.remove("active");
        e.currentTarget.classList.add("active");
        lastActiveLink.current = e.currentTarget;
        if (activeBox.current) {
            activeBox.current.style.top = e.currentTarget.offsetTop + "px";
            activeBox.current.style.left = e.currentTarget.offsetLeft + "px";
            activeBox.current.style.width = e.currentTarget.offsetWidth + "px";
            activeBox.current.style.height = e.currentTarget.offsetHeight + "px";

        }
    }


    useEffect(initActiveBox, [])
    useEffect(() => {
        window.addEventListener("resize", initActiveBox);

        return () => window.removeEventListener("resize", initActiveBox);
    }, [])


    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {
                navItems.map(item => (
                    <a
                        key={item.label}
                        href={item.link}
                        ref={item?.ref}
                        className={item.className}
                        onClick={activeCurrentLink}

                    >
                        {item.label}
                    </a>
                ))
            }
            <div
                className="active-box"
                ref={activeBox}
            />
        </nav>
    )
}

export default memo(Navbar);