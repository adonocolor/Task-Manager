import {createSlice} from "@reduxjs/toolkit";

const initialState = [
            {id: 0, title: 'Неразобранные задачи', color: '#FF6347', tasks: []},
            {id: 1, title: 'В планах', color: '#FE989B', tasks: []},
            {id: 2, title: 'В работе', color: '#9FBAEF', tasks: []},
            {id: 3, title: 'Выполнено', color: '#FFD796', tasks: []}
]

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
})

export default categorySlice.reducer;