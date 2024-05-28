import { cn } from "@/helpers/cn";
import Link from "next/link";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarListItemLinkProps } from "./types";

export const NavbarListItemLink = ({
  href,
  children,
  className,
  ...props
}: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <Link
        className="flex gap-2 items-center w-full p-2 rounded-lg"
        {...props}
        href={href}
      >
        {children}
      </Link>
    </NavbarListItem>
  );
};
