"use client";
import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import Image from "next/image";

const AccountButton = () => {
  const clickHandler = () => {
    console.log("AccountButton");
  };
  return (
    <BaseButton onClick={clickHandler}>
      <Image
        src="/images/icons/user_icon.png"
        alt="account"
        width={25}
        height={25}
        priority
      />
    </BaseButton>
  );
};

export default AccountButton;
