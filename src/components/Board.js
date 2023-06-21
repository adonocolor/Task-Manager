import React from "react";
import {taskStatus} from "../data/data";
import {Category} from "./Category";
import '../styles/main.scss'
import {useSelector} from "react-redux";

export const Board = () => {
    const categories = useSelector(store => store.categorySlice.allCategories)
    return (
        <>
            <div className="categories">
                {
                    categories.map((status) => {
                        return (
                            <Category {...status}  key={status.id} />
                        )
                    })
                }
            </div>
        </>
    );
};