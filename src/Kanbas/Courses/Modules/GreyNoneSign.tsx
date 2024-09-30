import { IoBanOutline } from "react-icons/io5";
export default function GreyNoneSign() {
    return (
        <span className="me-1 position-relative">
            <IoBanOutline style={{ top: "2px" }}
                className="me-1 position-absolute fs-5" />
            <IoBanOutline className="text-grey me-1 fs-5" />
        </span>
    );
}
