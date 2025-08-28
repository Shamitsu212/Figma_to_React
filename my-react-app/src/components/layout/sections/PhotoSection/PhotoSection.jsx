import PhotoAndH from '../../../UI/PhotoAndH/PhotoAndH';

import styles from './PhotoSection.module.css'

import p1 from '../../../../assets/images/p1.jpg'
import p2 from '../../../../assets/images/p2.jpg'
import p3 from '../../../../assets/images/p3.jpg'
import p4 from '../../../../assets/images/p4.jpg'
import p5 from '../../../../assets/images/p5.jpg'
import p6 from '../../../../assets/images/p6.jpg'

function PhotoSection() {

    const images=[
        {photo: p1, text: 'THE GYM'},
        {photo: p2, text: 'POOLSIDE BAR'},
        {photo: p3, text: 'THE SPA'},
        {photo: p4, text: 'SWIMMING POOL'},
        {photo: p5, text: 'RESTAURANT'},
        {photo: p6, text: 'LAUNDRY'},
    ]
  return (
    <section className={styles.photoSection}>

      <div className={styles.TextContainer}>
        <h2 className={styles.TextContainer__h}>
            FACILITIES
        </h2>
        <p className={styles.TextContainer__text}>
            We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so<br/> 
            that we can ensure an experience quite unique. Luxury hotels offers the perfect setting with stunning views for leisure<br/> 
            and our modern luxury resort facilities will help you enjoy the best of all.
        </p>

        
      </div>
      <div className={styles.ImageContainer}>
        {images.map((img, index) => (
            <PhotoAndH key={index} photo={img.photo} text={img.text} />
        ))}
      </div>
    </section>
  )
}

export default PhotoSection;
