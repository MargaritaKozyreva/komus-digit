import React, { useEffect, useState } from "react";

import { CourseDTO } from "@src/interfaces/course.interface";
import { coursesData } from "@src/mock-data/courses";
import { WithSkeleton } from "@src/ui/WithSkeleton";
import { Tab, TabList, TabPanel, Tabs } from "../Tabs/Tabs";

import Button from "@src/ui/Button";
import "./CourseCatalog.scss";
import { CourseList } from "../CourseList/CourseList";
import useData from "@src/hooks/getData/getDataHook";

interface CourseCatalogProps {
  courses: CourseDTO.ICourse[] | [];
}

const CourseCatalog: React.FC<CourseCatalogProps> = props => {
  const { courses } = props;

  const [failCourses, setFailCourses] = useState<Array<CourseDTO.ICourse>>([]);
  const [activeCourses, setActiveCourses] = useState<Array<CourseDTO.ICourse>>(
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setFailCourses(() =>
      courses.filter(course => course.categories === "fail")
    );
    setActiveCourses(() =>
      courses.filter(course => course.categories === "active")
    );
  }, []);

  const [isAllActiveCoursesShow, setActiveCoursesShowMarker] =
    useState<boolean>(false);
  const [isAllFailCoursesShow, setFailCoursesShowMarker] =
    useState<boolean>(false);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setFailCourses(items => items.slice(0, 3));
    setActiveCourses(items => items.slice(0, 3));
    setFailCoursesShowMarker(
      () =>
        failCourses.length >=
        courses.filter(course => course.categories === "fail").length
    );
    setActiveCoursesShowMarker(
      () =>
        activeCourses.length >=
        courses.filter(course => course.categories === "active").length
    );
  }, [update]);

  return (
    <>
      <Tabs>
        <TabList>
          <Tab key={"tab_1"} onClick={() => setUpdate(state => !state)}>
            Просроченные курсы
          </Tab>
          <Tab key={"tab_2"} onClick={() => setUpdate(state => !state)}>
            Назначенные курсы
          </Tab>
        </TabList>

        <TabPanel>
          <CourseList courses={failCourses} />
          <div style={{ width: "100%" }} className="btn-wrapper">
            {courses && failCourses.length > 0 ? (
              !isAllFailCoursesShow && failCourses.length > 2 ? (
                <Button
                  mode="lightBlue"
                  withCircle
                  onClick={function (btn: any) {
                    setFailCourses(items => {
                      const failed = courses?.filter(
                        course => course.categories === "fail"
                      );

                      const uniqFailed = failed?.filter(
                        course => !items.includes(course)
                      );

                      const newArr = [...items, ...uniqFailed.slice(0, 3)];

                      if (newArr.length === failed.length) {
                        setFailCoursesShowMarker(true);
                      }

                      return newArr;
                    });
                  }}
                >
                  Загрузить ещё
                </Button>
              ) : failCourses.length > 3 ? (
                <Button
                  mode="orange"
                  onClick={() => setUpdate(state => !state)}
                  withCircle
                >
                  Свернуть
                </Button>
              ) : null
            ) : (
              ""
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <CourseList courses={activeCourses} />
          <div style={{ width: "100%" }} className="btn-wrapper">
            {courses && activeCourses.length > 0 ? (
              !isAllActiveCoursesShow && activeCourses.length > 2 ? (
                <Button
                  mode="lightBlue"
                  onClick={(btn: any) =>
                    setActiveCourses(items => {
                      const active = courses.filter(
                        course => course.categories === "active"
                      );

                      const uniqActive = active.filter(
                        course => !items.includes(course)
                      );

                      const newArr = [...items, ...uniqActive.slice(0, 3)];

                      if (newArr.length === active.length) {
                        setActiveCoursesShowMarker(true);
                      }

                      return newArr;
                    })
                  }
                  withCircle
                >
                  Загрузить ещё
                </Button>
              ) : activeCourses.length > 3 ? (
                <Button
                  mode="orange"
                  onClick={() => setUpdate(state => !state)}
                  withCircle
                >
                  Свернуть
                </Button>
              ) : null
            ) : (
              ""
            )}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export { CourseCatalog };
