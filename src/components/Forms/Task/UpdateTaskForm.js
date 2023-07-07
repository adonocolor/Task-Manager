import React, {useEffect, useRef, useState} from "react";
import {CrossIcon} from "../../Icons";
import { Form, TagPicker, DatePicker, InputPicker} from "rsuite";
import {employees} from "../../../data/data";
import '../../../styles/updateTask.scss'
import '../../../styles/rsuite.scss'
import '../../../data/data'
import {inputStyle, formGroupStyle, renderCategoryItem, datePickerLocale} from "../rsuiteStyles";
import {parseDate} from "../../Task";
import Arrow from '../../../styles/svg/arrowIcon.svg';
import {useDispatch, useSelector} from "react-redux";
import {updateTask} from "../../../data/redux/features/categorySlice";
import {NumberType, SchemaModel} from "schema-typed";

const disabledTaskStatusOptions = (array, status) => {
    const found = array.find(item => item.id === status)
    let index = array.indexOf(found)
    let enabled

    if (index === 0 &&  typeof array[1] !== 'undefined') {
        enabled = [array[0], array[1]]
        return array.filter(item => !enabled.includes(item)).map(item => item.id)
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

export const UpdateTaskForm = ({open, onClose, title, authors, date, categoryId, id, drag}) => {
    if (!open)
        return null
    else {
        useEffect(() => {
            if (drag) {
                onClose()
            }
        });
        const model = SchemaModel({
            categories: NumberType().isRequired('У задачи должна быть категория!'),
        })

        const taskStatus = useSelector((store) => store.categorySlice.allCategories);

        const categories = taskStatus.map((task) => {
            return ({label: task.title, value: task.id, color: task.color})
        })

        let realDate
        if (date !== undefined) {
            realDate = new Date(date)
        } else {
            realDate = undefined
        }

        const dispatch = useDispatch()
        const disabledCategories = disabledTaskStatusOptions(taskStatus, categoryId)
        const formRef = useRef();
        const [formData, setFormData] = useState({
            authors: authors,
            date: realDate,
            categories: categoryId,
        });
        const handleSubmit = (id) => {
            if (!formRef.current.check()) {
                return;
            }

            formData['id'] = id
            formData['catId'] = categoryId

            console.log(formData)

            if (formData.date !== undefined && formData.date !== null) {
                formData.date = formData.date.toString()
            }

            dispatch(updateTask(formData))
            onClose()
        }

        return (
            <div className='updateFormContainer updateFormContainer--task'>
                    <img className='arrow arrow--task' src={Arrow} alt='arrowIcon'/>
                <div className='updateForm'>
                    <div className='header'>
                        <p>{title}</p>
                        <button className='closeFormButton'
                                onClick={() => handleSubmit(id)}>
                            <CrossIcon />
                        </button>
                    </div>
                    <Form ref={formRef} onChange={setFormData}>
                        <div className='form'>
                            <Form.Group controlId='authors' style={formGroupStyle}>
                                <Form.ControlLabel>Исполнители</Form.ControlLabel>
                                <Form.Control accepter={TagPicker}
                                              defaultValue={authors}
                                              name="authors"
                                              placeholder={'Выберите пользователей'}
                                              style={inputStyle}
                                              data={employees}
                                              labelKey="name"
                                              valueKey="id" />
                            </Form.Group>
                            <Form.Group controlId='date' style={formGroupStyle}>
                                <Form.ControlLabel>Крайний срок</Form.ControlLabel>
                                <Form.Control accepter={DatePicker}
                                              name="date"
                                              format="yyyy.MM.dd HH:mm"
                                              style={inputStyle}
                                              locale={datePickerLocale}
                                              placeholder={'гггг.мм.дд ЧЧ:мм'}
                                              renderValue={(date) => parseDate(date)}
                                              defaultValue={realDate} />
                            </Form.Group>
                            <Form.Group controlId='categories' style={formGroupStyle}>
                                <Form.ControlLabel>Категория</Form.ControlLabel>
                                <Form.Control accepter={InputPicker}
                                              name="categories"
                                              style={inputStyle}
                                              data={categories}
                                              placeholder="Выберите категорию"
                                              defaultValue={categoryId}
                                              disabledItemValues={disabledCategories}
                                              renderValue={renderCategoryItem}
                                />
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}