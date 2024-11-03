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
        <section className={`${styles.FeaturesContainer} d-flex justify-content-between `}>
            <div className="">
                <h1 className="w-100 mb-5">What’s different about Manage?</h1>
                <p className='w-75'>
                    Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams.
                </p>
            </div>
            <div className="ms-5">
                { features.map((feature=>(
                    <div key={feature.index} className="d-flex ">
                        <span className='rounded-pill px-4 py-2 align-self-start me-4'>{feature.index}</span>
                        <span>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </span>
                    </div>
                ))) }
            </div>
        </section>
    )
}

export default Features