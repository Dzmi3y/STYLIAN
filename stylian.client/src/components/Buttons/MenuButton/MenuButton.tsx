"use client";
import React, { useState } from "react";
import BaseButton from "../BaseButton/BaseButton";
import Image from "next/image";
import styles from "./MenuButton.module.css";
import { ROUTES } from "@/data/const/routes";
import NavLink from "@/components/NavLink/NavLink";

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.container}>
      <BaseButton onClick={menuClickHandler}>
        <Image
          className={isMenuOpen ? styles.showImage : styles.hideImage}
          src="/images/icons/menu_icon.png"
          alt="menu button"
          width={30}
          height={20}
          priority
        />
        <Image
          className={!isMenuOpen ? styles.showImage : styles.hideImage}
          src="/images/icons/close_icon.png"
          alt="menu button"
          width={30}
          height={20}
          priority
        />
      </BaseButton>
      <div
        className={`${styles.popup} ${
          !isMenuOpen ? styles.showPopup : styles.hidePopup
        }`}
      >
        <nav className={styles.nav}>
          <NavLink url={ROUTES.HOME}>Home</NavLink>
          <NavLink url={ROUTES.CATALOG}>Catalog</NavLink>
          <NavLink url={ROUTES.CONTACTS}>Contacts</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MenuButton;
