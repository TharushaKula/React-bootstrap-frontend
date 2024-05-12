import { useState } from "react";

function ListGroup() {
  let items = ["Colombo", "Rathmalana", "Kotuwa", "Galle"];

  //Hook
  const [selectedIndex, setSelectedindex] = useState(-1);



  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items are found</p>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() =>{setSelectedindex(index)} }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
