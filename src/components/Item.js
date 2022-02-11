import React, {useState} from "react";

function Item({ name, category }) {
  let [added, clicked] = useState(false)

  function handleClick(){
    clicked((added)= !added)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{added ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}
export default Item;
