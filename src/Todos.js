import React, { useState } from 'react';
import db from './firebase'
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: "none"
    }
  }));


function Todos({ list }) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [inputs, setinputs] = useState('');


    //open modal
    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    //close modal
    const handleClose = () => {
        setOpen(false);
    };



    //delete function
    const deleteTodo = (e) => {
        e.preventDefault();
        db.collection('todos').doc(list.id).delete();
    };

//updaate the todo
    const updateTodo=()=>{
        db.collection('todos').doc(list.id).set({
            todo: inputs
        },{merge: true});

        setOpen(false);
    };




    return (


        <>

            <Modal

                open={open}
                onClose={e=>setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Update your details</h1>
                    <input placeholder={list.todo} value={inputs} onChange={e => setinputs(e.target.value)} />
                    <button className="update-btn" onClick={updateTodo}>Update</button>
                </div>
            </Modal>

            <div className="todo-main">
                <li >{list.todo}</li>
                <button onClick={handleOpen}> Update</button>
                <button onClick={deleteTodo}>❌</button>
            </div>


        </>
    )
}

export default Todos
