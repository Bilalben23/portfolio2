import { works } from "../constants/works";
import ProjectCard from "./ProjectCard";

export default function Work() {
    return (
        <section id="work" className="section">
            <div className="container mx-auto">
                <h4 className="mb-6 headline-2">
                    My portfolio highlights
                </h4>
                <p className="max-w-2xl mb-10 text-zinc-400">
                    A selection of my projects built with modern web technologies. Live demos, GitHub repos, and LinkedIn posts included.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        works.map((work, i) => <ProjectCard
                            key={i}
                            {...work}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}
