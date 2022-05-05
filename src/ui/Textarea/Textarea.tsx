import React, { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";
import cn from "classnames";

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  value: any;
  onChange?: (event: any) => void;
}

const Textarea: React.FC<TextareaProps> = props => {
  const { className, value, ...attr } = props;
  return (
    <textarea
      className={cn(className, styles.root)}
      value={value}
      {...attr}
    />
  );
};

export default Textarea;
