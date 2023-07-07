import React, {useState} from "react";
import {Task} from "./Task";
import '../styles/category.scss'
import '../data/data'
import {BucketIcon, PencilIcon} from "./Icons";
import {useDispatch} from "react-redux";
import {removeLastTask} from "../data/redux/features/categorySlice";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {UpdateCategoryForm} from "./Forms/Category/UpdateCategoryForm";

const dragOver = (isDraggingover) => ({
    background : isDraggingover ? "lightgrey" : "none",
    margin: isDraggingover ? "3px 5px 0 5px" : "0",
    padding: isDraggingover ? "1px" : "0",
    transition: "all .2s ease-in-out",
})

export const Category = ({id, title, color, tasks, drag}) => {
    const [open, isOpen] = useState(false);
    const dispatch = useDispatch()
    return (
        <div className="category">
            <div className="header" style={{background: color}}>
                <div className='title'>
                    <p className='name'>{title}</p>
                    <p className='quantity'>{tasks.length}</p>
                </div>

                <div className='buttons'>
                    <button
                        type="button"
                        className="button"
                        onClick={() => isOpen(true)}>
                        <PencilIcon/>
                    </button>
                    <button type="button" className="button" onClick={() => {dispatch(removeLastTask(id))}}>
                        <BucketIcon/>
                    </button>
                </div>
                <UpdateCategoryForm open={open} id={id} title={title} color={color} drag={drag} onClose={() => isOpen(false)}/>
            </div>
            <Droppable droppableId={id} type={"tasks"}>
                {
                    (provided, snapshot) => {
                        return (
                            <section {...provided.droppableProps}
                                     ref={provided.innerRef}
                                     className="tasks">
                                <div style={dragOver(snapshot.isDraggingOver)}></div>
                                {
                                    tasks.map((task, index) => {
                                        return (
                                            <Draggable draggableId={task.id} index={index} key={task.id} type="tasks">
                                                {
                                                    (provided, snapshot) => {
                                                        return (
                                                            <div {...provided.dragHandleProps} {...provided.draggableProps}  ref={provided.innerRef}>
                                                                <Task {...task} key={task.id} drag={snapshot.isDragging} color={color} categoryId={id} />
                                                                {provided.placeholder}
                                                            </div>
                                                            )
                                                    }
                                                }
                                            </Draggable>
                                        )
                                    })
                                }
                            </section>
                            )
                }}
            </Droppable>
        </div>
    );
};