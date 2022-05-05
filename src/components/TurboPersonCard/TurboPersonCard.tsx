import React, { PropsWithChildren } from "react";
import styles from "./TurboPersonCard.module.scss";
import cn from "classnames";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  design?: "white" | "blue";
  withFlag?: boolean;
}

const TurboPersonCard: React.FC<PropsWithChildren<CardProps>> = (props) => {
  const { children, className, design = "white", withFlag = true, ...attr } = props;
  return (
    <div
      className={cn(styles.card, className, {
        [styles.white]: design === "white",
        [styles.blue]: design === "blue",
      })}
      {...attr}
    >
      { withFlag && <span className={cn(styles.flag)}></span> }
      {children}
    </div>
  );
};

export {TurboPersonCard}
