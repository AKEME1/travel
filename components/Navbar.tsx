"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";
const Navbar = () => {
  return (
    <nav
      className="  flexBetween max-container   padding-container {
      relative z-30 py-5"
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className=" regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {item.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
