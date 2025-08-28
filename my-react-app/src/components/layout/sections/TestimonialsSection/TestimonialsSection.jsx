import IconButton2 from '../../../UI/Buttons/IconButton2/IconButton2'

import styles from './TestimonialsSection.module.css'

import ArrowRight from '../../../../assets/icons/ArrowR.svg'
import ArrowLeft from '../../../../assets/icons/ArrowL.svg'

function TestimonialsSection({blockquote, cite}) {

  return (
    <section className={styles.testimonials}>
        <h4 className={styles.h}>
            Testimonials
        </h4>
        <blockquote className={styles.blockquote}>
            {blockquote}
        </blockquote>
        <cite className={styles.cite}>
            {cite}
        </cite>
        <div className={styles.buttonContainer}>
            <IconButton2 icon={ArrowLeft} />
            <IconButton2 icon={ArrowRight} />
        </div>
    </section>
  )
}

export default TestimonialsSection
