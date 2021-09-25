import './App.css';
import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import db from './src/lol';


function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('')
  };



  useEffect(() => {


    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc=>doc.data().todo));
      // console.log(snapshot.docs.map(doc=>doc.data()))

    })
  }, []);




  return (
    <>
      <div className="App">
        <form >
          <h1>To Do List from React! </h1>
          <input value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={handleTodo}>Submit</button>

          {
            todos.map(todo =>
              <Todos list={todo} />
            )
          }

        </form>

      </div>

    </>
  );
}

export default App;
