import { reviews } from '../constants/reviews';
import ReviewCard from './ReviewCard';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Review() {


    useGSAP(() => {
        gsap.to(".scrub-slide", {
            scrollTrigger: {
                trigger: ".scrub-slide",
                scrub: true,
                start: "0% 80%",
                end: "400% 80%"
            },
            x: "-50"
        })
    })


    return (
        <section id='reviews' className='overflow-hidden section'>
            <div className='container mx-auto'>
                <h4 className="mb-3 headline-2 reveal-up">What people say</h4>
                <p className="max-w-2xl mb-8 text-zinc-400">
                    Feedback from people who have seen my projects and work.
                </p>

                <div className='p-2 overflow-x-auto scrollbar-thin' >
                    <div className='flex items-stretch gap-3 scrub-slide'>
                        {
                            reviews.map((review, idx) => <ReviewCard
                                key={idx}
                                {...review}
                            />
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
