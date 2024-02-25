import { HTMLAttributes, ReactNode } from "react";
import styles from "./style.module.scss";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const Container = ({ children, className, ...props }: Props) => {
  const containerClassName = className ? className : styles.container;
  return (
    <div {...props} className={containerClassName}>
      {children}
    </div>
  );
};

export default Container;
