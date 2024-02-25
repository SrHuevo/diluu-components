import { icons } from "@/variables/icons";
import styles from "./style.module.scss";

type Props = {
  title: string;
  subtitle: string;
};

const ClasesCountSection = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      <img src={icons.BlueShapeIcon} className={styles.blue_vector} />
      <img src={icons.GreenShapeIcon} className={styles.green_vector} />
      <img src={icons.Pink90ShapeIcon} className={styles.pink_vector} />
    </div>
  );
};

export default ClasesCountSection;
