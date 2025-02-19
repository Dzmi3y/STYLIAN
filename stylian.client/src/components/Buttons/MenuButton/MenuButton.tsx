"use client";
import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import Image from "next/image";

const MenuButton = () => {
  const menuClickHandler = () => {
    console.log("menuClickHandler");
  };
  return (
    <BaseButton onClick={menuClickHandler}>
      <Image
        src="/images/icons/menu_icon.png"
        alt="Next.js logo"
        width={30}
        height={20}
        priority
      />
    </BaseButton>
  );
};

export default MenuButton;
