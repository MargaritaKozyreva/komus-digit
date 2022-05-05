import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WithSkeleton } from "@ui/WithSkeleton";
import { courseActions, CourseState } from "../redux/CourseSlices";
import CourseCard from "../components/CourseCard";
import { useParams } from "react-router";
import CourseReview from "../components/CourseReview/CourseReview";
import "./styles.scss";
import { UserState } from "@src/modules/User/redux/UserSlices";
import { getUser } from "@src/modules/User/dataContext/UserContext";

export const CourseContainer: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const courseResponse = useSelector(
    (state: { courses: CourseState }) => state.courses.courses
  );

  const user = useSelector((state: { user: UserState }) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(courseActions.getCourseByIdPending({ courseId: id }));
  }, [dispatch]);

  return (
    <WithSkeleton
      isLoading={courseResponse.isLoading === true}
      isEmpty={
        courseResponse.entity === undefined ||
        Object.keys(courseResponse.entity).length === 0
      }
      emptyTextData="Данных по курсу нет"
    >
      {courseResponse.entity !== undefined &&
        user.entity &&
        Object.keys(courseResponse.entity).length > 0 && (
          <CourseCard course={courseResponse.entity} user={user.entity} />
        )}
      <div style={{ marginBottom: "70px" }}></div>
      {courseResponse.entity !== undefined &&
        Object.keys(courseResponse.entity).length > 0 && (
          <CourseReview reviews={courseResponse.entity?.info.reviews} />
        )}
    </WithSkeleton>
  );
};
