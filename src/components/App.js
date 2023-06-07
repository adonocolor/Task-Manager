import React, {Component} from "react";
import {Category} from "./Category";
import '../styles/main.scss'
import '../data/data.js'
import {taskStatus} from "../data/data";


class App extends Component {
    render() {
        return (
            <div className="categories">
                {
                    taskStatus.map((status) => {
                        return (
                            <Category {...status} key={status.id} />
                        )
                    })
                }
            </div>
        )
    }
}

export default App;