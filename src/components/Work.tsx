import { works } from "../constants/works";
import ProjectCard from "./ProjectCard";

export default function Work() {
    return (
        <section id="work" className="section">
            <div className="container mx-auto">
                <h4 className="mb-8 heading-2">My portfolio highlights</h4>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map((work, i) => (<ProjectCard
                        key={i}
                        {...work}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}
