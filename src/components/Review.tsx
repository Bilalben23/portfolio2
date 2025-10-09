import { reviews } from '../constants/reviews';
import ReviewCard from './ReviewCard';

export default function Review() {
    return (
        <section id='reviews' className='overflow-hidden section'>
            <div className='container mx-auto'>
                <h5 className="mb-3 headline-2">What people say</h5>
                <p className="max-w-2xl mb-8 text-zinc-400">
                    Feedback from people who have seen my projects and work.
                </p>

                <div className='flex items-stretch gap-3 w-fit'>
                    {
                        reviews.map((review, idx) => <ReviewCard
                            key={idx}
                            {...review}
                        />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
