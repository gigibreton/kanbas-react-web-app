import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";
import DeleteAssignment from "./DeleteAssignment";
import { Modal, Button } from "react-bootstrap";

interface AssignmentControlButtonsProps {
    assignmentId: string;
    deleteAssignment: (id: string) => void;
}

export default function AssignmentControlButtons({ assignmentId, deleteAssignment }: AssignmentControlButtonsProps) {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        deleteAssignment(assignmentId);
        setShowModal(false);
    };

    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaTrash onClick={handleDeleteClick} className="text-danger mx-2 mb-1" />
            <IoEllipsisVertical className="fs-4" />

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this assignment?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
