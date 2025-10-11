import { useEffect, useState } from "react";
import { works } from "../constants/works";
import ProjectCard from "./ProjectCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";


export default function Work() {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => setVisibleCount(prev => prev + 6);

    // Animate only new cards when visibleCount changes
    useEffect(() => {
        const elements = gsap.utils.toArray<HTMLElement>(".reveal-up:not(.gsap-animated)");

        elements.forEach(el => {
            gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "-200 bottom",
                    end: "bottom 80%",
                    scrub: true
                },
                onComplete: () => el.classList.add("gsap-animated") // mark as animated
            });
        });

        // refresh ScrollTrigger so it recalculates positions
        ScrollTrigger.refresh();
    }, [visibleCount]);


    return (
        <section id="work" className="section">
            <div className="container mx-auto">
                <h3 className="mb-6 headline-2 reveal-up">
                    My portfolio highlights
                </h3>
                <p className="max-w-2xl mb-10 text-zinc-400">
                    A selection of my projects built with modern web technologies. Live demos, GitHub repos, and LinkedIn posts included.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        works.slice(0, visibleCount).map((work, i) => <ProjectCard
                            key={i}
                            {...work}
                            classes="reveal-up"
                        />)
                    }
                </div>
                {
                    visibleCount < works.length && <div className="mt-6 flex justify-center">
                        <button
                            type="button"
                            className="btn btn-primary cursor-pointer"
                            onClick={handleLoadMore}
                        >
                            Load More
                            <span className="material-symbols-rounded animate-bounce">expand_more</span>
                        </button>
                    </div>
                }
            </div>
        </section>
    )
}
