import React, { useRef, } from 'react'
import TaskItem from './TaskItem/TaskItem'
import useHttp from '../Hook/use-httprequest'
import './TaskBar.css'

function TaskBar(props) {

  const InputText = useRef('')

  const httpcall = useHttp()


  const taskDataSender = () => {
    if (!InputText.current.value.trim()) {
      return
    }

    httpcall({
      method: 'POST',
      body: JSON.stringify({
        content: InputText.current.value
      })
    })

    InputText.current.value = ''

  }

  const SendDataFirst = ()=>{
    taskDataSender() 
  }

  const GetDataSecond = () => {
     SendDataFirst()
      setTimeout(()=>{
        props.onClick()
      },1500)
  }

  return <>
    <div className='inputField'>
      <input type="text" ref={InputText} />
      <button onClick={GetDataSecond}>Create Task</button>
    </div>
    <div className='itemContainer'>
      {props.arrItem.map((el) => <TaskItem text={el.content} key={el.id} />)}
    </div>
  </>
}

export default TaskBar