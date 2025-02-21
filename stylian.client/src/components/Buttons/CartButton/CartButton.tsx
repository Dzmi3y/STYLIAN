"use client";
import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import Image from "next/image";

const CartButton = () => {
  const clickHandler = () => {
    console.log("CartButton");
  };
  return (
    <BaseButton onClick={clickHandler}>
      <Image
        draggable="false"
        src="/images/icons/cart_icon.png"
        alt="cart"
        width={25}
        height={25}
        priority
      />
    </BaseButton>
  );
};

export default CartButton;
