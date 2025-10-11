import { aboutItems } from '../constants/aboutItems';
import logo from "../assets/icons/logo.svg";

export default function About() {

    return (
        <section id='about' className='section'>
            <div className="container mx-auto">
                <div className='bg-zinc-800/50 p-7 rounded-xl md:p-12 reveal-up'>
                    <div className='md:text-xl mb-4 md:mb-8 max-w-3xl leading-relaxed'>
                        <h2 className="text-3xl font-bold text-zinc-100 mb-4">
                            Welcome! I'm <span className="text-sky-400">Bilal Benyoussef</span>
                        </h2>
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            I&apos;m a <span className="text-zinc-100 font-medium">Full-Stack Developer</span> specializing in the
                            <span className="text-sky-400"> MERN stack</span>, passionate about building modern, scalable,
                            and high-performance web applications. I write clean, maintainable code that transforms ideas
                            into functional digital solutions.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            I enjoy tackling complex problems and exploring new technologies to stay ahead in the ever-evolving
                            world of web development. From personal projects to team collaborations, I aim to deliver experiences
                            that are both <span className="text-zinc-100 font-medium">user-friendly</span> and
                            <span className="text-zinc-100 font-medium"> technically strong</span>.
                        </p>
                    </div>

                    <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                        {aboutItems.map(({ label, number }, index) => (
                            <div key={index}>
                                <div className='flex items-center md:mb-2'>
                                    <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                                </div>
                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        ))}

                        <img
                            src={logo}
                            alt="Logo"
                            width={30}
                            height={30}
                            className='ml-auto md:size-[40px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
