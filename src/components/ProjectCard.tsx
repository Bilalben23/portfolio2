import { memo, type FC } from 'react'
import type { Work } from '../constants/works';


type ProjectCardProps = Work & {
    classes?: string
}

const ProjectCard: FC<ProjectCardProps> = ({ imgSrc, title, tags, projectLink, classes = "" }) => {
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors duration-300" + classes}>
            <figure className='mb-4 rounded-lg img-box aspect-square'>
                <img
                    src={imgSrc}
                    loading='lazy'
                    className='img-cover'
                />
            </figure>

            <div className='flex items-center justify-between gap-4'>
                <div>
                    <p className='mb-3 title-1'>{title}</p>
                    <div className='flex flex-wrap items-center gap-2'>
                        {tags.map((tag, i) => (
                            <span key={i} className='grid items-center h-8 px-3 text-sm rounded-lg text-zinc-400 bg-zinc-50/5'>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='grid rounded-lg size-11 place-items-center bg-sky-400 shrink-0 text-zinc-950' >
                    <span className='material-symbols-rounded' aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>

            <a
                href={projectLink}
                className='absolute inset-0'
                rel="noopener noreferrer"
                target='_blank'
            />
        </div>
    )
}


export default memo(ProjectCard);