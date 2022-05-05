import cn from "classnames";
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
} from "react";

interface TabProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  id: string;
  tabRef: (node: HTMLLIElement | null) => void;
  focus: boolean;
  disabled: boolean;
  selected: boolean;
  panelId: string;
  selectedClassName: string,
  disabledClassName: string,
}

const Tab: React.FC<TabProps> = props => {
  const {
    selected,
    focus,
    className,
    id,
    tabRef,
    disabled,
    panelId,
    tabIndex,
    selectedClassName,
    disabledClassName,
    children
  } = props;

  let nodeRef = useRef<HTMLLIElement | null>();

  useEffect(() => {
    checkFocus();
  });

  const checkFocus = () => {
    if (selected && focus) {
      nodeRef?.current?.focus();
    }
  };

  return (
    <li
    className={cn(className, {
        [selectedClassName]: selected,
        [disabledClassName]: disabled,
      })}
      ref={node => {
        nodeRef.current = node;
        if (tabRef) tabRef(node);
      }}
      role="tab"
      id={id}
      aria-selected={selected ? "true" : "false"}
      aria-disabled={disabled ? "true" : "false"}
      aria-controls={panelId}
      tabIndex={tabIndex || (selected ? 0 : undefined)}
      data-rttab
    >
       {children} 
    </li>
  );
};

export default Tab;
