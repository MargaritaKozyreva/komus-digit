import CourseContainer from "@src/containers/CourseContainer/CourseContainer";
import React from "react";
import { AcademyList } from "../MainPage/components/AcademyList";
import { CardList } from "../MainPage/components/CardList";
import HeaderBottom from '../MainPage/components/HeaderBottom';
import { TurboCardList } from "./components/TurboCardList/TurboCardList";
import { TurboCategorySelection } from "./components/TurboCategorySelection";

const TurboPage = () => {
  return (
    <div>
      <HeaderBottom />
      <CardList />
      <TurboCardList />
      <CourseContainer />
      <AcademyList />
    </div>
  );
};

export { TurboPage };
