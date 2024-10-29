import { Navigate, Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }: { children?: any }) {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    if (!currentUser) {
        return <Navigate to="/Kanbas/Account/Signin" />;
    }

    if (cid) {
        const isEnrolledInCourse = enrollments.some(
            (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === cid
        );
        if (!isEnrolledInCourse) {
            return <Navigate to="/Kanbas/Dashboard" />;
        }
    }

    return children || <Outlet />;
}
