import styles from '../styles/button.module.css'

const button= ()=> {
  return (
    <button className={`${styles.button} rounded-pill px-4 py-2`}>Get Started</button>
  )
}

export default button