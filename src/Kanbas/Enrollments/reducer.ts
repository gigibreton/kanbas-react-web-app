import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from "../Database";

const enrollmentSlice = createSlice({
    name: 'enrollment',
    initialState: {
        enrollments: enrollments,
    },
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        enrollInCourse: (state, action) => {
            const { userId, user, courseId } = action.payload;
            const existingEnrollment = state.enrollments.find(
                enrollment => enrollment._id === userId && enrollment.user === user && enrollment.course === courseId
            );
            if (!existingEnrollment) {
                state.enrollments.push({ _id: Date.now().toString(), user, course: courseId });
            }
        },
        unenrollFromCourse(state, action) {
            state.enrollments = state.enrollments.filter(
                (enrollment) => enrollment.user !== action.payload.userId || enrollment.course !== action.payload.courseId
            );
        },
    },
});

export const { setEnrollments, enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
