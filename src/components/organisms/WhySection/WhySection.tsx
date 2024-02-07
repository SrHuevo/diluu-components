import Carousel from "../../molecules/Carousel/Carousel";
import styles from "./style.module.scss";
import {icons} from "../../../assets/icons/icons.ts";

type WhySectionProps = {
  title: string;
  slides: {
    image: string;
    title: string;
    description: string;
  }[];
}

function WhySection({title, slides}: WhySectionProps) {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.content}>
          <Carousel slides={slides} />
        </div>
        <img
          src={icons.PinkShapeVector}
          className={styles.footer_pink_vector}
          alt="Pink Vector"
        />
        <img
          src={icons.GreenShapeVector}
          className={styles.footer_green_vector}
          alt="Green Vector"
        />
        <img
          src={icons.OrangeShapeVector}
          className={styles.footer_orange_vector}
          alt="Orange Vector"
        />
      </div>
    </div>
  );
}

export default WhySection;
