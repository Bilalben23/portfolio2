import { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
    const [navBar, setNavBar] = useState<boolean>(false);

    const toggleNavBar = () => setNavBar(!navBar);

    return (
        <header className="fixed top-0 left-0 z-40 items-center w-full h-20 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="flex items-center justify-between w-full max-w-screen-xl px-4 mx-auto mt-2 md:px-6">

                <h1>
                    <a
                        href="/"
                        className="logo"
                    >
                        <img
                            src="/images/logo.svg"
                            className="size-10"
                            alt="Bilal Benyoussef"
                        />
                    </a>
                </h1>

                <div className="relative">
                    <button
                        type="button"
                        className="menu-btn"
                        onClick={toggleNavBar}
                    >
                        <span className="material-symbols-rounded">
                            {navBar ? "close" : "menu"}
                        </span>
                    </button>
                    <Navbar navOpen={navBar} />
                </div>

                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="btn btn-secondary"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </header>
    )
}
