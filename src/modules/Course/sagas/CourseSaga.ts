import { AxiosResponse } from "axios";
import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { courseContext } from "../dataContext/CourseContext";
import { CourseDTO } from "../dataContext/CourseDTO.dto";
import { courseActions } from "../redux/CourseSlices";

export type SagaDataRequest<D> = Generator<
  StrictEffect,
  void,
  AxiosResponse<D>
>;

function* getCourseById(
  action: any
): SagaDataRequest<{ data: CourseDTO.ICourse[] }> {
  try {
    const { data } = yield call(() =>
      courseContext.getCourseById({ courseId: action.payload.courseId })
    );
    yield put(courseActions.getCourseByIdSuccess(data));
  } catch (error) {
    yield put(courseActions.getCourseByIdError(error));
  }
}

export function* courseSaga() {
  yield takeEvery(courseActions.getCourseByIdPending, getCourseById);
}
