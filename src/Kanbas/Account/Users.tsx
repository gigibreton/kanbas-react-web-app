import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import * as coursesClient from "../Courses/client";
import { FaPlus } from "react-icons/fa";
export default function Users() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${users.length + 1}@neu.edu`,
            section: "S101",
            role: "STUDENT",
        });
        setUsers([...users, user]);
    };
    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            if (cid) {
                const users = await client.findUsersByNameAndCourse(name, cid);
                setUsers(users);
            } else {
                const users = await client.findUsersByPartialName(name);
                setUsers(users);
            }
        } else {
            fetchUsers();
        }
    };
    const filterUsersByRole = async (role: string) => {
        setRole(role);
        if (role) {
            if (cid) {
                const users = await client.findUsersByRoleAndCourse(role, cid);
                setUsers(users);
            } else {
                const users = await client.findUsersByRole(role);
                setUsers(users);
            }
        } else {
            fetchUsers();
        }
    };
    const { uid } = useParams();
    const fetchUsers = async () => {
        if (cid) {
            const enrolledUsers = await coursesClient.findUsersForCourse(cid);
            setUsers(enrolledUsers);
        } else {
            const allUsers = await client.findAllUsers();
            setUsers(allUsers);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, [uid]);
    return (
        <div>
            <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
                <FaPlus className="me-2" />
                Users
            </button>
            <h3>Users</h3>
            <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                className="form-control float-start w-25 me-2 wd-filter-by-name" />
            <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
                className="form-select float-start w-25 wd-select-role" >
                <option value="">All Roles</option>    <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
            </select>
            <PeopleTable users={users} />
        </div>
    );
}
