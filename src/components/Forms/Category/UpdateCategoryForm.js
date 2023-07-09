import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import Arrow from "../../../styles/svg/arrowIcon.svg";
import {CrossIcon} from "../../Icons";
import {Form} from "rsuite";
import {inputStyle, labelStyle} from "../rsuiteStyles";
import {ColorPicker} from "primereact/colorpicker";
import '../../../styles/rsuite.scss'
import {updateCategory} from "../../../data/redux/features/categorySlice";
import 'primereact/resources/primereact.min.css';

export const UpdateCategoryForm = ({open, onClose, title, color, id, drag}) => {
    if (!open)
        return null
    else {
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
        const handleColorEvent = (value) =>
        {
            setFormData({
                ...formData, color: value,
            })
        }
        const handleSubmit = (id) => {
            if (!formRef.current.check()) {
                return;
            }


            if (formData.color[0] !== '#' && formData.color !== undefined) {
                let hex = '#'
                formData.color = hex.concat(formData.color)
            }

            formData['id'] = id;

            dispatch(updateCategory(formData))
            console.log(formData)
            onClose()
        }

        return (
            <div className='updateFormContainer updateFormContainer--category'>
                <img className='arrow arrow--category' src={Arrow} alt='arrowIcon'/>
                <div className='updateForm updateForm--category'>
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
                            <Form.Group style={{margin: 0, padding: 0, display: "flex", justifyContent: "center"}} >
                                <Form.ControlLabel style={labelStyle}>Цвет</Form.ControlLabel>
                            </Form.Group>
                            <ColorPicker name='color' value={color} onChange={(e) => handleColorEvent(e.value)} />
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}