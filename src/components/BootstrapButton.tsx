interface ButtonProps {
    name: string;
    color?:
        | "primary"
        | "secondary"
        | "danger"
        | "warning"
        | "info"
        | "link"
        | "dark"
        | "light"
        | "success";
    handleClick: () => void;
}

function BootstrapButton({
    name,
    color = "primary",
    handleClick,
}: ButtonProps) {
    return (
        <>
            <button
                type="button"
                className={"btn btn-" + color}
                onClick={handleClick}
            >
                {name}
            </button>
        </>
    );
}
export default BootstrapButton;
