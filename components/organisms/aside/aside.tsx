import { Menu } from "@/components/molecules/menu";
import { Profile } from "@/components/molecules/profile";

export const Aside = () => {
  return (
    <aside className={`p-400`}>
      <Profile />
      <Menu />
    </aside>
  )
}
