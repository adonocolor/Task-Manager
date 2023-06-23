import React from "react";
import {Category} from "./Category";
import '../styles/main.scss'
import {useDispatch, useSelector} from "react-redux";
import {DragDropContext} from "react-beautiful-dnd";
import {dragTask} from "../data/redux/features/categorySlice";

export const Board = () => {
    const categories = useSelector(store => store.categorySlice.allCategories)
    const dispatch  = useDispatch()
    const handleDragDrop = (results) => {
        dispatch(dragTask(results))
    }

    return (
        <>
            <DragDropContext onDragEnd = {handleDragDrop}>
                <div className="categories">
                    {
                        categories.map((status) => {
                            return (
                                <Category {...status}  key={status.id} />
                            )
                        })
                    }
                </div>
            </DragDropContext>
        </>
    );
};