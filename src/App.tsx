import BootstrapButton from "./components/BootstrapButton";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert.";
import { useState } from "react";

function App() {
    const cities = ["Paris", "London", "India", "New York", "Switzerland"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const handleClick = () => {
        setShowAlert(true);
    };

    const handleClose = () => {
        setShowAlert(false);
    };

    const [showAlert, setShowAlert] = useState(false);

    return (
        <div>
            <ListGroup
                items={cities}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
            <BootstrapButton
                name="My Button"
                color="secondary"
                handleClick={handleClick}
            />
            {showAlert && (
                <Alert color="primary" handleClick={handleClose}>
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                </Alert>
            )}
            <Alert
                color="secondary"
                handleClick={() => console.log("clicking new alert")}
            >
                New Alert
            </Alert>
        </div>
    );
}
export default App;
