import styles from "./style.module.scss";
import TeamCard from "../../atoms/TeamCard/TeamCard.tsx";
import AboutTeam from "../../molecules/AboutTeam/AboutTeam.tsx";


type TeamSectionProps = {
    title: string;
    aboutTitle: string;
    aboutSubtitle: string;
    teamList:  Array<{
        image: string;
        name: string;
        flag: string;
        country: string;
        description: string;
    }>,
    aboutList:  Array<{
        description: string;
        color: string;
        icon: string;
    }>
}

function TeamSection({ title, aboutTitle, aboutSubtitle, teamList, aboutList }: TeamSectionProps) {

    return (
        <>
            <div className={styles.container_mobile}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.card_container}>
                    {teamList.map((item, index) => (
                        <TeamCard {...item} shape={index % 3} />
                    ))}
                </div>
                <AboutTeam title={aboutTitle} subtitle={aboutSubtitle} list={aboutList} />
            </div>
            <div className={styles.container_desktop}>
                <h2 className={styles.title}>{title}</h2>
                <div className={`${styles.card_container} ${styles.card_container_row1}`}>
                    {teamList?.slice(0, 2)?.map((item, index) => (
                        <TeamCard {...item} shape={index} />
                    ))}
                </div>
                <div className={styles.flex}>
                    <div className={styles.column}>
                        <div className={`${styles.card_container} ${styles.card_container_row2}`}>
                            {teamList?.slice(2, 3)?.map((item, index) => (
                                <TeamCard {...item} shape={index + 2} />
                            ))}
                        </div>
                        <div className={`${styles.card_container} ${styles.card_container_row3}`}>
                            {teamList?.slice(3, 4)?.map((item, index) => (
                                <TeamCard {...item} shape={index + 3} />
                            ))}
                        </div>
                        <div className={`${styles.card_container} ${styles.card_container_row2}`}>
                            {teamList?.slice(4, 5)?.map((item) => (
                                <TeamCard {...item} shape={4} />
                            ))}
                        </div>
                    </div>
                    <div className={styles.column}>
                        <AboutTeam title={aboutTitle} subtitle={aboutSubtitle} list={aboutList} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamSection;
