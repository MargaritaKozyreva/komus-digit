import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import cn from "classnames";
import styles from "./TabList.module.scss";

interface TabListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  id: string;
}

const TabList: React.FC<TabListProps> = props => {
  const { id, className, children } = props;

  return (
    <ul {...props} className={cn(className)} role="tablist">
      {children}
    </ul>
  );
};

export {TabList};
