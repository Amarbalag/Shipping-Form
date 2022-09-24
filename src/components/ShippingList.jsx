import React, { useState } from "react";
import ShippingForm from "./ShippingForm";

function ShippingList() {
  const [items, setItems] = useState([]);
  const addToList = (item) => {
    console.log(item);
    const itemscopy = [...items];
    itemscopy.push(item);
    setItems(itemscopy);
  };
  return (
    <div>
      <ShippingForm addToListCallback={(value) => addToList(value)} />
      <table>
        <thead>
          <th>Title</th>
          <th>Weight</th>
          <th>Color</th>
          <th>Adress</th>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.Weight}</td>
                <td style={{
                 backgroundColor:item.Color,
                }}>{item.Color}</td>
                <td>{item.Adress}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShippingList;
