import {AddIcon} from "./Icons";
import React, {useState} from "react";
import {AddTaskForm} from "./Forms/Task/AddTaskForm";
import {createPortal} from "react-dom";

export const AddTaskModal = () => {
    const [openModal, setModal] = useState(false)
    return createPortal(
        <div className='addButtonCtr'>
            <button className='addButton' onClick={() => setModal(true)}>
                <AddIcon />
            </button>
            <AddTaskForm open={openModal} onClose={() => {
                setModal(false);
            }}/>
        </div>,
        document.getElementById('addTaskPortal')
    );
};