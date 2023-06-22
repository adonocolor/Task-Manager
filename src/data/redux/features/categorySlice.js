import {createSlice} from "@reduxjs/toolkit";
import * as uuid from "uuid";

const initialState = {
    allCategories: [
        {id: 0, title: 'Неразобранные задачи', color: '#FF6347', tasks: []},
        {id: 1, title: 'В планах', color: '#FE989B', tasks: []},
        {id: 2, title: 'В работе', color: '#9FBAEF', tasks: []},
        {id: 3, title: 'Выполнено', color: '#FFD796', tasks: []}
    ]
}

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const payload = action.payload
            const id = uuid.v4()

            const task= {
                id: id,
                title: payload.title,
                authors: payload.authors,
                date: payload.date,
                file: payload.file,
                comment: payload.comment,
            }

            if (task.title === null || task.authors.length === 0) {
                return
            }

            state.allCategories[0].tasks.push(task)
        },
        removeLastTask: (state, action) => {
            const id = action.payload
            const task = state.allCategories.find(item => item.id === id)
            if (task.tasks.length === 0) {
                return
            }

            task.tasks.pop()
        },
        updateTask: (state, action) => {
            const task = action.payload

            if (task.categories === null || (task.authors && task.authors.length === 0)) {
                return
            }

            const categoryIndex = state.allCategories.indexOf(state.allCategories.find(item => item.id === task.catId))
            const taskIndex = state.allCategories[categoryIndex].tasks.indexOf(state.allCategories[categoryIndex].tasks.find(item => item.id === task.id))
            const found = state.allCategories[categoryIndex].tasks[taskIndex]

            task['title'] = found.title
            task['file'] = found.file
            task['comment'] = found.comment
            delete task.catId

            if (task.authors === undefined) {
                task['authors'] = found.authors
            }

            if (task.date === undefined) {
                task['date'] = found.date
            }

            if (task.date === null) {
                task['date'] = undefined
            }

            if (task.categories !== undefined) {
                state.allCategories[categoryIndex].tasks.splice(taskIndex, 1)
                const neededCategory = task.categories
                delete task.categories
                state.allCategories[neededCategory].tasks.push(task)
            } else {
                state.allCategories[categoryIndex].tasks[taskIndex] = task
            }
        }
    },
})

export default categorySlice.reducer;
export const {addTask, updateTask, removeLastTask} = categorySlice.actions