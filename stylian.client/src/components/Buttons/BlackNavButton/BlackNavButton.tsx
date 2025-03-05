"use client";
import React from "react";
import Link from "next/link";
import styles from "./BlackNavButton.module.css";

interface BlackNavLinkProps {
  url: string;
  children: React.ReactNode;
}

const BlackNavLink: React.FC<BlackNavLinkProps> = ({ children, url }) => {
  return (
    <Link href={url} passHref>
      <button draggable="false" className={styles.button}>
        {children}
      </button>
    </Link>
  );
};

export default BlackNavLink;
