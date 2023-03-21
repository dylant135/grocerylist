import React from "react";

type ItemProps = {
    itemName: string,
    amount: number,
    deleteItem: Function
}

export default function Item({itemName, amount, deleteItem}: ItemProps) {
    return (
        <div className="item">
            <h3>{itemName}</h3>
            <h4>{amount}</h4>
            <button type="button" className="deletebtn" onClick={() => deleteItem(itemName)}>Delete</button>
        </div>
    )
}