import { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/citizen/Slider.module.css';
import img1 from '@/public/image/citizen/banner1.png';

const images = [
  { src:'/../public/image/citizen/banner2.png', alt: 'Image 1' },
  { src:'/../public/image/citizen/banner1.png', alt: 'Image 2' },

];

const CustomSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // Change image every 5 seconds
  setTimeout(changeImage, 5000);

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  );
};

export default CustomSlider;
