import React, { useEffect, useState } from "react";

import { CourseDTO } from "@src/interfaces/course.interface";
import { coursesData } from "@src/mock-data/courses";
import { WithSkeleton } from "@src/ui/WithSkeleton";

import Button from "@src/ui/Button";
import { CourseList } from "../CourseList/CourseList";
import "../CourseCatalog/CourseCatalog.scss";

// const data: CourseDTO.ICourse[] = coursesData;
// const isLoading = false;
// const isError = false;

interface CourseCatalogProps {
  recommendCourses: CourseDTO.ICourse[] | [];
}

const CourseCatalogRecommend: React.FC<CourseCatalogProps> = props => {
  const { recommendCourses } = props;

  const [courses, setCourses] = useState<any>(recommendCourses);
  const [isAllCoursesShow, setCoursesShowMarker] = useState<boolean>(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setCourses(items => items.slice(0, 3));
    setCoursesShowMarker(false);
  }, [update]);

  return (
    <>
      <CourseList courses={courses} />
      <div style={{ width: "100%" }} className="btn-wrapper">
        {!isAllCoursesShow ? (
          <Button
            mode="lightBlue"
            withCircle
            onClick={function () {
              setCourses(items => {
                const uniqFailed = recommendCourses.filter(
                  course => !items.includes(course)
                );

                const newArr = [...items, ...uniqFailed.slice(0, 3)];

                if (newArr.length === recommendCourses.length) {
                  setCoursesShowMarker(true);
                }

                return newArr;
              });
            }}
          >
            Загрузить ещё
          </Button>
        ) : (
          <Button
            mode="orange"
            onClick={() => setUpdate(state => !state)}
            withCircle
          >
            Свернуть
          </Button>
        )}
      </div>
    </>
  );
};

export { CourseCatalogRecommend };
