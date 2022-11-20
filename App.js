import './App.css';
import TaskBar from './Task/TaskBar'
import React, {useEffect, useState } from 'react';
import useHttp from './Hook/use-httprequest'

let n = 0
function App() {

  let Obj = {
    id: 1,
    content: "Loading....."
  }

  const [arrItem, SetItem] = useState([Obj])
  const httpCall = useHttp()

  const arr = []
  const TaskItemData =async () => {
    try {
   let   response = await httpCall()

      if (!response.ok) {
        throw new Error('Some thing went wrong ⚠️')
      }
      let ItemsData = await response.json()
      for (const Data in ItemsData) {
        arr.push({ id: Data, content: ItemsData[Data].content })
      }
 console.log("hello")
    } catch (error) {
      if (n === 0) {
        Obj.content = error.message
        SetItem([Obj])
        n++
      }
    }
 
    SetItem(arr)
  }

useEffect(()=>{
  TaskItemData()
},[])

  return (
    <div className="App">
      <TaskBar arrItem={arrItem} onClick={TaskItemData}></TaskBar>
    </div>
  );
}

export default App;
