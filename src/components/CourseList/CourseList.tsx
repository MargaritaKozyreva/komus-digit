import React from "react";
import { CourseDTO } from "@src/interfaces/course.interface";
import "./CourseList.scss";
import { Link } from "react-router-dom";

interface CourseListProps {
  courses: CourseDTO.ICourse[];
}

const CourseList: React.FC<CourseListProps> = props => {
  const { courses } = props;
  return (
    <div className="courses__list">
      {courses.map(course => (
        <div className="courses__item" key={course.id}>
          <div className="courses__item-progress">
            <div className="courses__item-progressText">
              Пройден на {course.progress}%
            </div>
            <div className="courses__item-progressBar">
              <div
                className="progress-bar-length"
                style={{ width: `${course.progress}%` }}
                data-progress={course.progress}
              ></div>
            </div>
          </div>
          <div className="courses__item-inner">
            <div className="courses__item-image">
              <svg
                width="320"
                height="335"
                viewBox="0 0 320 335"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <mask
                  id="mask2"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="-13"
                  y="-26"
                  width="449"
                  height="361"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M205.562 -48.2307C268.828 -51.0237 338.175 -84.9986 386.078 -43.6211C440.253 3.17332 464.114 86.4095 439.003 153.411C415.91 215.025 337.438 222.283 276.799 247.955C222.234 271.055 168.889 312.182 113.462 291.23C54.1008 268.792 19.6114 207.612 6.15145 145.651C-7.11782 84.5689 -0.836784 15.0755 44.0014 -28.5196C84.9053 -68.2896 148.537 -45.7133 205.562 -48.2307Z"
                    fill="#C4C4C4"
                  />
                </mask>
                <g mask="url(#mask2)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M205.562 -48.2307C268.828 -51.0237 338.175 -84.9986 386.078 -43.6211C440.253 3.17332 464.114 86.4095 439.003 153.411C415.91 215.025 337.438 222.283 276.799 247.955C222.234 271.055 168.889 312.182 113.462 291.23C54.1008 268.792 19.6114 207.612 6.15145 145.651C-7.11782 84.5689 -0.836784 15.0755 44.0014 -28.5196C84.9053 -68.2896 148.537 -45.7133 205.562 -48.2307Z"
                    fill={`url(#pattern1${course.id})`}
                  />
                </g>
                <defs>
                  <pattern
                    id={`pattern1${course.id}`}
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref={`#course-card-${course.id}`}
                      transform="translate(-0.103157) scale(0.000603157 0.000750188)"
                    />
                  </pattern>

                  <image
                    id={`course-card-${course.id}`}
                    width="2000"
                    height="1333"
                    xlinkHref={`${process.env["API"]}${course.img}`}
                    onError={(event: any) => {
                      event.target.src=`${process.env["API"]}/komus_num/app/images/course-card-default2.svg`
                      event.onerror = null;
                    }}
                  />
                </defs>
              </svg>
            </div>
            <img
              className="courses__item-image--mobile"
              src={`${process.env["API"]}/komus_num/app/images/mobile-courses.png`}
              alt=""
              onError={(event: any) => {
                event.target.src=`${process.env["API"]}/komus_num/app/images/mobile-courses.png`
                event.onerror = null;
              }}
            />
            <div className="courses__item-box">
              <p className="courses__item-personal">{course.tags}</p>
              <h6 className="courses__item-title">{course.title}</h6>
            </div>
          </div>
          <div className="courses__item-info">
            <p className="courses__item-descr">{course.description}</p>
            <div className="courses__item-footer">
              <Link
                to={`/komus_digital/course/${course.id}`}
                className="courses__item-link"
              >
                Смотреть курс...
              </Link>
              <div className="courses__item-counter">
                <div className="courses__item-count likes">
                  <img
                    src={`${process.env["API"]}/komus_num/app/images/icons/likes.svg`}
                    alt=""
                  />
                  <span>{course.likes}</span>
                </div>
                <div className="courses__item-count comments">
                  <img
                    src={`${process.env["API"]}/komus_num/app/images/icons/comments.svg`}
                    alt=""
                  />
                  <span>{course.likes}</span>
                </div>
                <div className="courses__item-count time">
                  <img
                    src={`${process.env["API"]}/komus_num/app/images/icons/time.svg`}
                    alt=""
                  />
                  <span>{course.estimate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CourseList };
