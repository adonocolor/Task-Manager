import React, {useState} from "react";
import '../styles/task.scss'
import {CommentIcon, FileIcon} from "./Icons";
import {UpdateTaskForm} from "./Forms/UpdateTaskForm";
import {employees} from "../data/data";

export function parseDate(string) {
    if (string === undefined) {
        return 'Без срока'
    }

    const date = new Date(string)

    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ];

    let minute = date.getMinutes()
    if (minute < 10) {
        minute = '0' + minute
    }
    const hour = date.getHours()
    const day = date.getDate()
    const month = date.getMonth()
    return `${day} ${monthNames[month]}, ${hour}:${minute}`
}

function parseAuthors(authors) {

    if (authors === undefined || authors.length === 0) {
        return 'Без исполнителей'
    }

    const newAuthors = employees.filter(author => authors.includes(author.id)).map(item => item.name)

    if (newAuthors.length === 1) {
        return `${newAuthors[0]}`
    } else {
        return `${newAuthors[0]} и еще ${authors.length - 1}`
    }
}

function checkComment(comment) {
    if (comment === null || comment === undefined) {
        return 0
    } else
        return 1
}

function checkFile(file) {
    if (file === null || file === undefined) {
        return 0
    } else
        return 1
}

export const Task = ({id, title, authors, date, categoryId, color, comment, file}) => {
    const [updateTaskModal, setUpdateTask] = useState(false)

    return (
        <>
            <div className='taskContainer'>
                <article className='task' onClick={() => setUpdateTask(true)}>
                    <div className='info'>
                        <h2 className="title">{title}</h2>
                        <p className='date' style={{background: color}}>{parseDate(date)}</p>
                        <p className="author">{parseAuthors(authors)}</p>
                    </div>

                    <div className='buttons'>
                    <span className="comments">
                    <button type="button">
                        <CommentIcon />
                    </button>
                    <p>{checkComment(comment)}</p>
                </span>
                        <span className="files">
                    <button type="button">
                        <FileIcon />
                    </button>
                    <p>{checkFile(file)}</p>
                </span>
                    </div>
                </article>
                <UpdateTaskForm id={id} categoryId={categoryId} authors={authors} date={date} title={title} open={updateTaskModal} onClose={() => setUpdateTask(false)}/>
            </div>
        </>
    );
};