import { aboutItems } from '../constants/aboutItems';
import logo from "../assets/icons/logo.svg";

export default function About() {

    return (
        <section id='about' className='section'>
            <div className="container mx-auto">
                <div className='bg-zinc-800/50 p-7 rounded-xl md:p-12 reveal-up'>
                    <p className='text-zinc-300 md:text-xl mb-4 md:mb-8 max-w-3xl'>Welcome! I&apos;m Bilal, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                    </p>

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
