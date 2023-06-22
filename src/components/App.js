import React, {Component} from "react";
import {AddTaskModal} from "./Modals/AddTaskModal";
import {Board} from "./Board";



class App extends Component {
    render() {
        return (
            <>
                <Board />
                <AddTaskModal />
            </>
        )
    }
}

export default App;