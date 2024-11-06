import styles from '../styles/button.module.css'

type children = {
  children: string
  otherStyles: string
}

const button: React.FC<children> = ({children, otherStyles})=> {
  return (
    <button className={`${styles.button} ${otherStyles} rounded-pill px-4 py-2`}>{children}</button>
  )
}

export default button