import styles from './PhotoAndH.module.css'

function PhotoAndH({ text, photo }) {

  return (
    <article
    className={styles.photoAndH}
    style={{ backgroundImage: `url(${photo})` }}
    >
        <h3 className={styles.title}>
            {text}
        </h3>
    </article>
  )
}

export default PhotoAndH
