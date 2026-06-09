import Link from "next/link";

import classNames from "classnames";

import styles from "./Button.module.scss";

interface IButton {
  onPress?: () => void;
  children?: React.ReactNode;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}

const Button = ({ onPress, children, label, variant = "primary", className, href }: IButton) => {
  const content = label ?? children;
  const cls = classNames(styles.button, styles[variant], className);

  if (href !== undefined) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onPress}>
      {content}
    </button>
  );
};

export default Button;
