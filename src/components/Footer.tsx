import { sitemap, socials } from "../constants/footer";
import { ButtonPrimary } from "./Button";
import logo from "/images/logo.svg"

export default function Footer() {
    return (
        <footer className="section">
            <div className="container mx-auto">

                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h6 className="mb-8 headline-2 lg:max-w-sm reveal-up">Let&apos;s work together today!</h6>

                        <ButtonPrimary
                            href="mailto:bilalbeny735@gmail.com"
                            label="Start project"
                            icon="chevron_right"
                            target="_blank"
                            classes="max-w-max reveal-up"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {sitemap.map(({ href, label }, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={href}
                                            className="block py-1 text-sm transition-colors hover:text-zinc-200 text-zinc-400 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>

                            <ul>
                                {socials.map(({ href, label }, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block py-1 text-sm transition-colors hover:text-zinc-200 text-zinc-400 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a
                        href="/"
                        className="logo reveal-up"
                    >
                        <img
                            src={logo}
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>

                    <p className="text-sm text-zinc-500 reveal-up">
                        &copy; {new Date().getFullYear()} <span className="text-zinc-200">Bilal_Benyoussef</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}
