"use client";

import Image from "next/image";
import { HiMenuAlt1 } from "react-icons/hi";
import { useSidebarContext } from "./SidebarContextProvider";

const Navbar = () => {
  const { toggleSidebar } = useSidebarContext();

  return (
    <nav className="py-4 px-5 fixed top-0 left-0 right-0 min-h-[50px] flex items-center shadow-lg z-10 bg-slate-100">
      <div className="flex items-center justify-between">
        <button onClick={toggleSidebar}>
          <HiMenuAlt1 className="h-10 w-10" />
        </button>
      </div>
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={150}
        height={40}
        className="mx-auto"
      />
    </nav>
  );
};
export default Navbar;
