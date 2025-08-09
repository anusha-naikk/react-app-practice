import { type MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div>
      <h1>{heading}</h1>
      {items.length == 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
