import Image from "next/image";
import styles from "./item.module.css";
import { IProps } from "./interfaces";

export const Item = ({ ...props }: IProps) => {
  const {
    dp,
    label,
    location,
    cost,
  } = props;

  return (
    <>
      <Image src={dp} width={48} height={48} alt="Grocery" className="m-000" />
      <div className="m-000">
        <h5 className={styles.itemTitle}>{label}</h5>
        <p className={styles.when}>{location}</p>
      </div>
      <p className={styles.cost}>{cost}</p>
    </>
  )
}