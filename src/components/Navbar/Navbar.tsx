import {
  GamepadIcon,
  HappyFaceIcon,
  HomeIcon,
  PrizeIcon,
  RouteIcon,
} from "@/components";

import { cn } from "@/helpers/cn";
import logo from "../../../public/logo.png";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul
      className={cn(
        "my-4 border-t border-indigo-400/20 hover:border-indigo-400/40",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

const NavbarListItem = ({
  children,
  className,
  ...props
}: NavbarListItemProps) => {
  return (
    <li
      className={cn(
        "my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-600/40 hover:text-slate-100  cursor-pointer flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center my-4">
        <img src={logo.src} alt="Logo games" className="w-auto h-12 p-2" />
      </div>
      <NavbarList className={"flex-grow"}>
        <NavbarListItem>
          <HomeIcon className="w-4 h-4" />
          Home
        </NavbarListItem>
        <NavbarListItem>
          <GamepadIcon className="w-4 h-4" />
          Games
        </NavbarListItem>
        <NavbarListItem>
          <PrizeIcon className="w-4 h-4" /> Top 10
        </NavbarListItem>
        <NavbarListItem>
          <RouteIcon className="w-4 h-4" /> Walkthroughs
        </NavbarListItem>
      </NavbarList>
      <NavbarList>
        <NavbarListItem>
          <HappyFaceIcon className="w-4 h-4" />
          User
        </NavbarListItem>
      </NavbarList>
    </nav>
  );
};
