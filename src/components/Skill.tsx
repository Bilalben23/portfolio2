import { skillItems } from '../constants/skillItems';
import SkillCard from './SkillCard';

export default function Skill() {
    return (
        <section className='section'>
            <div className='container mx-auto'>
                <h3 className='headline-2'>Essential Tools I use</h3>
                <p className='max-w-2xl mt-2 mb-8 text-zinc-400'>Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>

                <div className='grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]'>
                    {
                        skillItems.map((skill, i) => <SkillCard
                            key={i}
                            {...skill}
                        />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
