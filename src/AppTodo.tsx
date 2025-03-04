import "./App.css";
import {ChangeEventHandler, KeyboardEventHandler, useState} from "react";

interface ITodo {
  id : number,
  label : string,
  done : boolean
}
function AppTodo() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const handleAddTodo = () => {
    const id = todos.length;
    setTodos([...todos, {id : id, label : todoText, done : false}]);
    setTodoText('');
  }

  const handleDeleteTodo = (id : number) => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos([...newTodos]);
  }

  const handChangeTodoText : ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoText(e.target.value)
  }

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter'){
      handleAddTodo();
    }
  }

  const handleClick = (id: number, done : boolean) => {
    const newTodos = todos.map(item => {
      if(item.id === id){
        return {...item, done} ;
      }
      return item;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <h2>할일</h2>
      <input type="text" name="todoText" value={todoText} onChange={handChangeTodoText} onKeyUp={handleKeyUp}/>
      <button onClick={handleAddTodo}>추가</button>
      <ul>
        {
          todos.map((item, index) => (
            <li key={index}>
              <input type="checkbox" checked={item.done} onChange={ (e) => handleClick(item.id, e.target.checked)}/>
              <span>{item.done ? (<del>{item.label}</del>) : item.label}</span>
              <button onClick={ () => handleDeleteTodo(item.id) }>X</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default AppTodo;
