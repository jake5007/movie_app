"use client";

import { FaTimes } from "react-icons/fa";
import { useSidebarContext } from "./SidebarContextProvider";
import Image from "next/image";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useSidebarContext();

  return (
    <aside className="md:hidden">
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.7)]
        flex justify-center items-center z-[-1]
        opacity-0 invisible transition-[0.3s,ease-in-out,all]
        ${showSidebar && "!z-[99] !opacity-100 !visible"}`}
      >
        <div
          className={`relative flex flex-col items-center  
          w-[90vw] h-[95vh] rounded-md py-16 px-8
          bg-white`}
        >
          <button
            type="button"
            className="absolute top-[10px] left-[10px]
            bg-transparent border-transparent text-[2rem]
            text-[#842029]"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <header className="mb-4">
            <Image src="/images/logo.svg" alt="logo" width={120} height={40} />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};
export default SmallSidebar;
