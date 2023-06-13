import React from "react";
import {employees} from "../../../data/data";
import '../../../styles/addTask.scss'
import {CrossIcon} from "../../Icons";
import {Button, Input, ButtonToolbar, Form, TagPicker} from "rsuite";
// import 'rsuite/dist/rsuite.min.css';


const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
const data = employees.map((employee) => {
    return ({label: employee.name, value: employee.id})
})

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
            <Form>
                <div className='form'>
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
                    <Form.Group>
                        <Form.ControlLabel>Исполнители</Form.ControlLabel>
                        <TagPicker data={data} style={{ width: 300 }} />
                    </Form.Group>
                    <fieldset>
                        <label>Крайний срок</label>
                        <input type='date' className='date'/>
                    </fieldset>
                    <fieldset>
                        <label>Добавить файл</label>
                        <input type='file' className='file'/>
                    </fieldset>
                    <Form.Group controlId="textarea-1">
                        <Form.ControlLabel>Комментарий</Form.ControlLabel>
                        <Form.Control className='comment' rows={5} name="textarea" accepter={Textarea} />
                    </Form.Group>
                    {/*to be replaced with the code above*/}
                    {/*<fieldset>*/}
                    {/*    <label>Комментарий</label>*/}
                    {/*    <input type='text' placeholder='Введите комментарий' className='comment'/>*/}
                    {/*</fieldset>*/}
                </div>
                <div className='sendIt'>
                    <ButtonToolbar>
                        <Button type='submit'>Поставить задачу</Button>
                    </ButtonToolbar>
                    {/*to be replaced with the code above*/}
                    {/*<button type='submit'>Поставить задачу</button>*/}
                </div>
            </Form>
        </div>
    )
}