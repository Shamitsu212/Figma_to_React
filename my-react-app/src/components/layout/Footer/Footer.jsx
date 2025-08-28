import styles from './Footer.module.css'

import Email from '../../UI/Email/Email'


function Footer() {

  return (
    <footer className={styles.footer}>
        <div className={styles.footer__info}>
            <h5 className={styles.footer__logo}>
                <span className={styles.title}>
                    LUXURY
                </span>
                <span className={styles.subtitle}>
                    HOTELS
                </span>
            </h5>
            <div className={styles.footer__addressContainer}>
                <p className={styles.footer__address}>
                    497 Evergreen Rd. Roseville, CA 95673
                </p>
                <p className={styles.footer__address}>
                    +44 345 678 903
                </p>
                <p className={styles.footer__address}>
                    luxury_hotels@gmail.com
                </p>
            </div>
        </div>
        <nav className={styles.nav}>
            <a className={styles.nav__a}>
                About Us
            </a>
            <a className={styles.nav__a}>
                Contact
            </a>
            <a className={styles.nav__a}>
                Terms & Conditions
            </a>
        </nav>
        <nav className={styles.nav}>
            <a className={styles.nav__a}>
                Facebook
            </a>
            <a className={styles.nav__a}>
                Twitter
            </a>
            <a className={styles.nav__a}>
                Instagram
            </a>
        </nav>
        <div className={styles.EmailContainer}>
            <p className={styles.EmailContainer__text}>
                Subscribe to our newsletter
            </p>
            <Email />
        </div>
    </footer>
  )
}

export default Footer
