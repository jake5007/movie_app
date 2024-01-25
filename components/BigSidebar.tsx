"use client";

import Image from "next/image";
import { useSidebarContext } from "./SidebarContextProvider";
import Link from "next/link";
import { links } from "@/constants";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showSidebar } = useSidebarContext();

  return (
    <aside className="hidden md:block md:shadow-[1px_0_0_0_rgba(0,0,0,0.1)]">
      <div
        className={`h-full min-h-[100vh] w-[250px] bg-slate-100
        ml-[-250px] transition-[margin-left_0.3s_ease-in-out]
        ${showSidebar && "!ml-0"}`}
      >
        <div className="sticky top-0">
          <div className="h-[5rem] " />
          <NavLinks isBigSidebar />
        </div>
      </div>
    </aside>
  );
};
export default BigSidebar;
