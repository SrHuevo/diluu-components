import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./style.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const IconButton = ({ className, children, ...props }: Props) => {
  const buttonClassName = className ? className : styles.btn_outline;

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
