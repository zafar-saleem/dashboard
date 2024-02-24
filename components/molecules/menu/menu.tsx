import { MenuItem } from "@/components/atoms/menu-item";
import styles from "./menu.module.css";

const items = [
  {
    id: 1,
    label: "Dashboard",
    path: "#",
    active: false,
  },
  {
    id: 2,
    label: "Expenses",
    path: "#",
    active: true,
  },
  {
    id: 3,
    label: "Wallets",
    path: "#",
    active: false,
  },
  {
    id: 4,
    label: "Summary",
    path: "#",
    active: false,
  },
  {
    id: 5,
    label: "Accounts",
    path: "#",
    active: false,
  },
  {
    id: 6,
    label: "Settings",
    path: "#",
    active: false,
  },
];

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      {
        items?.map(item => (
          <MenuItem key={item.id} item={item} />
        ))
      }
    </nav>
  )
}
