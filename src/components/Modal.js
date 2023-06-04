import React from 'react'


const Modal = (props) => {
    function cancelHandler(){
        props.onCancel()
    
    }
    
    function confirmHandler(){
        props.onConfirm()
    
    }
    return (
        <div className='modal'>

        <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg font-semibold mb-4">Are you sure?</p>
            <div className="flex justify-end">
                <button onClick={cancelHandler} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                    Cancel
                </button>
                <button onClick={confirmHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Confirm
                </button>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Modal