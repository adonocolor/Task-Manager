import React from "react";
import {employees} from "../../../data/data";
import '../../../styles/addTask.scss'
import {CrossIcon} from "../../Icons";

export const AddTask = ({open, onClose}) => {
    if (!open) return null
    else
    return (
        <div className='addTask'>
            <div className='header'>
                <p>Новая задача</p>
                <button className='closeFormButton' onClick={onClose}>
                    <CrossIcon />
                </button>
            </div>
            <form className='form'>
                <fieldset>
                    <label>Название</label>
                    <input type='text' placeholder='Название задачи' className='title' />
                </fieldset>
                <fieldset>
                    <label>Исполнители</label>
                    <select placeholder='Выберите пользователей' className='author'>
                        <option hidden disabled selected value>Выберите пользователей</option>
                        {
                            employees.map((employee) => {
                                return <option value={employee.name}>{employee.name}</option>
                            })
                        }
                    </select>
                </fieldset>
                <fieldset>
                    <label>Крайний срок</label>
                    <input type='date' className='date'/>
                </fieldset>
                <fieldset>
                    <label>Добавить файл</label>
                    <input type='file' className='file'/>
                </fieldset>
                <fieldset>
                    <label>Комментарий</label>
                    <input type='text' placeholder='Введите комментарий' className='comment'/>
                </fieldset>
            </form>
            <div className='sendIt'>
                    <button type='submit'>Поставить задачу</button>
            </div>
        </div>
    )
}