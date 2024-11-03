import styles from '../styles/info.module.css'
import Button from './Button'

const Info = () => {
    return (
        <section className='d-flex my-5 py-5'>
            <div className={`my-5 w-50 ${styles.descriptionContainer}`}>
                <h1 className={`${styles.title}`}>Bring everyone together to build better products.</h1>
                <p className={`${styles.descriptionInfo} w-75 mb-5`}>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>
                <Button />
            </div>
            <div className={styles.illustrationInfo}>
                <img src="/assets/illustration-intro.svg" width={550} height={500} />
            </div>
        </section>
    )
}

export default Info