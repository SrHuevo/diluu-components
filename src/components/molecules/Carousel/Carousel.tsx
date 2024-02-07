import { useState } from "react";
import styles from "./style.module.scss";
import {icons} from "../../../assets/icons/icons.ts";
import IconButton from "../../atoms/IconButton/IconButton.tsx"

type Props = {
  slides: Array<{
    image: string;
    title: string;
    description: string;
  }>;
};

const Carousel = ({ slides }: Props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const onPrev = () => {
    const newIndex = (carouselIndex - 1 + slides.length) % slides.length;
    setCarouselIndex(newIndex);
  };

  const onNext = () => {
    const newIndex = (carouselIndex + 1) % slides.length;
    setCarouselIndex(newIndex);
  };

  const carousel = slides[carouselIndex];

  return (
    <div className={styles.content}>
      <div className={styles.parent}>
        <img
          src={icons.YellowShapeVector}
          className={styles.yellow_vector}
        />
        <img src={carousel.image} className={styles.image} />
        <img src={icons.PinkShapeVector} className={styles.pink_vector} />
      </div>
      <div className={styles.card}>
        <img src={icons.SmileVector} className={styles.icon} />
        <p className={styles.card_title}>{carousel.title}</p>
        <p className={styles.card_description}>{carousel.description}</p>
        <div className={styles.arrow}>
          <IconButton onClick={() => onPrev()}>
            <img src={icons.ArrowChevronLeftIcon} alt="Left Arrow" />
          </IconButton>
          <p className={styles.label}>
            {slides.indexOf(carousel) + 1} / {slides.length}
          </p>
          <IconButton onClick={() => onNext()}>
            <img src={icons.ArrowChevronRightIcon} alt="Right Arrow" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
