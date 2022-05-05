import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import cn from "classnames";
import styles from "./TabPanel.module.scss";

interface TabPanelProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  forceRender: boolean;
  selected: boolean;
  selectedClassName: string;
  tabId: string
}

const TabPanel: React.FC<TabPanelProps> = props => {
  const {
    children,
    className,
    forceRender,
    id,
    selected,
    selectedClassName,
    tabId,
    ...attr
  } = props;

  return (
    <div
      {...props}
      className={cn(className, {
        [selectedClassName]: selected,
      })}
      role="tabpanel"
      id={id}
      aria-labelledby={tabId}
    >
      {forceRender || selected ? children : null}
    </div>
  );
};

export { TabPanel };
