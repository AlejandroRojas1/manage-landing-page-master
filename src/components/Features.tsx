import styles from '../styles/features.module.css'

type FeaturesTypes = {
    index: string,
    title: string,
    description: string
}

const features: FeaturesTypes[] = [
    {
        index: '01',
        title: 'Track company-wide progress',
        description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
    },
    {
        index: '02',
        title: 'Advanced built-in reports',
        description: 'Set internal delivery estimates and track progress toward company goals.Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
    },
    {
        index: '03',
        title: 'Everything you need in one place',
        description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
    }
]

const Features = () => {
    return (
        <section className={`${styles.FeaturesContainer}`}>
            <div className={styles.featuresHeader}>
                <h1 className="w-100 mb-5">What’s different about Manage?</h1>
                <p>
                    Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams.
                </p>
            </div>
            <div className={`${styles.featuresContentContainer}`}>
                { features.map((feature=>(
                    <div key={feature.index} className={`${styles.featuresContent} d-flex`}>
                        <span className={styles.pointContainer}>
                            <span className={`${styles.point} rounded-pill px-4 py-2 align-self-start me-4`}>{feature.index}</span>
                            <h4 className={styles.title}>{feature.title}</h4>
                            <p className={styles.description}>{feature.description}</p>
                        </span>
                    </div>
                )))}
            </div>
        </section>
    )
}

export default Features