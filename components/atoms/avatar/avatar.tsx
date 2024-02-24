import Image from "next/image";
import profile from "./assets/Profile.png";
import React from "react";
import styles from "./avatar.module.css";

export const Avatar = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.avatar}>
      <Image src={profile} width={72} height={72} alt="avatar" />
      {children}
    </div>
  )
}
