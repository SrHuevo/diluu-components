import { icons } from '../../../assets/icons/icons'
import styles from "./style.module.scss";

type Props = {
  name: string,
  description: string,
  image: string,
  flag?: string,
  country?: string,
  className?: string,
  shape?: number,
};

const shapes = [
  {
    top: icons.PurpleSquareVector,
    bottom: icons.OrangeCircleVector,
  },
  {
    top: icons.GreenCircleVector,
    topStyle: {
      top: '15px',
      right: '15px',
    },
    bottom: icons.BlueHourGlassVector,
    bottomStyle: {
      right: 0,
      left: 'initial',
    }
  },
  {
    top: icons.OrangeSquareVector,
    bottom: icons.YellowCircleVector,
  },
  {
    top: icons.PurpleCircleVector,
    topStyle: {
      top: '15px',
      right: '15px',
    },
    bottom: icons.OrangeHourGlassVector,
    bottomStyle: {
      right: 0,
      left: 'initial',
    }
  },
  {
    top: icons.GreenSquareVector,
    bottom: icons.YellowCircleVector,
  },
]

const TeamCard = ({ className, name, description, image, shape, flag, country }: Props) => {
  const selectedShape = shapes[shape ?? 0] ?? shapes[0]
  return (
    <div className={`${styles.team_card} ${className}`}>
      <div className={styles.image_wrap}>
        <img className={styles.shape_top} src={selectedShape.top} style={selectedShape.topStyle} alt="" />
        <img className={styles.shape_bottom} src={selectedShape.bottom} style={selectedShape.bottomStyle} alt="" />
        <img className={styles.image} src={image} alt="" />
      </div>
      <h5 className={styles.name}> {name}</h5>
      {
        !!country && <div className={styles.country_wrap}><img src={flag} alt={country} /> {country}</div>
      }
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default TeamCard;
