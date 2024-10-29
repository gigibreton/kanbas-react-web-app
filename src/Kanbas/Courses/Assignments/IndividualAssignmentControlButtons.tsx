import { IoEllipsisVertical, } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import DeleteAssignment from "./DeleteAssignment";
export default function LessonControlButtons({ assignmentId, deleteAssignment }: {
    assignmentId: string; deleteAssignment: (assignmentId: string) => void
}) {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaTrash className="text-danger mx-2 mb-1" data-bs-toggle="modal" data-bs-target={`#wd-delete-assignment-${assignmentId}-dialog`} />
            <IoEllipsisVertical className="fs-4" />
            <DeleteAssignment assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
        </div>
    );
}
