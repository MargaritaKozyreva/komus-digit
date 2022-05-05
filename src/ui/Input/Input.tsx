import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

import cn from "classnames";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<InputProps> = (props) => {
  const { className, ...attr } = props;
  return <input className={cn(className, [styles.input])} {...attr} />;
};
