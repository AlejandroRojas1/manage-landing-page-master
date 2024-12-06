import styles from '../styles/getProduct.module.css'
import buttonStyles from '../styles/button.module.css'


const GetProduct = () => {
  return (
    <section className={`${styles.getProductContainer}`}>
        <h1>Simplify how your team works today.</h1>
        <span>
            <button className={`${buttonStyles.button} ${buttonStyles.whiteButton} rounded-pill px-4 py-2`}>Get started</button>
        </span>
        
    </section>
  )
}

export default GetProduct