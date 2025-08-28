import styles from './Email.module.css'

function Email() {

  return (
    <div className={styles.email}>
        <input type="email" placeholder="Email Address" className={styles.input} />
        <button className={styles.button}>
            OK
        </button>
    </div>
  )
}

export default Email
