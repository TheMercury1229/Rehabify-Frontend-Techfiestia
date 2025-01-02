import {
  Layout,
  LayoutDashboard,
  LayoutDashboardIcon,
  LogInIcon,
  LogOut,
  LogOutIcon,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <section className="flex flex-col w-1/6 px-8 py-6 bg-primary h-screen">
      <div className="flex justify-center items-center ">
        <Image src="/logo.png" alt="logo" width={130} height={130} />
      </div>
      <ul className="flex flex-col items-start h-full  justify-start mt-16 gap-8 text-white">
        <li className="">
          <Link
            href="/dashboard"
            className={`flex items-center justify-center font-semibold text-xl gap-2`}
          >
            <LayoutDashboard className="size-6" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className={`flex items-center justify-center font-semibold text-xl gap-2`}
          >
            <User2Icon className="size-6" />
            Profile
          </Link>
        </li>
        <li className="mt-auto flex items-center gap-2 justify-center text-lg font-semibold">
          <LogOut className="size-6" />
          Logout
        </li>
      </ul>
    </section>
  );
};
