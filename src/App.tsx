import ListGroup from "./components/ListGroup";

function App() {
    const cities = ["Paris", "London", "India", "New York", "Switzerland"];
    return (
        <div>
            <ListGroup items={cities} heading="Cities" />
        </div>
    );
}
export default App;
