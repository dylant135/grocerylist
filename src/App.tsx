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
      />
    )
  })
  return (
    <div className="App">
      <AddItem setList={setList} />
      <div className='list'>
        {displayItems}
      </div>
    </div>
  );
}

export default App;
