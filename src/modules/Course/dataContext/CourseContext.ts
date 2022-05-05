import { httpService, ResponseResult } from "@core/service";
import { CourseDTO } from "./CourseDTO.dto";
class CourseContext {
  getCourseById(payload: {
    courseId: string;
  }): ResponseResult<CourseDTO.ICourse> {
    const data = httpService<CourseDTO.ICourse>(
      "GET",
      "getCourseById",
      `course_id=${payload.courseId}`
    );
    return data;
  }
}
export const courseContext = new CourseContext();
