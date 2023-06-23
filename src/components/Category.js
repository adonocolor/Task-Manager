// noinspection BadExpressionStatementJS

import React from "react";
import {Task} from "./Task";
import '../styles/category.scss'
import '../data/data'
import {BucketIcon} from "./Icons";
import {useDispatch} from "react-redux";
import {removeLastTask} from "../data/redux/features/categorySlice";
import {Draggable, Droppable} from "react-beautiful-dnd";

export const Category = ({id, title, color, tasks}) => {
    const dispatch = useDispatch()
    return (
        <div className="category">
            <div className="header" style={{background: color}}>
                <div className='title'>
                    <p className='name'>{title}</p>
                    <p className='quantity'>{tasks.length}</p>
                </div>

                <div className='buttons'>
                    <button type="button" className="button" onClick={() => {dispatch(removeLastTask(id))}}>
                        <BucketIcon/>
                    </button>
                </div>
            </div>
            <Droppable droppableId={id} type={"tasks"}>
                {
                    (provided) => {
                        return (
                            <section {...provided.droppableProps}
                                     ref={provided.innerRef}
                                     className="tasks">
                                {
                                    tasks.map((task, index) => {
                                        return (
                                            <Draggable draggableId={task.id} index={index} key={task.id} type="tasks">
                                                {
                                                    (provided) => {
                                                        return (
                                                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                                <Task {...task} key={task.id} color={color} categoryId={id} />
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