import React from "react";
import {taskStatus} from "../data/data";
import {Category} from "./Category";

export const Board = () => {
    return (
        <>
            <div className="categories">
                {
                    taskStatus.map((status) => {
                        return (
                            <Category {...status} key={status.id} />
                        )
                    })
                }
            </div>
        </>
    );
};