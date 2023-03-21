import React from "react";

type ItemProps = {
    itemName: string,
    amount: number
}

export default function Item({itemName, amount}: ItemProps) {
    return (
        <div className="item">
            <h3>{itemName}</h3>
            <h4>{amount}</h4>
        </div>
    )
}