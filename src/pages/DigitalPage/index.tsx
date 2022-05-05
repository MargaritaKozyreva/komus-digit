import CourseContainer from "@src/containers/CourseContainer/CourseContainer";
import React from "react";
import { AcademyList } from "../MainPage/components/AcademyList";
import { CardList } from "../MainPage/components/CardList";
import HeaderBottom from '../MainPage/components/HeaderBottom';

const DigitalPage = () => {
  return (
    <div>
      <HeaderBottom />
      <CardList />
      <CourseContainer />
      <AcademyList />
    </div>
  );
};

export { DigitalPage };
