import React, {Component} from "react";
import {Category} from "./Category";
import '../styles/main.scss'
import '../data/data.js'
import {taskStatus} from "../data/data";
import {AddIcon} from "./Icons";



class App extends Component {
    render() {
        return (
            <>
                <div className="categories">
                    {
                        taskStatus.map((status) => {
                            return (
                                <Category {...status} key={status.id} />
                            )
                        })
                    }
                </div>
                <button className='addButton'>
                    <AddIcon />
                </button>
            </>
        )
    }
}

export default App;