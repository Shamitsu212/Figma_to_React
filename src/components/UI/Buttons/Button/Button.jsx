import styles from './Button.module.css'

function Button({ width, height, fsize, fweight, text, icon }) {
  return (
    <button
      className={styles.button}
      style={{
        width: width,
        height: height,
        fontSize: fsize,
        fontWeight: fweight
      }}
    >
      {icon && <img src={icon} alt="icon" className={styles.icon} />}
      {text}
    </button>
  )
}

export default Button
