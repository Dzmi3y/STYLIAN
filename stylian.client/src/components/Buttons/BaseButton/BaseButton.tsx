import React from "react";
import styles from "./BaseButton.module.css";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseButton;
