import styles from "./style.module.scss";
import Container from "@/components/atoms/Container/Container.tsx";
import Carousel from "@/components/molecules/Carousel/Carousel.tsx";
import { icons } from "@/variables/icons";

type WhySectionProps = {
  title: string;
  slides: {
    image: string;
    title: string;
    description: string;
  }[];
};

function WhySection({ title, slides }: WhySectionProps) {
  return (
    <div className={styles.bg}>
      <Container>
        <p className={styles.title}>{title}</p>
        <div className={styles.content}>
          <Carousel slides={slides} />
        </div>
        <img
          src={icons.PinkShapeIcon}
          className={styles.footer_pink_vector}
          alt="Pink Icon"
        />
        <img
          src={icons.GreenShapeIcon}
          className={styles.footer_green_vector}
          alt="Green Icon"
        />
        <img
          src={icons.OrangeShapeIcon}
          className={styles.footer_orange_vector}
          alt="Orange Icon"
        />
      </Container>
    </div>
  );
}

export default WhySection;
