import PhotoSection from '../../components/layout/sections/PhotoSection/PhotoSection';
import TestimonialsSection from '../../components/layout/sections/TestimonialsSection/TestimonialsSection';
import WelcomeSection from '../../components/layout/sections/WelcomeSection/WelcomeSection';
import styles from './MainPage.module.css'


function MainPage() {

  return (
    <main className={styles.main}>
        <WelcomeSection/>
        <PhotoSection/>
        <TestimonialsSection blockquote="Calm, Serene, Retro – What a way to relax and enjoy" cite=" Mr. and Mrs. Baxter, UK" />
    </main>
  )
}

export default MainPage;
