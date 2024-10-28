import { LiaClipboardListSolid } from "react-icons/lia";
export default function GreenCheckmark() {
    return (
        <span className="me-1 position-relative">
            <LiaClipboardListSolid style={{ top: "2px" }}
                className="text-success me-1 position-absolute fs-3" />
            <LiaClipboardListSolid className="text-white me-3 fs-3" />
        </span>
    );
}
