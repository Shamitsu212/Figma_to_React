import styles from './WelcomeSection.module.css'

import Button from '../../../UI/Buttons/Button/Button';
import ScrollButton from '../../../UI/Buttons/IconButton/ScrollButton';

import icon2 from "../../../../assets/icons/Subtraction.svg"
import icon1 from "../../../../assets/icons/Home.svg"

function WelcomeSection() {

  return (
    <section className={styles.welcomeSection}>
      <div className={styles.opacity}>
        <div className={styles.textContainer}>
            <h1 className={styles.h}>
                <span className={styles.subtitle_1}>
                    Welcome to
                </span>
                <span className={styles.title}>
                    Luxury
                </span>
                <span className={styles.subtitle_2}>
                    Hotels
                </span>
            </h1>
            <p className={styles.text}>
                Book your stay and enjoy Luxury
                <br />
                redefined at the most affordable rates.
            </p>
        </div>

        <div className={styles.buttonContainer}>
            <Button width="268px" height="78px" fsize="25px" fweight ="700" text="BOOK NOW" icon={icon1}/>
        </div>

        <div className={styles.scrollContainer}>
            <span className={styles.scrollText}>
                Scroll
            </span>
            <ScrollButton icon={icon2} />
        </div>
      </div>

    </section>
  )
}

export default WelcomeSection;
