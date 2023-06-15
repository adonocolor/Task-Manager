import React from "react";
import {employees, taskStatus} from "../../../data/data";
import '../../../styles/updateTask.scss'
import {CrossIcon} from "../../Icons";
import { Form, TagPicker, DatePicker, InputPicker} from "rsuite";
import '../../../styles/rsuite.scss'


const categories = taskStatus.map((task) => {
    return ({label: task.title, value: task.id, color: task.color})
})


export const UpdateTaskForm = ({open, onClose, title, author, date, status}) => {
    if (!open) return null
    else
        return (
            <div className='updateFormContainer'>
                <div className='arrowUp'></div>
                <div className='updateTask'>
                    <div className='header'>
                        <p>{title}</p>
                        <button className='closeFormButton' onClick={onClose}>
                            <CrossIcon />
                        </button>
                    </div>
                    <Form>
                        <div className='form'>
                            <Form.Group>
                                <Form.ControlLabel>Исполнители</Form.ControlLabel>
                                <TagPicker defaultValue={author.map(item => item.id)} style={{fontSize: "0.75rem"}} data={employees} labelKey="name" valueKey="id" />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Крайний срок</Form.ControlLabel>
                                <DatePicker defaultValue={date}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Категория</Form.ControlLabel>
                                <InputPicker
                                    data={categories}
                                    placeholder="Выберите категорию"
                                    defaultValue={status.id}
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