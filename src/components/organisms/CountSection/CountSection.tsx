import styles from "./style.module.scss";
import { icons } from "../../../assets/icons/icons.ts";

type CountSectionProps = {
    title: string;
    count: number;
}

function CountSection({ title, count }: CountSectionProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h5 className={styles.title}>{title}</h5>
                <h2 className={styles.count}>{count.toLocaleString()}</h2>
            </div>
            <img
                src={icons.BlueDoubleCircleVector}
                className={styles.left_blue_vector}
                alt="Blue Vector"
            />
            <img
                src={icons.PinkCircleVector}
                className={styles.right_pink_vector}
                alt="Pink Vector"
            />
            <img
                src={icons.GreenSquareVector}
                className={styles.right_green_vector}
                alt="Green Vector"
            />
        </div>
    );
}

export default CountSection;
