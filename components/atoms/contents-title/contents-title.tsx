import styles from "./contents-title.module.css";

export const ContentTitle = ({ children }: React.PropsWithChildren) => {
  return (
    <h1 className={styles.title}>{children}</h1>
  )
}
