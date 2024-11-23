// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// export default function AccountNavigation() {
//     const { currentUser } = useSelector((state: any) => state.accountReducer);
//     const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//     return (
//         <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//             {links.map((link) => (
//                 <Link
//                     key={link}
//                     to={`/Kanbas/Account/${link}`}
//                     className={`list-group-item ${link === "Signin" ? "active" : "text-danger"} border border-0`}
//                 >{link}</Link>))}
//             {currentUser && currentUser.role === "ADMIN" && (
//                 <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}
//             {/* <Link to={`/Kanbas/Account/Signin`} className="list-group-item active border border-0" > Signin  </Link> <br />
//             <Link to={`/Kanbas/Account/Signup`} className="list-group-item text-danger border border-0" > Signup  </Link> <br />
//             <Link to={`/Kanbas/Account/Profile`} className="list-group-item text-danger border border-0" > Profile </Link> <br /> */}
//         </div>
//     );
// }

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { pathname } = useLocation(); // Extract `pathname` from `useLocation`
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const active = (path: string) => (pathname.includes(path) ? "active" : "");

    return (
        <div id="wd-account-navigation" className="list-group">
            {links.map((link) => (
                <Link
                    key={link}
                    to={`/Kanbas/Account/${link}`}
                    className={`list-group-item ${active(link)}`}
                >
                    {link}
                </Link>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <Link
                    to={`/Kanbas/Account/Users`}
                    className={`list-group-item ${active("Users")}`}
                >
                    Users
                </Link>
            )}
        </div>
    );
}
