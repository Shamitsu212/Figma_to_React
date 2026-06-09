import styles from './ScrollButton.module.css'

function ScrollButton({ icon }) {

  return (
    <button className={styles.button}>
        <img
            src={icon}
            className={styles.icon}
        />
    </button>
  )
}

export default ScrollButton;
