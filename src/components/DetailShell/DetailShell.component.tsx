import styles from "./DetailShell.module.scss";

interface DetailShellProps {
  children: React.ReactNode;
  padBottom?: boolean;
}

const DetailShell = ({ children, padBottom }: DetailShellProps) => {
  return <div className={padBottom ? styles.detailShellPadded : styles.detailShell}>{children}</div>;
};

interface DetailGridProps {
  children: React.ReactNode;
}

const DetailGrid = ({ children }: DetailGridProps) => {
  return <div className={styles.detailGrid}>{children}</div>;
};

export { DetailGrid,DetailShell };
