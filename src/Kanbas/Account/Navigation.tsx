import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles.css";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation();
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const isActive = (path: string) => pathname.includes(path);

    return (
        <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/Kanbas/Account/${link}`}
                    className={`list-group-item ${isActive(link) ? "active" : "text-danger"} border-0`}
                >
                    {link}
                </Link>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <Link
                    to={`/Kanbas/Account/Users`}
                    className={`list-group-item ${isActive("Users") ? "active" : "text-danger"} border-0`}
                >
                    Users
                </Link>
            )}
        </div>
    );
}
