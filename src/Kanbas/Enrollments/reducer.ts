import { createSlice } from "@reduxjs/toolkit";
const enrollmentSlice = createSlice({
    name: 'enrollment',
    initialState: {
        enrollments: [],
    },
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enrollInCourse: (state, { payload: enrollment }) => {
            state.enrollments = [...state.enrollments, enrollment] as any;
        },
        unenrollFromCourse: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e.user !== enrollment.user || e.course !== enrollment.course
            );
        },
    },
});
export const { setEnrollments, enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;