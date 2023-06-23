import React from "react";
import {Category} from "./Category";
import '../styles/main.scss'
import {useSelector} from "react-redux";
import {DragDropContext} from "react-beautiful-dnd";

export const Board = () => {
    const categories = useSelector(store => store.categorySlice.allCategories)
    return (
        <>
            <DragDropContext onDragEnd = {
                () => {
                    console.log('event occured')
                }
            }>
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