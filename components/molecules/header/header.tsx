import React from "react";
import styles from "./header.module.css";

export const Header = ({ children }: React.PropsWithChildren) => {
  return (
    <header className={styles.header}>{children}</header>
  )
}