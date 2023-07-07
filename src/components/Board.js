import React from "react";
import {Category} from "./Category";
import '../styles/main.scss'
import {useDispatch, useSelector} from "react-redux";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {dragCategory, dragTask} from "../data/redux/features/categorySlice";

export const Board = () => {
    const categories = useSelector(store => store.categorySlice.allCategories)
    const dispatch  = useDispatch()
    const handleDragDrop = (results) => {
        if (results.type === 'tasks') {
            dispatch(dragTask(results))
        }
        if (results.type === 'categories') {
            dispatch(dragCategory(results))
        }
    }

    return (
        <>
            <DragDropContext onDragEnd = {handleDragDrop}>
                <Droppable droppableId='board' type='categories' direction='horizontal'>
                    {
                    (provided, snapshot) => {
                        return (
                            <div {...provided.droppableProps}
                                 ref={provided.innerRef}
                                 className='categories'>
                                {
                                    categories.map((status, index) => {
                                        return (
                                            <Draggable draggableId={status.id} index={index} key={status.id} type='categories'>
                                                {
                                                    (provided, snapshot) => {
                                                        return (
                                                            <div {...provided.dragHandleProps}
                                                                {...provided.draggableProps}
                                                                ref={provided.innerRef}>
                                                                <Category {...status}  key={status.id} />
                                                                {provided.placeholder}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </Draggable>
                                        )
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        )
                    }
                }
                </Droppable>
            </DragDropContext>
        </>
    );
};