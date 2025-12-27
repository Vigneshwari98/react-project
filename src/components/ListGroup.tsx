function ListGroup() {
    const items = ["Paris", "London", "India", "New York", "Switzerland"];

    return (
        <ul className="list-group">
            {items.map((item) => (
                <li key={item} className="list-group-item">
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default ListGroup;
