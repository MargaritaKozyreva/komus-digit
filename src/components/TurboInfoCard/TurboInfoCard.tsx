import React, { PropsWithChildren } from "react";
import "./TurboInfoCard.scss";
import cn from "classnames";
import { DetailedHTMLProps } from "react";
import { HTMLAttributes } from "react";

interface TurboInfoCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  teamId?: number | string | null;
  desc?: string;
}

const TurboInfoCard: React.FC<TurboInfoCardProps> =
  props => {
    const { className, id, desc, ...attr } = props;
    return desc ? <div dangerouslySetInnerHTML={{ __html: desc}}></div> : <div>Описание отсутствует</div>;
  };

export { TurboInfoCard };
