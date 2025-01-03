"use client";

import { navLinks } from "@/data";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col w-1/6 px-8 py-6 bg-primary h-screen sticky top-0 left-0 z-50">
      <div className="flex justify-center items-center">
        <Image src="/logo.png" alt="logo" width={130} height={130} />
      </div>
      <ul className="flex flex-col items-start h-full justify-start mt-16 gap-8 text-white">
        {navLinks.map(({ name, href, Icon }) => (
          <li key={name}>
            <Link
              href={href}
              className={`flex items-center justify-center font-semibold text-xl gap-2 ${
                pathname === href ? "text-yellow-400" : ""
              }`}
            >
              <Icon className="size-6" />
              {name}
            </Link>
          </li>
        ))}
        <li className="mt-auto flex items-center gap-2 justify-center text-lg font-semibold">
          <LogOut className="size-6" />
          Logout
        </li>
      </ul>
    </section>
  );
};
