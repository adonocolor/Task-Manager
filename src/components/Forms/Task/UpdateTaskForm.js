import React from "react";
import {employees, taskStatus} from "../../../data/data";
import '../../../styles/updateTask.scss'
import {CrossIcon} from "../../Icons";
import { Form, TagPicker, DatePicker, InputPicker} from "rsuite";
import '../../../styles/rsuite.scss'

const data = employees.map((employee) => {
    return ({label: employee.name, value: employee.id})
})

const categories = taskStatus.map((task) => {
    return ({label: task.title, value: task.title, color: task.color})
})

export const UpdateTaskForm = ({open, onClose, title}) => {
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
                                <TagPicker style={{fontSize: "0.75rem"}} data={data} />
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Крайний срок</Form.ControlLabel>
                                <DatePicker/>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Категория</Form.ControlLabel>
                                <InputPicker
                                    data={categories}
                                    placeholder="Выберите категорию"

                                    renderMenuItem={(label, item) => {
                                        return (
                                            <div>
                                                <i className="rs-icon rs-icon-user"/> {label}
                                            </div>
                                        );
                                    }}

                                    renderMenuGroup={(label, item) => {
                                        return (
                                            <div>
                                                <i className="rs-icon rs-icon-group"/> {label} - ({item.children.length})
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
                                                {value}
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