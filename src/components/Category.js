import React from "react";
import {Task} from "./Task";
import '../styles/category.scss'
import '../data/data'
import {tasks} from "../data/data";
import {BucketIcon} from "./Icons";

export const Category = ({title, color}) => {
    return (
        <div className="category">
            <div className="header" style={{background: color}}>
                <div className='title'>
                    <p className='name'>{title}</p>
                    <p className='quantity'>{tasks.filter(task => task.status.title === title).length}</p>
                </div>

                <div className='buttons'>
                    <button type="button" className="button">
                        <BucketIcon/>
                    </button>
                </div>
            </div>

            <section className="tasks">
                {
                    tasks.filter(task => task.status.title === title).map(task => {
                        return (
                            <Task {...task} color={color} key={task.id} />
                        )
                    })
                }
            </section>
        </div>
    );
};