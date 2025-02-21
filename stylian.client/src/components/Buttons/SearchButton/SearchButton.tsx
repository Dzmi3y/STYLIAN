"use client";
import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import Image from "next/image";

const SearchButton = () => {
  const clickHandler = () => {
    console.log("SearchButton");
  };
  return (
    <BaseButton onClick={clickHandler}>
      <Image
        draggable="false"
        src="/images/icons/search_icon.png"
        alt="search"
        width={25}
        height={25}
        priority
      />
    </BaseButton>
  );
};

export default SearchButton;
