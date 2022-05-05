import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import StarIcon from "@ui/Icons/StarIcon.svg";
import BigStarIcon from "@ui/Icons/BigStarIcon.svg";
import styles from "./raiting.module.scss";

import cn from "classnames";

interface RaitingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  items: number;
  currentValue: number;
  newRatingValue?: number;
  setNewRatingValue?: (newRaiting: number) => void;
  isEditable: boolean;
  size?: "s" | "l";
}

const Rating: React.FC<RaitingProps> = React.memo(props => {
  const {
    items = 1,
    currentValue = 0,
    isEditable = false,
    className,
    size = "s",
    newRatingValue,
    setNewRatingValue,
  } = props;
  //const fillCount = (currentValue * items) / 100;
  const [ratingArray, setArray] = useState<JSX.Element[]>(
    Array.from(Array(items).fill(<></>))
  );
  useEffect(() => {
    constructRaiting(currentValue);
  }, [currentValue]);

  useEffect(() => {
    newRatingValue && constructRaiting(newRatingValue);
  }, [newRatingValue]);

  const changeDisplay = (raiting: number) => {
    if (!isEditable) {
      return;
    }
    constructRaiting(raiting);
  };
  const changeRaiting = (newRaiting: number) => {
    if (!isEditable) {
      return;
    }
    setNewRatingValue && setNewRatingValue(newRaiting);
  };

  const handleSpace = (
    newRaiting: number,
    event: KeyboardEvent<SVGAElement>
  ) => {
    if (event.code !== "Space") {
      return;
    }
    setNewRatingValue && setNewRatingValue(newRaiting);
  };

  const constructRaiting = (currentRaiting: number) => {
    const updateArray: Array<JSX.Element> = ratingArray.map((starItem, i) => {
      return size === "l" ? (
        <BigStarIcon
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(newRatingValue || 0)}
          onClick={() => changeRaiting(i + 1)}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
            isEditable === true && handleSpace(i + 1, e)
          }
          tabIndex={isEditable ? 0 : -1}
          key={i}
          className={cn(styles.star, {
            [styles.fill]: i < currentRaiting,
          })}
        />
      ) : (
        <StarIcon
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(newRatingValue || 0)}
          onClick={() => changeRaiting(i + 1)}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
            isEditable === true && handleSpace(i + 1, e)
          }
          tabIndex={isEditable ? 0 : -1}
          key={i}
          className={cn(styles.star, {
            [styles.fill]: i < currentRaiting,
          })}
        />
      );
    });

    setArray(updateArray);
  };

  return (
    <div
      className={cn(className, styles.raiting, {
        [styles.isEditable]: isEditable,
      })}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
});

export { Rating };
