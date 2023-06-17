import React from "react";
import {employees} from "../../../data/data";
import '../../../styles/addTask.scss'
import {CrossIcon} from "../../Icons";
import {Button, Input, ButtonToolbar, Form, TagPicker, DatePicker} from "rsuite";
import '../../../styles/rsuite.scss'
import {inputStyle, labelStyle} from "./rsuiteStyles";

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
                        <Form.ControlLabel style={labelStyle}>Название</Form.ControlLabel>
                        <Input style={inputStyle} placeholder='Название задачи'></Input>
                    </Form.Group>
                    <Form.Group style={{margin: 0, padding: 0}} >
                        <Form.ControlLabel style={labelStyle}>Исполнители</Form.ControlLabel>
                        <TagPicker placeholder={'Выберите пользователей'} style={inputStyle} data={data} />
                    </Form.Group>
                    <Form.Group style={{margin: 0, padding: 0}} >
                        <Form.ControlLabel style={labelStyle}>Крайний срок</Form.ControlLabel>
                        <DatePicker format={"dd.MM.yyyy"} placeholder={'дд.мм.гггг'}/>
                    </Form.Group>
                    <Form.Group style={{margin: 0, padding: 0}} >
                        <Form.ControlLabel style={labelStyle}>Добавить файл</Form.ControlLabel>
                        <div className='rs-input fileCont'>
                            <input type='file' className='file'/>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="textarea-1" style={{height: "100%", margin: 0, padding: 0}}>
                        <Form.ControlLabel style={labelStyle}>Комментарий</Form.ControlLabel>
                        <Form.Control className='comment' placeholder='Введите комментарий' rows={2} name="textarea" style={{width: "100%",  maxHeight: 100, fontSize: "0.75rem", borderRadius: "1px" }} accepter={Textarea} />
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