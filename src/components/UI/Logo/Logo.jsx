import styles from './Logo.module.css'

function Logo() {

  return (
    <div className={styles.logo}>
        <span className={styles.title}>
            LUXURY
        <span className={styles.subtitle}>
            HOTELS    
        </span>    
        </span>
    </div>
  )
}

export default Logo
