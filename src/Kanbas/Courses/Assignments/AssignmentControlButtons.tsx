import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <FaPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
