import { ButtonPrimary, ButtonOutline } from "./Button";
import heroBanner from "../assets/images/hero-banner.png";
import avatar from "../assets/images/avatar-1.webp";

export default function Hero() {
    return (
        <section id='home' className='section'>
            <div className='container flex flex-col items-center px-4 mx-auto lg:flex-row lg:px-8 xl:max-w-6xl lg:gap-10'>
                <div className=''>
                    <div className="flex items-center gap-3">
                        <figure className='rounded-lg img-box size-9'>
                            <img
                                src={avatar}
                                alt="Bilal Benyoussef portrait"
                                width={40}
                                height={40}
                                className="img-cover"
                            />
                        </figure>

                        <div className='flex items-center gap-1.5 text-zinc-50 text-sm tracking-wide'>
                            <span className='relative rounded-full size-2 bg-emerald-400'>
                                <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h1 className='max-w-max bg-linear-0 text-4xl font-semibold mt-5 mb-8 lg:mb-10 leading-tight lg:text-[50px] lg:leading-16 from-[#fafafa] to-[#a1a1aa] bg-clip-text text-transparent'>
                        A Full-Stack Developer building modern, fast, and scalable web apps.
                    </h1>
                    <div className='flex items-center gap-3'>
                        <ButtonPrimary
                            label="Download CV"
                            icon="download"
                        />

                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% overflow-hidden via-sky-400 to-65% rounded-4xl">
                        <img
                            src={heroBanner}
                            alt="Bilal Benyoussef"
                            width={656}
                            height={800}
                            className='w-full'
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}
