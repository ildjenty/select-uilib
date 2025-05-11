import { User } from "@/mock/users";
import { NavLink } from "@/components/nav-link";
import { Avatar } from "@/components/avatar";

export function DMNavLink({ user }: { user: User }) {
  return (
    <NavLink href={`/dm/${user.id}`} className="text-nowrap">
      <Avatar
        src={user.avatarSrc}
        alt={user.name}
        online={user.online}
        size={24}
      />
      {user.name}
    </NavLink>
  );
}
