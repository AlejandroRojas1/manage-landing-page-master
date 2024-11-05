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
    return (
        <section className={`${styles.sliderContainer} mx-0 mt-5`}>
            <div className={`${styles.slider} w-100 h-auto overflow-hidden`}>
                <h2 className='text-center my-5'>What they’ve said</h2>
                <div className={`${styles.slideTrack} d-flex`}>
                    {testimonials.map(testimony => (
                        <div key={testimony.key} className={`${styles.slide} text-center mx-2 mb-5 rounded`}>
                            <img src={testimony.profile} alt={testimony.name}/>
                            <div className={styles.testimonyContainer}>
                                <h4 className='my-4'>{testimony.name}</h4>
                                <p>{testimony.testimony}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <span className='w-100 mb-5 d-flex justify-content-center'>
                    <Button />
                </span>
                
            </div>
        </section>
    )
}

export default Testimonials