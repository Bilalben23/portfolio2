import { reviews } from '../constants/reviews';
import ReviewCard from './ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/free-mode';
// @ts-ignore
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';


export default function Review() {
    return (
        <section id='reviews' className='overflow-hidden section'>
            <div className='container mx-auto'>
                <h4 className="mb-3 headline-2 reveal-up">What people say</h4>
                <p className="max-w-2xl mb-8 text-zinc-400">
                    Feedback from people who have seen my projects and work.
                </p>

                <div className='p-2' >
                    <Swiper
                        freeMode={true}
                        pagination={{

                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {
                            reviews.map((review, idx) => <SwiperSlide key={idx} className="!flex !h-auto"
                            >
                                <ReviewCard
                                    {...review}
                                />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
