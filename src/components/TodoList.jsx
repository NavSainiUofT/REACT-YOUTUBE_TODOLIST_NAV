import React from 'react'
import TodoItem from './TodoItem'
import { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
export const contextName = createContext()
function TodoList() {
    
    const [todoItemList,setTodoItemList] = useState([])
    const [addTodoItem,setAddTodoItem] = useState({title:'',desc:'',completed:false})
    const addItemFunction = ()=>{
        if (addTodoItem.title !== ''){
        setTodoItemList([...todoItemList,{...addTodoItem,id:uuidv4()}])
        setAddTodoItem({title:'',desc:'',completed:false})}
    }
    return (
    <>
    <div className="container">
    <h1>Todo List</h1>
        <div className="row">
            <div className="col">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Title</span>
                    <input className="form-control" 
                        value={addTodoItem.title} 
                        type="text" 
                        onChange={(e)=>{setAddTodoItem({...addTodoItem,title:e.target.value})}}/>
                </div>
            </div>
            
               
        </div>
        <br />
        <div className="row">
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text">Description</span>
                    
                        <textarea className="form-control" 
                        aria-label="With textarea"
                        value={addTodoItem.desc} 
                        type="text" 
                        onChange={(e)=>{setAddTodoItem({...addTodoItem,desc:e.target.value})}}></textarea>
                    </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className='col-6'>
                <button className='btn btn-primary' onClick={addItemFunction}>Add Item</button>
            </div>
        </div>
        <br /><br />
    { 
    todoItemList.map(item =>{
        return <contextName.Provider key={item.id} value = {{todoItemList, setTodoItemList}}>
        <TodoItem title={item.title} 
        desc={item.desc}
        completed={item.completed}
        id={item.id}
       ></TodoItem> 
       </contextName.Provider> 
    }) 
    } 
    </div>
    </>

  )
}

export default TodoList