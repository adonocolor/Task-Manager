import React, {useState} from "react";
import '../styles/task.scss'
import {CommentIcon, FileIcon} from "./Icons";
import {UpdateTaskForm} from "./Forms/Task/UpdateTaskForm";

function parseDate(date) {
    if (date === null) {
        return 'Без срока'
    }

    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ];

    const minute = date.getMinutes()
    const hour = date.getHours()
    const day = date.getDay()
    const month = date.getMonth()


    return `${day} ${monthNames[month]}, ${hour}:${minute}`
}

function parseAuthors(author) {
    if (author.length === 1) {
        return `${author[0].name}`
    } else {
        return `${author[0].name} и еще ${author.length - 1}`
    }
}


export const Task = ({title, author, date, color}) => {
    const [updateTaskModal, setUpdateTask] = useState(false)
    return (
        <div className='taskContainer'>
            <article className='task' onClick={() => setUpdateTask(true)}>
                <div className='info'>
                    <h2 className="title">{title}</h2>
                    <p className='date' style={{background: color}}>{parseDate(date)}</p>
                    <p className="author">{parseAuthors(author)}</p>
                </div>

                <div className='buttons'>
                <span className="comments">
                <button type="button">
                    <CommentIcon />
                </button>
                <p>0</p>
            </span>
                    <span className="files">
                <button type="button">
                    <FileIcon />
                </button>
                <p>0</p>
            </span>
                </div>
            </article>
            <UpdateTaskForm title={title} open={updateTaskModal} onClose={() => setUpdateTask(false)}/>
        </div>
    );
};