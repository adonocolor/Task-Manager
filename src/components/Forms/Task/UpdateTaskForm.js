import React from "react";
import {CrossIcon} from "../../Icons";
import { Form, TagPicker, DatePicker, InputPicker} from "rsuite";
import {employees, taskStatus} from "../../../data/data";
import '../../../styles/updateTask.scss'
import '../../../styles/rsuite.scss'
import '../../../data/data'
import {inputStyle, formGroupStyle} from "./rsuiteStyles";
import {parseDate} from "../../Task";
import Arrow from '../../../svg/arrowIcon.svg';


const categories = taskStatus.map((task) => {
    return ({label: task.title, value: task.id, color: task.color})
})


export const UpdateTaskForm = ({open, onClose, title, author, date, status}) => {
    if (!open)
        return null
    else {
        const disabledTaskStatusOptions = (array, status) => {
            let index = array.indexOf(status)
            let enabled

            if (index === 0 &&  typeof array[1] !== 'undefined') {
                enabled = array.slice(0, 2)
            }
            if (index === 0 &&  typeof array[1] === 'undefined') {
                enabled = status.id
            }
            if (index !== 0 &&  typeof array[index + 1] !== 'undefined') {
                enabled = array.slice(index - 1, index + 2)
            } else
                enabled = array.slice(-2)

            return array.filter(item => !enabled.includes(item)).map(item => item.id)
        }

        const disabledCategories = disabledTaskStatusOptions(taskStatus, status)

        return (
            <div id="updateForm" className='updateFormContainer'>
                    <img src={Arrow} alt='arrowIcon'/>
                <div className='updateTask'>
                    <div className='header'>
                        <p>{title}</p>
                        <button className='closeFormButton' onClick={onClose}>
                            <CrossIcon />
                        </button>
                    </div>
                    <Form>
                        <div className='form'>
                            <Form.Group style={formGroupStyle}>
                                <Form.ControlLabel>Исполнители</Form.ControlLabel>
                                <TagPicker placeholder={'Выберите пользователей'} defaultValue={author.map(item => item.id)} style={inputStyle} data={employees} labelKey="name" valueKey="id" />
                            </Form.Group>
                            <Form.Group style={formGroupStyle}>
                                <Form.ControlLabel>Крайний срок</Form.ControlLabel>
                                <DatePicker type="date" format="yyyy.MM.dd HH:mm" style={inputStyle} locale={{
                                    sunday: 'Вс',
                                    monday: 'Пн',
                                    tuesday: 'Вт',
                                    wednesday: 'Ср',
                                    thursday: 'Чт',
                                    friday: 'Пт',
                                    saturday: 'Сб',
                                    ok: 'OK',
                                    today: 'Сегодня',
                                    yesterday: 'Вчера',
                                    hours: 'Часов',
                                    minutes: 'Минут',
                                    seconds: 'Секунд'
                                }}
                                            placeholder={'гггг.мм.дд ЧЧ:мм'}
                                            renderValue={(date) => parseDate(date)}
                                            defaultValue={date} />
                            </Form.Group>
                            <Form.Group style={formGroupStyle}>
                                <Form.ControlLabel>Категория</Form.ControlLabel>
                                <InputPicker
                                    style={inputStyle}
                                    data={categories}
                                    placeholder="Выберите категорию"
                                    defaultValue={status.id}
                                    disabledItemValues={disabledCategories}
                                    renderMenuItem={(label, item) => {
                                        return (
                                            <div style={{fontSize: "0.75rem", width: "100%"}}>
                                                <i className="rs-icon rs-icon-user" /> {label}
                                            </div>
                                        );
                                    }}
                                    renderValue={(value, item, selectedElement) => {
                                        const {color} = item
                                        return (
                                            <div className='catField' style={{color: "black", fontSize: "0.75rem", fontWeight: "400"}}>
                                              <span>
                                                <div className="categoryIcon" style={{background: color}}/>
                                              </span>{' '}
                                                {item.label}
                                            </div>
                                        );
                                    }}
                                />
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}