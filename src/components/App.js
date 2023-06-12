import React, {Component} from "react";
import '../styles/main.scss'
import '../data/data.js'
import {AddTaskButton} from "./AddTaskButton";
import {Board} from "./Board";



class App extends Component {
    render() {
        return (
            <>
                <Board />
                <AddTaskButton />
            </>
        )
    }
}

export default App;