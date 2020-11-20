import React from 'react';
import style from './Tasks.module.css'

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: "",
            taskList: []
        }
    }
    setTask = (e) => {
        this.setState({
            ...this.state,
            newTask: e.target.value
        })
        console.log(this.state)
    }
    addTask = () => {
        if (this.state.newTask) {
            let newTask = {
                id: 1 + Math.random(),
                task: this.state.newTask
            }
            this.setState({
                newTask: '',
                taskList: [...this.state.taskList, newTask]
            })
        }
    }

    deleteTask = (id) => {
        const taskList = [...this.state.taskList];
        const updatedList = taskList.filter(item => item.id !== id);
        this.setState({ taskList: updatedList })
    }

    render() {
        return (
            <div>
                <div className={style.textfield}>
                    <label htmlFor="input-field">Add a Task </label>
                    <input type="text" id="input-field" value={this.state.newTask} onChange={this.setTask} />
                    <button onClick={() => this.addTask()}>
                        Add a Task
        </button>
                </div>
                <br />
                <br />
                <ul>
                    {this.state.taskList.map(item => {
                        return (
                            <li key={item.id}>
                                {item.task}
                                <button className={style.closeBtn}
                                    onClick={() => this.deleteTask(item.id)}>
                                    X
                        </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Tasks;