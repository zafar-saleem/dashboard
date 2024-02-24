import Link from "next/link";
import styles from "./menu-item.module.css";

export const MenuItem = ({ item }: any) => {
  return (
    <li className={styles.item}>
      <Link href={item.path} className={item.active ? styles.active : styles.inactive}>{item.label}</Link>
    </li>
  )
}