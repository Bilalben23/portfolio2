import { memo, type FC } from "react";
import type { Review } from "../constants/reviews";

type ReviewCardProps = Review;

const ratings = Array(5).fill({
    icon: "star",
    style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard: FC<ReviewCardProps> = ({
    content,
    name,
    imgSrc,
    role,
    profileLink,
    commentLink,
}) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] shadow-lg hover:shadow-xl transition-shadow duration-300">

            {/* Ratings */}
            <div className="flex items-center gap-1 mb-3">
                {ratings.map(({ icon, style }, idx) => (
                    <span
                        key={idx}
                        className="text-yellow-300 material-symbols-rounded text-[18px]"
                        style={style}
                    >
                        {icon}
                    </span>
                ))}
            </div>

            {/* Review Content */}
            <p className="mb-6 text-zinc-400">{content}</p>

            {/* Reviewer Info */}
            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                    <a
                        href={profileLink}
                        className="overflow-hidden rounded-full size-12"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={imgSrc}
                            alt={name}
                            className="object-cover w-full h-full transition-all duration-300 hover:scale-105 hover:opacity-95"
                        />
                    </a>
                    <div>
                        <a
                            href={profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold transition hover:underline"
                        >
                            {name}
                        </a>
                        <p className="text-xs tracking-wider text-zinc-400">{role}</p>
                    </div>
                </div>

                {commentLink && (
                    <a
                        href={commentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-[1.05] p-2 rounded-full flex items-center justify-center group transition-transform duration-300"
                        title="View Comment"
                    >
                        <span className="text-xl material-symbols-rounded text-sky-500 hover:text-sky-400">
                            launch
                        </span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default memo(ReviewCard);
