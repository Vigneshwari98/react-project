import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    color:
        | "primary"
        | "secondary"
        | "danger"
        | "warning"
        | "info"
        | "dark"
        | "light"
        | "success";
    handleClick: () => void;
}

const Alert = ({ children, color, handleClick }: AlertProps) => {
    return (
        <div
            className={"alert alert-" + color + "alert-dismissible fade show"}
            role="alert"
        >
            {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleClick}
            ></button>
        </div>
    );
};

export default Alert;
