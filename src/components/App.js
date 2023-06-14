import React, {Component} from "react";
import {AddTaskModal} from "./AddTaskModal";
import {Board} from "./Board";
import {UpdateTaskForm} from "./Forms/Task/UpdateTaskForm";



class App extends Component {
    render() {
        return (
            <>
                <Board />
                <UpdateTaskForm />
                <AddTaskModal />
            </>
        )
    }
}

export default App;