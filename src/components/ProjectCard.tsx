import { memo, type FC } from 'react';
import type { Work } from '../constants/works';
import github from "/images/github.svg";
import linkedIn from "/images/linkedin.svg";


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
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset shadow-zinc-900 shadow-lg hover:shadow-2xl ring-zinc-50/5 transition-all duration-300 overflow-hidden" + classes}>
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

                {/* Links */}
                <div className="flex items-center justify-between mt-4">

                    {/* GitHub & LinkedIn */}
                    <div className="flex items-center gap-3">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1 hover:scale-[1.05] transition-transform duration-300 rounded-full bg-zinc-300"
                                title="View Source Code"
                            >
                                <img
                                    src={github}
                                    alt="GitHub"
                                    className="size-5"
                                />
                            </a>
                        )}
                        {linkedinPost && (
                            <a
                                href={linkedinPost}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform duration-300 hover:scale-[1.05]"
                                title="View Project Post"
                            >
                                <img
                                    src={linkedIn}
                                    alt="LinkedIn"
                                    className="size-6"
                                />
                            </a>
                        )}
                    </div>

                    {/* Live Demo */}
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center group justify-center p-1 transition-all hover:scale-[1.08] duration-300 rounded-full"
                            title="View Live Demo"
                        >
                            <span className="material-symbols-rounded text-sky-600 group-hover:text-sky-500">launch</span>
                        </a>
                    )}
                </div>

            </div>
        </div>
    )
}


export default memo(ProjectCard);