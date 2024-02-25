import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import TeacherCard, {
  TeacherCardProps,
} from "@/components/molecules/TeacherCard/TeacherCard";
import { icons } from "@/variables/icons";
import { images } from "@/variables/images";
import styles from "./style.module.scss";

const teachers: TeacherCardProps[] = [
  {
    category: 1,
    country: "MX",
    name: "Marcela Carrillo",
    subtitle: "10 años de experiencia",
    avatar: images.Teacher1,
    topColor: "#E465F2",
    bottomColor: "#FF9331",
  },
  {
    category: 2,
    country: "GT",
    name: "Teacher Name",
    subtitle: "Años de experiencia",
    avatar: images.Teacher2,
    topColor: "#3CCB09",
    bottomColor: "#3983ED",
  },
  {
    category: 1,
    country: "ES",
    name: "Marcela Carrillo",
    subtitle: "10 años de experiencia",
    avatar: images.Teacher3,
    topColor: "#F5D057",
    bottomColor: "#3983ED",
  },
  {
    category: 2,
    country: "CO",
    name: "Teacher Name",
    subtitle: "Años de experiencia",
    avatar: images.Teacher4,
    topColor: "#E465F2",
    bottomColor: "#FF9331",
  },
  {
    category: 1,
    country: "AR",
    name: "Teacher Name",
    subtitle: "10 años de experiencia",
    avatar: images.Teacher5,
    topColor: "#3CCB09",
    bottomColor: "#F5D057",
  },
];

const features = [
  {
    title:
      "Profesores nativos y con el inglés como segunda lengua con experiencia en la enseñanza a los más jóvenes",
    color: "#FF9331",
    icon: icons.About1Icon,
  },
  {
    title:
      "Los profesores participan en programas mensuales para continuar con su desarrollo profesional",
    color: "#F5D057",
    icon: icons.About2Icon,
  },
  {
    title:
      "Docentes con diplomas y certificados internacionales de docencia: TEFL, TESOL, TEYL, CELTA, DELTA, TKT.",
    color: "#E465F2",
    icon: icons.About3Icon,
  },
  {
    title:
      "Profesionales apasionados que le abrirán al niño/a el emocionante mundo de la lengua inglesa",
    color: "#3983ED",
    icon: icons.About4Icon,
  },
];

const NuestrosSection = () => {
  return (
    <div>
      <p className={styles.title}>Nuestros profesores</p>
      <div className={styles.teacher_list}>
        <div className={styles.top}>
          <TeacherCard
            category={teachers[0].category}
            country={teachers[0].country}
            name={teachers[0].name}
            subtitle={teachers[0].subtitle}
            avatar={teachers[0].avatar}
            topColor={teachers[0].topColor}
            bottomColor={teachers[0].bottomColor}
          />
          <TeacherCard
            category={teachers[1].category}
            country={teachers[1].country}
            name={teachers[1].name}
            subtitle={teachers[1].subtitle}
            avatar={teachers[1].avatar}
            topColor={teachers[1].topColor}
            bottomColor={teachers[1].bottomColor}
          />
        </div>
        <div className={styles.center}>
          <TeacherCard
            category={teachers[2].category}
            country={teachers[2].country}
            name={teachers[2].name}
            subtitle={teachers[2].subtitle}
            avatar={teachers[2].avatar}
            topColor={teachers[2].topColor}
            bottomColor={teachers[2].bottomColor}
          />
        </div>
        <TeacherCard
          category={teachers[3].category}
          country={teachers[3].country}
          name={teachers[3].name}
          subtitle={teachers[3].subtitle}
          avatar={teachers[3].avatar}
          topColor={teachers[3].topColor}
          bottomColor={teachers[3].bottomColor}
        />
        <div className={styles.center}>
          <TeacherCard
            category={teachers[4].category}
            country={teachers[4].country}
            name={teachers[4].name}
            subtitle={teachers[4].subtitle}
            avatar={teachers[4].avatar}
            topColor={teachers[4].topColor}
            bottomColor={teachers[4].bottomColor}
          />
        </div>
      </div>
      <div className={styles.teacher_list_mobile}>
        {teachers.map((item) => (
          <TeacherCard
            category={item.category}
            country={item.country}
            name={item.name}
            subtitle={item.subtitle}
            avatar={item.avatar}
            topColor={item.topColor}
            bottomColor={item.bottomColor}
          />
        ))}
      </div>
      {/* features */}
      <div className={styles.feature_parent}>
        <div className={styles.feature_child}>
          <p className={styles.feature_title}>2000+</p>
          <p className={styles.feature_subtitle}>profesores</p>
          <div className={styles.feature_list}>
            {features.map((item) => (
              <FeatureCard
                color={item.color}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosSection;
