import React, { useState } from 'react';
import style from './Tasks.module.css'

const Tasks = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        if (task) {
            let newTask = {
                id: 1 + Math.random(),
                task: task
            }
            setTask('');
            setTaskList([...taskList, newTask])
        }
    }
    const deleteTask = (id) => {
        const tasks = [...taskList];
        const updatedList = tasks.filter(item => item.id !== id);
        setTaskList(updatedList)
    }

        return (
            <div>
                <div className={style.textfield}>
                    <label htmlFor="input-field">Add a Task </label>
                    <input type="text" id="input-field" value={task} onChange={e => setTask(e.target.value)} />
                    <button className={style.addBtn} onClick={() => addTask()}>
                        Add a Task
        </button>
                </div>
                <br />
                <ul>
                    {taskList.map(item => {
                        return (
                            <li key={item.id}>
                                {item.task}
                                <button className={style.closeBtn}
                                    onClick={() => deleteTask(item.id)}>
                                    X
                        </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
}
export default Tasks;