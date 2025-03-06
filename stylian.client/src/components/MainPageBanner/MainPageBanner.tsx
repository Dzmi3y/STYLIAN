import React from "react";
import styles from "./MainPageBanner.module.css";
import Image from "next/image";
import { ROUTES } from "@/data/const/routes";
import NavLink from "../NavLink/NavLink";
import BlackNavButton from "../Buttons/BlackNavButton/BlackNavButton";

const MainPageBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/new_collection.jpg"
          alt="new_collection.jpg"
          width={548}
          height={654}
        />
        <div className={styles.centerArea}>
          <p className={styles.text}>NEW COLLECTION</p>
          <h1 className={styles.title}>
            Meet New
            <br />
            Fashion Week
          </h1>

          <BlackNavButton url={ROUTES.CATALOG}>Shop Now</BlackNavButton>
        </div>
        <div className={styles.verticalText}> — Scroll Down</div>
      </div>
      <div className={styles.linkBar}>
        <NavLink url="">FB</NavLink>
        <span>—</span>
        <NavLink url="">TW</NavLink>
        <span className={styles.whiteText}>—</span>
        <NavLink url="">INS</NavLink>
        <span>—</span>
        <NavLink url="">PT</NavLink>
      </div>
    </div>
  );
};

export default MainPageBanner;
