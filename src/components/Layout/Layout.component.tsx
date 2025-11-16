import classNames from "classnames";

import styles from "./Layout.module.scss";

interface ILayout {
  children: any;
  className?: any;
}

const Layout = ({ children, className }: ILayout) => {
  return (
    <main className={classNames(styles.container, className)}>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default Layout;
