import {createSlice} from "@reduxjs/toolkit";
import * as uuid from "uuid";

const initialState = {
    allCategories: [
        {id: uuid.v4(), title: 'Неразобранные задачи', color: '#FF6347', tasks: []},
        {id: uuid.v4(), title: 'В планах', color: '#FE989B', tasks: []},
        {id: uuid.v4(), title: 'В работе', color: '#9FBAEF', tasks: []},
        {id: uuid.v4(), title: 'Выполнено', color: '#FFD796', tasks: []}
    ]
}

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const payload = action.payload

            const task= {
                id: uuid.v4(),
                title: payload.title,
                authors: payload.authors,
                date: payload.date,
                file: payload.file,
                comment: payload.comment,
            }

            if (task.title === null) {
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

            if (task.categories === null) {
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
                task['categories'] = categoryIndex
            }

            if (task.categories !== categoryIndex) {
                state.allCategories[categoryIndex].tasks.splice(taskIndex, 1)
                const neededCategory = state.allCategories.indexOf(state.allCategories.find(item => item.id === task.categories))
                delete task.categories
                state.allCategories[neededCategory].tasks.push(task)
            } else {
                state.allCategories[categoryIndex].tasks[taskIndex] = task
            }
        },
        dragTask: (state, action) => {
            const {source, destination, type} = action.payload
            let categories = state.allCategories

            if (!destination) return;
            if (source.droppableId === destination.droppableId && source.index === destination.index) return;

            let sourceCatIndex = categories.indexOf(categories.find(element => element.id === source.droppableId))
            let destinationCatIndex = categories.indexOf(categories.find(element => element.id === destination.droppableId))
            if (type === 'tasks') {
                if (Math.abs(sourceCatIndex - destinationCatIndex) > 1) return
                let task = categories[sourceCatIndex].tasks[source.index]
                categories[sourceCatIndex].tasks.splice(source.index, 1)
                categories[destinationCatIndex].tasks.splice(destination.index, 0, task)
            }
        }
    },
})

export default categorySlice.reducer;
export const {addTask, updateTask, removeLastTask, dragTask} = categorySlice.actions