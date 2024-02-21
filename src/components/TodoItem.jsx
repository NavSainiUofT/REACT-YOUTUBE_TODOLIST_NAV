import React, { useContext, useState } from 'react'
import { contextName } from './TodoList'
//title:string, desc:string, completed:boolean
//{title,desc,completed}
function TodoItem(props) {
  const todoItems = useContext(contextName)
  const [editMode,setEditMode] = useState(false)
  const [editText,setEditText] = useState('edit')
  const [editTodoItem,setEditTodoItem] = useState({...props})
  const [completed,setCompleted] = useState(props.completed)
  const handleDelete = ()=>{
    todoItems.setTodoItemList(todoItems.todoItemList.filter(item=>{
      return item.id !== props.id
    }))
  }
  const handleCheckbox = (e)=>{
    if(e.target.checked){
      setCompleted(!completed)
    }else{
      setCompleted(!completed)
    }
  }
  const handleEdit = ()=>{
    if(editMode){
      todoItems.setTodoItemList(todoItems.todoItemList.map(item=>{
        return item.id === props.id ? editTodoItem : item
      }))
    }
    setEditMode(!editMode)
    setEditText(editText==='edit'?'done':'edit')
  }

  const editMarkdown = ()=>{
    if (editMode){
      return <>
       <label>Title</label>
        <input
        value={editTodoItem.title} 
        onChange={(e)=>{setEditTodoItem({...editTodoItem,title:e.target.value})}}
        type="text" />
        <label>Description</label>
        <input
        value={editTodoItem.desc} 
        onChange={(e)=>{setEditTodoItem({...editTodoItem,desc:e.target.value})}}
        type="text" />
      </>

    }else{
      return<></>
    }
  }

  return (
    
    <>
    

    {editMarkdown()}








    <div class="card">
    <div className={completed ? 'text-strikethrough card-header' : 'card-header'}>
    {props?.title ?? ''}
  </div>
  <div className="card-body">
    <h5 className={completed ? 'text-strikethrough card-title' : 'card-title'}>{props?.title ?? ''}</h5>
    <p className={completed ? 'text-strikethrough card-text' : 'card-text'}>{props?.desc ?? ''}</p>
    <input className="form-check-input"
    type='checkbox'
    onChange={handleCheckbox}
    ></input>
    <button className='btn btn-outline-danger' onClick={handleDelete}>Delete</button>
    <button className='btn btn-outline-primary' onClick={handleEdit}>{editText}</button>
  </div>
</div>















    </>
  )
}

export default TodoItem