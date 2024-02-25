import React from "react";
import styles from "./style.module.scss";

type Props = {
  title: string;
  color: string;
  icon: string;
};

const FeatureCard = ({ title, color, icon }: Props) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.wrapper}
        style={{
          backgroundColor: color,
        }}
      >
        <img src={icon} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default FeatureCard;
