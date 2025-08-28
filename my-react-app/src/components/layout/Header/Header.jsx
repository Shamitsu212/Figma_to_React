import styles from './Header.module.css'

import Logo from '../../UI/Logo/Logo'


function Header() {

  return (
    <header className={styles.header}>
        <Logo/>
        <nav className={styles.nav}>
            <a className={styles.link}>Home</a>
            <a className={styles.link}>Facilities</a>
            <a className={styles.link}>Rooms</a>
            <a className={styles.link}>Contact-us</a>
        </nav>
    </header>
  )
}

export default Header
