import styles from '../styles/info.module.css'
import Button from './Button'

const Info = () => {
    return (
        <section className={`${styles.infoContainer} d-flex my-5`}>
            <div className={`${styles.descriptionContainer}`}>
                <h1 className={`${styles.title}`}>Bring everyone together to build better products.</h1>
                <p className={`${styles.descriptionInfo}`}>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>
                <Button otherStyles=''>Get Started</Button> 
            </div>
            <div className={styles.illustrationInfo}>
                <img src="/assets/illustration-intro.svg"/>
            </div>
        </section>
    )
}

export default Info