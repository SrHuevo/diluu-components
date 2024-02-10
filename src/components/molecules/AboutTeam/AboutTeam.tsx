import styles from "./style.module.scss";

type Props = {
    title: string;
    subtitle: string;
    list: Array<{
        description: string;
        color: string;
        icon: string;
    }>;
};

const AboutTeam = ({ title, subtitle, list }: Props) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <div className={styles.flex}>
                {list?.map((data) => (
                    <div className={styles.card}>
                        <div className={styles.image_wrap} style={{ backgroundColor: data.color }}>
                            <img src={data?.icon} alt="Icon" />
                        </div>
                        <p>{data?.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutTeam;
