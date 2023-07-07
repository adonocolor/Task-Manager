import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Arrow from "../../../styles/svg/arrowIcon.svg";
import {CrossIcon} from "../../Icons";
import {Form} from "rsuite";
import {inputStyle, labelStyle} from "../rsuiteStyles";
import {ColorPicker} from "primereact/colorpicker";
import "primereact/resources/primereact.min.css"
export const UpdateCategoryForm = ({open, onClose, title, color, categoryId, id, drag}) => {
    if (!open)
        return null
    else {
        const [formColor, setFormColor] = useState(color);
        useEffect(() => {
            if (drag) {
                onClose()
            }
        });

        const dispatch = useDispatch()
        const formRef = useRef();
        const [formData, setFormData] = useState({
            title: title,
            color: color,
        });
        const handleColorEvent = (event) =>
        {
            setFormColor(event.value);
            setFormData({
                ...formData, color: event.value,
            })
        }
        const handleSubmit = (id) => {
            if (!formRef.current.check()) {
                return;
            }

            console.log(formData)
            onClose()
        }

        return (
            <div className='updateFormContainer updateFormContainer--category'>
                <img className='arrow arrow--category' src={Arrow} alt='arrowIcon'/>
                <div className='updateForm'>
                    <div className='header header--category'>
                        <button className='closeFormButton'
                                onClick={() => handleSubmit(id)}>
                            <CrossIcon />
                        </button>
                    </div>
                    <Form ref={formRef} onChange={setFormData}>
                        <div className='form'>
                            <Form.Group style={{margin: 0, padding: 0}} >
                                <Form.ControlLabel style={labelStyle}>Название</Form.ControlLabel>
                                <Form.Control name="title" style={inputStyle} placeholder={title}></Form.Control>
                            </Form.Group>
                            <Form.Group style={{margin: 0, padding: 0}} >
                                <Form.ControlLabel style={labelStyle}>Цвет</Form.ControlLabel>
                                <ColorPicker
                                    name="color"
                                value={formColor}
                                onChange={handleColorEvent} format='hex'
                                    inline={true}
                                />
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}