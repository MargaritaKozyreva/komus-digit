import { CourseCatalog } from "@src/components/CourseCatalog/CourseCatalog";
import { CourseCatalogRecommend } from "@src/components/CourseCatalogRecommend/CourseCatalogRecommend";
import useData from "@src/hooks/getData/getDataHook";
import { CourseDTO } from "@src/interfaces/course.interface";
import { WithSkeleton } from "@src/ui/WithSkeleton";
import React, { useEffect, useState } from "react";

const CourseContainer = () => {
  const [courses, setCourses] = useState<CourseDTO.ICourse[] | []>([]);
  const [recommendCourses, setRecommendCourses] = useState<
    CourseDTO.ICourse[] | []
  >([]);
  const { isLoading, isError, data } = useData<CourseDTO.ICourse[] | []>(
    "GET",
    "get_courses"
  );

  useEffect(() => {
    if (!isLoading && data && data?.length > 0) {
      setRecommendCourses(() => {
        const newArr = data.filter(
          course => course.firstCategory === "Рекомендованные курсы"
        );
        return newArr;
      });
      setCourses(() => data.filter(course => course.firstCategory === "Курсы"));
    }
  }, [isLoading]);

  return (
    <WithSkeleton
      isLoading={isLoading === true}
      isEmpty={data?.length === 0}
      error={isError}
    >
      <div className="courses">
        <div className="container">
          <div className="courses__inner">
            <div className="courses__head">
              <h2 className="courses__title">Курсы</h2>
            </div>
            {courses.length > 0 ? (
              <CourseCatalog courses={courses} />
            ) : (
              "Тут ещё ничего нет"
            )}
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="container">
          <div className="courses__inner">
            <div className="courses__head">
              <h2 className="courses__title">Рекомендованные курсы</h2>
            </div>
            {recommendCourses.length > 0 ? (
              <CourseCatalogRecommend recommendCourses={recommendCourses} />
            ) : (
              "Тут ещё ничего нет"
            )}
          </div>
        </div>
      </div>
    </WithSkeleton>
  );
};

export default CourseContainer;
