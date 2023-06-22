import React from "react";

export const formGroupStyle = {
    margin: "0 0 16px 0",
    padding: 0,
}

export const inputStyle = {
    fontSize: "0.75rem", width: "100%", borderRadius: "1px"
}

export const labelStyle = {
    fontSize: "0.75rem", marginTop: "5px"
}

export const renderCategoryItem = (value, item) => {
    const {color} = item
    return (
        <div className='catField' style={{color: "black", fontSize: "0.75rem", fontWeight: "400"}}>
                                              <span>
                                                <div className="categoryIcon" style={{background: color}}/>
                                              </span>{' '}
            {item.label}
        </div>
    );
}

export const datePickerLocale = {
    sunday: 'Вс',
    monday: 'Пн',
    tuesday: 'Вт',
    wednesday: 'Ср',
    thursday: 'Чт',
    friday: 'Пт',
    saturday: 'Сб',
    ok: 'OK',
    today: 'Сегодня',
    yesterday: 'Вчера',
    hours: 'Часов',
    minutes: 'Минут',
    seconds: 'Секунд'
}
