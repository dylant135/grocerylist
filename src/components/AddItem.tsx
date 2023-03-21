import React, { useState } from "react";

type FormProps = {
    setList: React.Dispatch<React.SetStateAction<{
        itemName: string;
        amount: number;
    }[]>>
}

export default function AddItem({setList}: FormProps) {
    const [formData, setFormData] = useState({
        itemName: '',
        amount: 1
    })

    function handleChange(event : React.ChangeEvent<HTMLInputElement>) {
        const e = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [e.name]: e.value
            }
        })
    }

    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setList(prevState => {
            return [
                ...prevState,
                formData
            ]
        })
        setFormData({
            itemName: '',
            amount: 0
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={formData.itemName}
                name='itemName'
                onChange={handleChange}
            />
            <input
                type='number'
                value={formData.amount}
                name='amount'
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}