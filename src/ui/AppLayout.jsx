/** @format */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Logo } from "./Logo";
import { BsList, BsX } from "react-icons/bs";

export default function AppLayout({children}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      dir="rtl"
      className="mx-auto h-screen w-full max-w-7xl flex flex-col lg:grid lg:grid-cols-[15rem_1fr] lg:grid-rows-[auto_1fr] "
    >
      {/**sidbar */}
     <aside
        className={`
  fixed top-0 right-0 z-[60] h-full w-64 bg-bg-secondary shadow-2xl p-5 
  transform transition-transform duration-300 ease-in-out
  ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
  lg:translate-x-0 lg:relative lg:shadow-none
`}
      >
        <div className="py-2 lg:py-2 flex items-center justify-between">
          <div className="flex  items-center lg:p-0">
            <Logo />
            <div className="flex flex-col lg:mr-2 text-[10px] lg:text-[12px] font-medium ">
              <span className="text-primary-light font-bold ">
                فرصت و درآمد
              </span>
              <span className="text-text-secondary">
                فرصت‌های شغلی، در دستان تو
              </span>
            </div>
          </div>
          <div className="order-2 lg:hidden">
            <button
              className="text-secondary p-1"
              onClick={() => setSidebarOpen(false)}
            >
              <BsX size={25} />
            </button>
          </div>
        </div>
        <nav>
         {/* <Sidebar />*/}
         {children}
        </nav>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-col flex-1 md:px-5">
        <header className="sticky top-0 z-50 flex items-center justify-between
  border-b border-border-secondary
border-white/20 backdrop-blur-md p-4 ">
          <button
            className="lg:hidden  text-secondary"
            onClick={() => setSidebarOpen(true)}
          >
            <BsList size={30} />
          </button>
          <Header />
        </header>
        <main className=" overflow-y-auto min-h-screen p-3  bg-bg-secondary">
          <div className="mx-auto  max-w-screen-md flex flex-col p-y-12">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
 

