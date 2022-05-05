import Glossary from "@components/Glossary";
import GlossaryWord from "@components/Glossary/GlossaryWord";
import NewsView from "@components/News";
import { TurboPersonModalContent } from "@components/TurboPersonModalContent/TurboPersonModalContent";
import { Agile } from "@src/components/Agile";
import { PersonRate } from "@src/components/PersonRate/PersonRate.module";
import { PersonReview } from "@src/components/PersonReview/PersonReview";
import { TurboInfoCard } from "@src/components/TurboInfoCard/TurboInfoCard";
import AssessmentTable from "@src/layout/AssessmentTable/AssessmentTable";
import React from "react";
import { IGlossWord } from "../../../../pages/MainPage/components/GlossSelection/types";

export enum ModalKey {
  Default = "DEFAULT",
  News = "NEWS",
  TurboPerson = "TURBO_PERSON",
  TurboTeamInfo = "TURBO_TEAM_INFO",
  PersonReview = "PERSON_REVIEW",
  Glossary = "GLOSSARY",
  GlossaryWord = "GLOSSARY_WORD",
  Agile = "AGILE",
  AssessmentTableView = "ASSESSMENT_TABLE_VIEW",
  PersonRate = "PERSON_RATE",
}

export type ModalKeyToPayload = {
  [ModalKey.News]: { readonly newsId: number | string | null };
  [ModalKey.TurboPerson]: { readonly personId: number | string | null };
  [ModalKey.TurboTeamInfo]: {
    readonly teamId: number | string | null;
    desc: any;
  };
  [ModalKey.PersonReview]: { readonly review: string };
  [ModalKey.Agile]: null;
  [ModalKey.Glossary]: null;
  [ModalKey.GlossaryWord]: { readonly word: IGlossWord };
  [ModalKey.Default]: any;
  [ModalKey.AssessmentTableView]: { readonly courseId: string };
  [ModalKey.PersonRate]: { readonly courseId: string };
};

export const MODAL_KEY_TO_COMPONENT_MAP: {
  [key in ModalKey]: React.FC<{ payload: ModalKeyToPayload[key] }>;
} = {
  [ModalKey.Default]: ({ payload }) => null,
  [ModalKey.TurboPerson]: payload => {
    return <TurboPersonModalContent {...payload} />;
  },
  [ModalKey.AssessmentTableView]: payload => {
    return <AssessmentTable {...payload} />;
  },
  [ModalKey.PersonRate]: (payload) => {
    return <PersonRate {...payload}/>;
  },
  [ModalKey.TurboTeamInfo]: payload => {
    return <TurboInfoCard {...payload} />;
  },
  [ModalKey.PersonReview]: payload => {
    return <PersonReview {...payload} />;
  },
  [ModalKey.Agile]: ({ payload }) => <Agile />,
  [ModalKey.Glossary]: () => {
    return <Glossary />;
  },
  [ModalKey.GlossaryWord]: payload => {
    return <GlossaryWord {...payload} />;
  },
  [ModalKey.News]: payload => {
    return <NewsView {...payload} />;
  },
};

// export function openModal<K extends ModalKey>(
// 	key: K,
// 	payload: ModalKeyToPayload[K]
// ): ModalKeyToPayload[K];

// const Component = MODAL_KEY_TO_COMPONENT_MAP['PROCESS'];

// const payload = openModal(ModalKey.Process, {
// 	eventId: 1
// });
