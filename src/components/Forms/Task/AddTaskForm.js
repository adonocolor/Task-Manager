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
                    <Form.Group style={{margin: 0, padding: 0}} >
                        <Form.ControlLabel style={{fontSize: "0.75rem"}}>Название</Form.ControlLabel>
                        <Input style={{fontSize: "0.75rem", width: "100%"}} placeholder='Название задачи'></Input>
                    </Form.Group>
                    <Form.Group style={{margin: 0, padding: 0}} >
                        <Form.ControlLabel style={{fontSize: "0.75rem"}}>Исполнители</Form.ControlLabel>
                        <TagPicker style={{fontSize: "0.75rem", width: "100%"}} data={data} />
                    </Form.Group>
                    <Form.Group style={{margin: 0, padding: 0}} >
                        <Form.ControlLabel style={{fontSize: "0.75rem"}}>Крайний срок</Form.ControlLabel>
                        <DatePicker />
                    </Form.Group>
                    <Form.Group style={{margin: 0, padding: 0}} >
                        <Form.ControlLabel style={{fontSize: "0.75rem"}}>Добавить файл</Form.ControlLabel>
                        <Uploader style={{fontSize: "0.75rem", width: "100%"}}  action="//jsonplaceholder.typicode.com/posts/" />
                    </Form.Group>
                    <Form.Group controlId="textarea-1" style={{height: "100%", margin: 0, padding: 0}}>
                        <Form.ControlLabel style={{fontSize: "0.75rem"}}>Комментарий</Form.ControlLabel>
                        <Form.Control className='comment' placeholder='Введите комментарий' rows={2} name="textarea" style={{width: "100%",  maxHeight: 100 }} accepter={Textarea} />
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