import React from 'react'
import "./App.css"
import AddItem from './component/AddItem';

import AppName from './component/AppName';
import CurrentTime from './component/CurrentTime';
import TodoItems from './component/TodoItems';
//import Fragement from './component/Fragement';
import { useState } from 'react'
import Calculator from './component2/Calculator';



function App() {
  // <Fragement title="Healthy Food" />
  const intialTodoItems = [{
    name: "hj",
    date: "Aug 26 2024"
  },
  {
    name: 'excercise',
    date: "Aug 26 2024"
  },
  {
    name: 'Js lecture',
    date: "Aug 26 2024"
  }];
  let [todoItems, setTodoItems] = useState(intialTodoItems);



  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`les bfb${itemName}${itemDueDate}`)
  };
  return (
    <>

      <AppName title="TODO App" />
      <AddItem onNewItem={handleNewItem} />

      <TodoItems todoItems={todoItems}></TodoItems>

      <CurrentTime></CurrentTime>
      <div className='container p-5'>
        <Calculator />
      </div>
    </>
  )
}

export default App


