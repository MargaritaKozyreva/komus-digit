import React from "react";
import { WithSkeleton } from "@ui/WithSkeleton";
import Button from "@ui/Button";
import { eventWidgetMockData } from "./mockData/EventCardContext";
import { Link } from "react-router-dom";
import { IEventData } from "./types";
import useData from "../../../../hooks/getData/getDataHook";
import "./styles.scss";

const EventCard = () => {
  const { isLoading, isError, data } = useData<{ nextEvent: IEventData }>(
    "POST",
    "get_event_widget",
    undefined
  );

  return (
    <div className="card-item card-item1 grid-item">
      <WithSkeleton
        isLoading={isLoading}
        isEmpty={!data || Object.keys(data?.nextEvent).length === 0}
        error={isError}
      >
        <img
          src={`${process.env["API"]}${data?.nextEvent.image}`}
          onError={(event: any) => {
            event.target.src = `${process.env["API"]}/komus_num/app/images/card1.png`;
            event.onerror = null;
          }}
        />

        <span className="mini-event-text">события</span>
        <div className="card-date">
          <div>
            <span>{data?.nextEvent.day_date}</span> {data?.nextEvent.month_date}
          </div>
        </div>
        <div className="card-name">
          {data?.nextEvent.title || "Данных по событию нет"}
        </div>
        <div className="card-text">
          {data?.nextEvent.describe || "описание отсутствует"}
        </div>
        <div className="card-btns">
          {data?.nextEvent.link && (
            <div className="card-follow">
              <Link to={data?.nextEvent.link}>
                <Button mode="orange" withCircle>
                  Записаться
                </Button>
              </Link>
            </div>
          )}
        </div>
      </WithSkeleton>
      <div className="card-all">
        <a href={data?.nextEvent.allEventsLink} target="_blank">
          Все события
        </a>
      </div>
    </div>
  );
};

export default EventCard;
