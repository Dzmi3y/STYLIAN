"use client";
import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import Image from "next/image";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const menuClickHandler = () => {
    console.log("menuClickHandler");
  };
  return (
    <div className={styles.container}>
      <BaseButton onClick={menuClickHandler}>
        <Image
          src="/images/icons/menu_icon.png"
          alt="Next.js logo"
          width={30}
          height={20}
          priority
        />
      </BaseButton>
    </div>
  );
};

export default MenuButton;
