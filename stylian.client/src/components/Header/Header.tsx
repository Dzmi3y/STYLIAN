import React from "react";
import styles from "./Header.module.css";
import MenuButton from "../Buttons/MenuButton/MenuButton";
import NavLink from "../NavLink/NavLink";
import CartButton from "../Buttons/CartButton/CartButton";
import SearchButton from "../Buttons/SearchButton/SearchButton";
import AccountButton from "../Buttons/AccountButton/AccountButton";
import { ROUTES } from "@/data/const/routes";

const Header = () => {
  return (
    <div className={styles.container}>
      <MenuButton />
      <div className={styles.centerContainer}>
        <span className={styles.logo}>STYLIAN</span>
        <nav className={styles.nav}>
          <NavLink url={ROUTES.HOME}>Home</NavLink>
          <NavLink url={ROUTES.CATALOG}>Catalog</NavLink>
          <NavLink url={ROUTES.CONTACTS}>Contacts</NavLink>
        </nav>
      </div>
      <div className={styles.buttonsContainer}>
        <SearchButton />
        <AccountButton />
        <CartButton />
      </div>
    </div>
  );
};

export default Header;
