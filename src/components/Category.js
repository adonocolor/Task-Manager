import React from "react";
import {Task} from "./Task";
import '../styles/category.scss'
import '../data/data'
import {tasks} from "../data/data";
import {BucketIcon} from "./Icons";
import {useDispatch} from "react-redux";
import {removeLastTask} from "../redux/features/categorySlice";

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

            <section className="tasks">
                {
                    tasks.map(task => {
                        return (
                            <Task {...task} color={color} categoryId={id} key={task.id} />
                        )
                    })
                }
            </section>
        </div>
    );
};