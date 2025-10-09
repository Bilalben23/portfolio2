import { memo, type FC } from 'react'
import type { skillItem } from '../constants/skillItems';


type SkillCardProps = skillItem & {
    classes?: string;
}

const SkillCard: FC<SkillCardProps> = ({ imgSrc, label, desc, classes = "" }) => {
    return (
        <div className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors duration-300 group` + classes}>
            <figure className='p-2 overflow-hidden transition-colors duration-300 rounded-lg bg-zinc-700/50 size-12 group-hover:bg-zinc-900'>
                <img
                    src={imgSrc}
                    alt={label}
                    width={32}
                    height={32}
                    className='rounded-sm'
                />
            </figure>

            <div className=''>
                <p>{label}</p>
                <p className='text-sm text-zinc-400'>{desc}</p>
            </div>
        </div>
    )
}

export default memo(SkillCard);