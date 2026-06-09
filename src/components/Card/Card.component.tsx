import classNames from "classnames";

import styles from "./Card.module.scss";

interface ICard {
  children: React.ReactNode;
  blur?: number;
  radius?: number;
  className?: string;
}

const Card = ({ children, blur = 15, radius, className }: ICard) => {
  return (
    <div
      className={classNames(styles.container, className)}
      style={{
        backdropFilter: `blur(${blur}px)`,
        ...(radius !== undefined && { borderRadius: radius }),
      }}
    >
      {children}
    </div>
  );
};

export default Card;
