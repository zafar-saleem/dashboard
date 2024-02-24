import { Avatar } from "@/components/atoms/avatar";
import { Badge } from "@/components/atoms/badge";
import styles from "./profile.module.css";
import { Title } from "@/components/atoms/title";
import { Contact } from "@/components/atoms/contact";

export const Profile = () => {
  return (
    <>
      <Avatar>
        <Badge />
      </Avatar>
      <Title />
      <Contact />
    </>
  )
}