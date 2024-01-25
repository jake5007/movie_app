"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants";
import type { NavLinksProps } from "@/types";
import { useSidebarContext } from "./SidebarContextProvider";

const NavLinks = ({ isBigSidebar }: NavLinksProps) => {
  const currRoute = usePathname();
  const { toggleSidebar } = useSidebarContext();

  return (
    <div className="flex flex-col gap-2">
      {links.map((link, idx) => (
        <Link
          key={idx}
          href={link.path}
          className={`transition-[0.3s,ease-in-out,all] hover:text-[#2cb1bc]
          ${currRoute === link.path && "text-[#2cb1bc]"}
          ${
            isBigSidebar &&
            "pl-10 transition-[padding-left,0.3s,ease-in-out] hover:pl-12"
          }`}
          onClick={!isBigSidebar && toggleSidebar}
        >
          <span className="text-xl">{link.text}</span>
        </Link>
      ))}
    </div>
  );
};
export default NavLinks;
