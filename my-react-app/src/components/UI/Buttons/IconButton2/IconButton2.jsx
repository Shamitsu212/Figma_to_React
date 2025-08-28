import styles from './IconButton.module.css'

function IconButton2({ icon }) {

  return (
    <button className={styles.button}>
        <img
            src={icon}
            className={styles.icon}
        />
    </button>
  )
}

export default IconButton2;
