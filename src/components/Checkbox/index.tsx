import React from "react";

import styles from "./Checkbox.module.css";

type CheckboxProps = { selected: boolean };

const Checkbox: React.FC<
  CheckboxProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ selected, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.checkbox} ${
        selected ? styles["checkbox-selected"] : ""
      } ${props.className ?? ""}`}
    />
  );
};

export default Checkbox;
