import React from "react";

import styles from "./Header.module.css";

import todoLogo from "../../assets/logo-todo.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <img src={todoLogo} />
    </div>
  );
};

export default Header;
