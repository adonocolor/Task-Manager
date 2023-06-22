import React, {useRef, useState} from "react";
import {employees} from "../../data/data";
import '../../styles/addTask.scss'
import {CrossIcon} from "../Icons";
import {Button, Input, ButtonToolbar, Form, TagPicker, DatePicker, Uploader} from "rsuite";
import '../../styles/rsuite.scss'
import {inputStyle, labelStyle} from "./rsuiteStyles";
import {ArrayType, SchemaModel, StringType} from "schema-typed";
import {useDispatch} from "react-redux";
import {addTask} from "../../data/redux/features/categorySlice";

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const data = employees.map((employee) => {
    return ({label: employee.name, value: employee.id})
})

export const AddTaskForm = ({open, onClose}) => {
    if (!open) return null
    else {
        const dispatch = useDispatch()
        const formRef = useRef();
        const [formData, setFormData] = useState({
            title: undefined,
            authors: undefined,
            date: undefined,
            file: undefined,
            comment: undefined,
        });
        const handleSubmit = () => {
            if(!formRef.current.check()) {
                return;
            }

            if (formData.date !== undefined && formData.date !== null) {
                formData.date = formData.date.toString()
            }

            dispatch(addTask(formData))
        }

        const model = SchemaModel({
            title: StringType().isRequired('Напишите имя!'),
            authors: ArrayType().isRequired('У задачи должен быть хотя бы 1 исполнитель!'),
        })

        return (
            <div className='addTask'>
                <div className='header'>
                    <p>Новая задача</p>
                    <button className='closeFormButton' onClick={onClose}>
                        <CrossIcon />
                    </button>
                </div>
                <Form model={model} ref={formRef} onChange={setFormData} onSubmit={handleSubmit}>
                    <div className='form'>
                        <Form.Group style={{margin: 0, padding: 0}} >
                            <Form.ControlLabel style={labelStyle}>Название</Form.ControlLabel>
                            <Form.Control name="title" style={inputStyle} placeholder='Название задачи'></Form.Control>
                        </Form.Group>
                        <Form.Group style={{margin: 0, padding: 0}} >
                            <Form.ControlLabel style={labelStyle}>Исполнители</Form.ControlLabel>
                            <Form.Control name="authors" accepter={TagPicker} placeholder={'Выберите пользователей'} style={inputStyle} data={data} />
                        </Form.Group>
                        <Form.Group style={{margin: 0, padding: 0}} >
                            <Form.ControlLabel style={labelStyle}>Крайний срок</Form.ControlLabel>
                            <Form.Control name="date" accepter={DatePicker} format={"dd.MM.yyyy"}  style={inputStyle}  placeholder={'дд.мм.гггг'}/>
                        </Form.Group>
                        <Form.Group style={{margin: 0, padding: 0}} >
                            <Form.ControlLabel style={labelStyle}>Добавить файл</Form.ControlLabel>
                                <Form.Control name="file" accepter={Uploader} style={inputStyle} action="//jsonplaceholder.typicode.com/posts/" className='file'/>
                        </Form.Group>
                        <Form.Group controlId="textarea-1" style={{height: "100%", margin: 0, padding: 0}}>
                            <Form.ControlLabel style={labelStyle}>Комментарий</Form.ControlLabel>
                            <Form.Control className='comment' placeholder='Введите комментарий' rows={2} name="comment" style={{width: "100%",  maxHeight: 100, fontSize: "0.75rem", borderRadius: "1px" }} accepter={Textarea} />
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
}