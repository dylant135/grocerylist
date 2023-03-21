import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Item from './components/Item';

function App() {
  const [list, setList] = useState<{itemName: string, amount: number}[]>([])
  const displayItems = list.map(item => {
    return (
      <Item
        itemName={item.itemName}
        amount={item.amount}
        deleteItem={deleteItem}
      />
    )
  })

  function deleteItem(itemName : string) {
    const newList = list.filter(item => item.itemName !== itemName)
    setList(newList)
  }

  return (
    <div className="App">
      <AddItem setList={setList} />
      <div className='list'>
        <div className='item'>
          <h3>Item Name: </h3>
          <h4>Amount: </h4>
          <div></div>
        </div>
        {displayItems}
      </div>
    </div>
  );
}

export default App;
