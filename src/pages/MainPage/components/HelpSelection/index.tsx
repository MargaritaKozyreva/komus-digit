import useData from "@src/hooks/getData/getDataHook";
import { WithSkeleton } from "@src/ui/WithSkeleton";
import Button from "@ui/Button";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { IHelpData } from "./types";

const HelpSelection = () => {
  const { isLoading, isError, data } = useData<IHelpData>(
    "POST",
    "get_help_block"
  );

  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null} error={isError}>
      <div className="help">
        <div className="container">
          <div className="help-wrapper">
            <div className="help-title">Помогите нам стать лучше</div>
            <div className="help-btns">
              {data?.placeReviewLink && (
                <a href={data?.placeReviewLink} target='_blank'>
                  <Button mode="orange" className="help-btn">
                    Оставить отзыв
                  </Button>
                </a>
              )}
              {data?.haveQuestionLink && (
                <a href={data?.haveQuestionLink} target="_blank">
                  <Button mode="orange" className="help-btn">
                    Задать вопрос
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </WithSkeleton>
  );
};

export default HelpSelection;
