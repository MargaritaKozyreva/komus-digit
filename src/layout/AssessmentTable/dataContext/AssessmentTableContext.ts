import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "@src/core/service";
import { CollaboratorDTO } from '@src/interfaces/collaborators.interface';

export const getCollsForAssessmentCourses = createAsyncThunk(
  "courses/getCollsForAssessmentCourses",
  async (payload: { courseId: string | number | undefined }) => {
    const data = await httpService<CollaboratorDTO.IPerson[]>(
      "GET",
      "get_colls_for_assessment_course",
      `course_id=${payload.courseId}`
    );
    return data;
  }
);
