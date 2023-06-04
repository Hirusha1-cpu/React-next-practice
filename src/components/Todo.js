import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Todo(props) {
    const [modalIsOpen, setModalIsOpen]=useState(false);
function deleteHandler(){
    setModalIsOpen(true)
    
}

function closeModalHandler(){
    setModalIsOpen(false)
}


    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
            <h1>{props.text}</h1>

            <h2 className="text-xl font-semibold mb-4">Card Title</h2>
            <div className="actions border-gray-900">
                <button className="btn " onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen &&  <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}

            <Backdrop/>
        </div>


    )
}



export default Todo;