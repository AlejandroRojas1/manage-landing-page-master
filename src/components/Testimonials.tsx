import { useContext } from 'react'
import { windowSizeContext } from '../App'
import styles from '../styles/testimonials.module.css'
import Button from './Button'

type TestimonialsTypes = {
    profile: string,
    name: string,
    testimony: string,
    key: number
}
const testimonials: TestimonialsTypes[] = [
    {
        profile: '/assets/avatar-anisha.png',
        name: 'Anisha Li',
        testimony: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
        key: 1
    },
    {
        profile: '/assets/avatar-ali.png',
        name: 'Ali Bravo',
        testimony: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
        key: 2
    },
    {
        profile: '/assets/avatar-richard.png',
        name: 'Richard Watts',
        testimony: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
        key: 3
    },
    {
        profile: '/assets/avatar-shanai.png',
        name: 'Shanai Gough',
        testimony: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
        key: 4
    }
]

const Testimonials = () => {

    const windowWidth = useContext(windowSizeContext)

    return (
        <>
            <section className={`${styles.sliderContainer} mx-0`}>
                <div className={`${styles.slider} w-100 h-auto overflow-hidden`}>
                    <h2 className={`${styles.title} text-center`}>What they’ve said</h2>

                    {
                        windowWidth >= 751
                            ? <div className={`${styles.slideTrack} d-flex`}>
                                {testimonials.map(testimony => (
                                    <div key={testimony.key} className={`${styles.slide} text-center mx-2 mb-5 rounded`}>
                                        <img src={testimony.profile} alt={testimony.name} />
                                        <div className={styles.testimonyContainer}>
                                            <h4 className='my-4'>{testimony.name}</h4>
                                            <p>{testimony.testimony}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            : <div id="carouselExampleIndicators" className="carousel carousel-dark slide mb-5">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className={`${styles.slideContainer} carousel-item active w-100`}>
                                        <div className={`${styles.slide} text-center mx-autauto rounded`}>
                                            <img src={testimonials[0].profile} alt={testimonials[0].name} />
                                            <div className={styles.testimonyContainer}>
                                                <h4 className='mb-3 mt-5'>{testimonials[0].name}</h4>
                                                <p>{testimonials[0].testimony}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.slideContainer} carousel-item w-100`}>
                                        <div className={`${styles.slide} text-center mx-auto rounded`}>
                                            <img src={testimonials[1].profile} alt={testimonials[1].name} />
                                            <div className={styles.testimonyContainer}>
                                                <h4 className='my-3 mt-5'>{testimonials[1].name}</h4>
                                                <p>{testimonials[1].testimony}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.slideContainer} carousel-item w-100`}>
                                        <div className={`${styles.slide} text-center mx-auto rounded`}>
                                            <img src={testimonials[2].profile} alt={testimonials[2].name} />
                                            <div className={styles.testimonyContainer}>
                                                <h4 className='my-3 mt-5'>{testimonials[2].name}</h4>
                                                <p>{testimonials[2].testimony}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.slideContainer} carousel-item w-100`}>
                                        <div className={`${styles.slide} text-center mx-auto rounded`}>
                                            <img src={testimonials[3].profile} alt={testimonials[3].name} />
                                            <div className={styles.testimonyContainer}>
                                                <h4 className='my-3 mt-5'>{testimonials[3].name}</h4>
                                                <p>{testimonials[3].testimony}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true">
                                    </span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true">
                                    </span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                    }


                    <span className='w-100 mb-5 d-flex justify-content-center'>
                        <Button otherStyles='' children='Get Started' />
                    </span>

                </div>
            </section>
        </>
    )
}

export default Testimonials