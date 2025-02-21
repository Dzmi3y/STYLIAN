"use client";
import React from "react";
import Link from "next/link";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  url: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children, url }) => {
  return (
    <Link draggable="false" className={styles.link} href={url}>
      {children}
    </Link>
  );
};

export default NavLink;
