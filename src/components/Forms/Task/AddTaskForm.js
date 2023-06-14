import React from "react";
import {employees} from "../../../data/data";
import '../../../styles/addTask.scss'
import {CrossIcon} from "../../Icons";
import {Button, Input, ButtonToolbar, Form, TagPicker, DatePicker, Uploader} from "rsuite";
import '../../../styles/rsuite.scss'

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const data = employees.map((employee) => {
    return ({label: employee.name, value: employee.id})
})

export const AddTaskForm = ({open, onClose}) => {
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
                    <Form.Group>
                        <Form.ControlLabel>Название</Form.ControlLabel>
                        <Input placeholder='Название задачи'></Input>
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>Исполнители</Form.ControlLabel>
                        <TagPicker data={data} />
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>Крайний срок</Form.ControlLabel>
                        <DatePicker/>
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>Добавить файл</Form.ControlLabel>
                        <Uploader action="//jsonplaceholder.typicode.com/posts/" />
                    </Form.Group>
                    <Form.Group controlId="textarea-1" style={{height: "100%"}}>
                        <Form.ControlLabel>Комментарий</Form.ControlLabel>
                        <Form.Control className='comment' placeholder='Введите комментарий' rows={2} name="textarea" style={{width: "100%", maxHeight: 200 }} accepter={Textarea} />
                    </Form.Group>
                </div>
                <div className='sendIt'>
                    <ButtonToolbar>
                        <Button type='submit'>Поставить задачу</Button>
                    </ButtonToolbar>
                </div>
            </Form>
        </div>
    )
}