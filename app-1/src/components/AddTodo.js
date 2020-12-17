import React, { useState } from 'react'

const AddTodo = props => {
    const [newItem, setNewItem] = useState('')

    const handleAdd = (Item) => {
        props.addTodo(Item)
    }
    return (
        <di>
            <input value={newItem} placeholder='New Item' type='text' onChange={e => setNewItem(e.target.value)} />
            <button onClick={() => handleAdd(newItem)}>Add Item</button>
        </di>
    )
}
export default AddTodo