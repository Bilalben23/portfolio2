import { memo, type FC } from 'react';
import type { Work } from '../constants/works';
import github from "/images/github.svg";


type ProjectCardProps = Work & {
    classes?: string
}


const ProjectCard: FC<ProjectCardProps> = ({
    imgSrc,
    title,
    description,
    technologies,
    demoLink,
    githubLink,
    linkedinPost,
    classes = ""
}) => {
    return (
        <div className={"relative justify-between flex flex-col p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset shadow-zinc-900 shadow-lg hover:shadow-2xl ring-zinc-50/5 transition-all duration-300 overflow-hidden " + classes}>

            <div>
                <figure className='relative mb-4 overflow-hidden rounded-lg img-box aspect-square'>
                    <a href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='absolute inset-0 z-1 peer'
                    />
                    <img
                        src={imgSrc}
                        alt={title}
                        loading='lazy'
                        className='transition-transform duration-300 img-cover peer-hover:scale-105'
                    />
                </figure>

                <div className='flex flex-col gap-3 p-5'>
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-sm text-zinc-50'>{description}</p>

                    {/* Technologies */}
                    <div className='flex flex-wrap items-center gap-2 mt-2'>
                        {technologies.map((tech, idx) => (
                            <span key={idx} className='px-2 py-1 text-xs rounded shadow bg-zinc-700/50 text-zinc-300'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="flex items-center justify-between mt-4">

                {/* GitHub & LinkedIn */}
                <div className="flex items-center gap-3">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:scale-[1.05] transition-all duration-300 rounded-full hover:bg-zinc-300 bg-zinc-400"
                            title="View Source Code"
                        >
                            <img
                                src={github}
                                alt="GitHub"
                                className="size-5.5"
                            />
                        </a>
                    )}

                    {linkedinPost && (
                        <a
                            href={linkedinPost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:scale-[1.05] group"
                            title="View Project Post"
                        >
                            <svg
                                width="35px"
                                height="35px"
                                className="text-[#0A66C2]/90 hover:text-[#0A66C2] transition-colors duration-300 cursor-pointer"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                            >
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                                </g>
                            </svg>

                        </a>
                    )}
                </div>

                {/* Live Demo */}
                {demoLink && (
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group justify-center p-2 transition-all hover:scale-[1.08] duration-300 rounded-full"
                        title="View Live Demo"
                    >
                        <span className="material-symbols-rounded text-sky-600 group-hover:text-sky-500">launch</span>
                    </a>
                )}
            </div>

        </div>
    )
}


export default memo(ProjectCard);