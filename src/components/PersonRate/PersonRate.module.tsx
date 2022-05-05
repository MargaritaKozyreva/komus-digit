import React, { useEffect, useState } from "react";
import { Rating } from "../Raiting";
import styles from "./PersonRate.module.scss";
import cn from "classnames";
import Textarea from "@src/ui/Textarea/Textarea";
import Button from "@src/ui/Button";
import { httpService } from "@src/core/service";
import { modalActions } from "@src/modules/Modal/redux/ModalSlices";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { RateDTO } from "@src/interfaces/rate.interface";

interface PersonRateProps {
  courseId?: string | number;
}

const PersonRate: React.FC<PersonRateProps> = props => {
  const [comment, setComment] = useState("");
  const [newRatingValue, setNewRatingValue] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { courseId } = props;

  const dispatch = useDispatch();

  const sendData = async () => {
    await httpService<RateDTO.IRate>(
      "POST",
      "send_user_rate_for_course",
      undefined,
      {
        course_id: courseId,
        rate: newRatingValue,
        comment: comment,
      }
    ).then(res => {
      if (res.data.success === false) {
        setErrorMessage("Данные не отправлены");
      } else {
        setErrorMessage("");
      }
    });
  };

  useEffect(() => {
    if (errorMessage === "") {
      dispatch(modalActions.hideModal());
    }
  }, [errorMessage]);

  const handleChange = event => setComment(event.target.value);

  return (
    <div className={cn(styles.root)}>
      {errorMessage && <>Данные не отправлены</>}
      <label htmlFor="course_comment">
        <span className={styles.label}>Ваш комментарий</span>
      </label>
      <Textarea
        name="course_comment"
        id="course_comment"
        value={comment}
        onChange={handleChange}
      >
        {comment}
      </Textarea>
      <span className={styles.label}>Ваша оценка</span>
      <Rating
        size="l"
        className={styles.rate}
        items={5}
        newRatingValue={newRatingValue}
        setNewRatingValue={setNewRatingValue}
        currentValue={0}
        isEditable={true}
      />
      <Button
        mode="lightBlue"
        disabled={!comment}
        withCircle
        onClick={sendData}
      >
        Оставить комментарий
      </Button>
    </div>
  );
};

export { PersonRate };
