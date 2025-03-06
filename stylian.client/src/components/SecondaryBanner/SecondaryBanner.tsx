import React from "react";
import styles from "./SecondaryBanner.module.css";
import Image from "next/image";
import { ROUTES } from "@/data/const/routes";
import BlackNavButton from "../Buttons/BlackNavButton/BlackNavButton";

const SecondaryBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/multi_brand.jpg"
          alt="multi_brand.jpg"
          width={880}
          height={543}
        />
        <div className={styles.centerArea}>
          <p className={styles.text}>DEAL OF THE WEEK</p>
          <h1 className={styles.title}>
            Multi-Brand
            <br />
            Store of clothes
          </h1>

          <BlackNavButton url={ROUTES.CATALOG}>Shop Now</BlackNavButton>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
