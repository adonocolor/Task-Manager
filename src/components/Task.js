import React from "react";
import '../styles/task.scss'
import {CommentIcon, FileIcon} from "./Icons";

function parseDate(date) {
    const monthNames = ["Январа", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ];

    const minute = date.getMinutes()
    const hour = date.getHours()
    const day = date.getDay()
    const month = date.getMonth()

    if (date === null) {
        return 'Без срока'
    }

    return `${day} ${monthNames[month]}, ${hour}:${minute}`
}

export const Task = ({title, author, date, color}) => {
    return (
        <article className='task'>
            <div className='info'>
                <h2 className="title">{title}</h2>
                <p className='date' style={{background: color}}>{parseDate(date)}</p>
                <p className="author">{author.name}</p>
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
    );
};