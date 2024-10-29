export default function DeleteAssignment({ assignmentId, deleteAssignment }: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}) {
    const onDelete = () => {
        deleteAssignment(assignmentId);
    };

    return (
        <div id={`wd-delete-assignment-${assignmentId}-dialog`} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Assignment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this assignment?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button onClick={onDelete} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}