import {AddIcon} from "./Icons";
import React, {useState} from "react";
import {AddTask} from "./Forms/Task/AddTask";

export const AddTaskButton = () => {
    const [openModal, setModal] = useState(false)
    return (
        <div className='addButtonCtr'>
            <button className='addButton' onClick={() => setModal(true)}>
                <AddIcon />
            </button>
            <AddTask open={openModal} onClose={() => {
                setModal(false);
            }}/>
        </div>
    );
};