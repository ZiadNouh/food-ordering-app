"use client";

import CartButton from "@/components/header/cart-button";
import { Button, buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { id: "1", title: "Menu", href: Routes.MENU },
    { id: "12", title: "About", href: Routes.ABOUT },
    { id: "13", title: "Contact", href: Routes.CONTACT },
    {
      id: "4",
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="order-last lg:order-none">
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>

      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10 `}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6 " />
        </Button>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${link.href}`}
              className={`${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({
                      variant: "default",
                      size: "lg",
                    })} !px-8 !rounded-full`
                  : "text-accent hover:text-primary duration-200 transition-colors"
              } font-semibold`}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <CartButton />
        </li>
      </ul>
    </nav>
  );
}
