import React, { ReactNode } from "react";

import styles from "./Chip.module.css";

const Chip: React.FC<{ children: ReactNode }> = ({ children = <></> }) => {
  return <span className={styles.chip}>{children}</span>;
};

export default Chip;
