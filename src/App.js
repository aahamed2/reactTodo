import './App.css';
import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [todos, setTodos] = useState([]) // state to manage the todo lists
  const [input, setInput] = useState('') //state to manage the input



//Adding the todo

  const handleTodo = (e) => {
    
    // setTodos([...todos, input]); //Regular adding function without DB
    
    e.preventDefault();
    db.collection('todos').add({
      todo: input, //this is the field name 'todo'
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //clears out the field after entering todo
  };


  
//DB Connection
  useEffect(() => {

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc=> ({id: doc.id, todo: doc.data().todo})))
      // console.log(snapshot.docs.map(doc=>doc.data()))
    })
  }, []);




  return (
    <>
      <div className="App">
        <form >
          <h1>Your Todo list 🤓📝 </h1>
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
