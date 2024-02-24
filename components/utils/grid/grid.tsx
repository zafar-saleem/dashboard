import React from "react";
import styles from "./grid.module.css";

export const Grid = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.grid}>{children}</div>
  )
}
