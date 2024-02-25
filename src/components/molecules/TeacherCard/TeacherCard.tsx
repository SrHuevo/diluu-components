import BlueHalfCircle from "@/components/atoms/SVG/BlueHalfCircle";
import GreenCircle from "@/components/atoms/SVG/GreenCircle";
import OrangeCircle from "@/components/atoms/SVG/OrangeCircle";
import SquarePink from "@/components/atoms/SVG/SquarePink";
import { generateCountryName } from "@/utils/generateCountryName";
import Flag from "react-flagkit";
import styles from "./style.module.scss";

export type TeacherCardProps = {
  name: string;
  avatar: string;
  country: string;
  subtitle: string;
  category: 1 | 2;
  topColor: string;
  bottomColor: string;
};

const TeacherCard = ({
  avatar,
  name,
  country,
  subtitle,
  category,
  topColor = "#3CCB09",
  bottomColor = "#F5D057",
}: TeacherCardProps) => {
  return (
    <div className={styles.parent}>
      <div className={styles.card}>
        {category === 1 && (
          <>
            <SquarePink className={styles.topCategory1} fill={topColor} />
            <OrangeCircle
              className={styles.bottomCategory1}
              fill={bottomColor}
            />
          </>
        )}
        {category === 2 && (
          <>
            <GreenCircle className={styles.topCategory2} fill={topColor} />
            <BlueHalfCircle
              className={styles.bottomCategory2}
              fill={bottomColor}
            />
          </>
        )}
        <img src={avatar} className={styles.avatar} />
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.flag}>
        <Flag country={country} />
        <p>{generateCountryName(country)}</p>
      </div>
      <p>{subtitle}</p>
    </div>
  );
};

export default TeacherCard;
