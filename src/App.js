import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
  state = {
    tasks: [],
    newTask: '',
  };

  // Add methods to handle adding and removing tasks here
  addTask = () => {
    const { tasks, newTask } = this.state;
    if (newTask) {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
    }
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
  };
  
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  };
  

  render() {
    const { tasks } = this.state;

    return (
      <div className="App bg-slate-300">
        <main className="container mx-auto flex justify-center flex-col lg:max-w-md">
          <div className="task-header mb-12 px-4 py-12 bg-white rounded-md drop-shadow">
            <h1 className="text-3xl font-bold text-center text-neutral-900">Task Management App</h1>
          </div>
          {/* Add form and task list components here */}
          <div className="flex flex-wrap justify-center flex-col justify-items-center text-center mx-auto">
            <div>
              <input
                type="text"
                placeholder="New Task"
                value={this.state.newTask}
                onChange={(e) => this.setState({ newTask: e.target.value })}
                onKeyDown={this.handleKeyPress} // User can click Enter
                className="rounded py-2 px-4 text-slate-700 focus-visible:outline-green-400"
              />
              <button onClick={this.addTask} className="rounded bg-green-500 py-2 px-4 ml-4 lg:ml-0 text-center text-white">Add Task</button>
            </div>
            {tasks.length === 0 ? (
              <p className="mt-6">No task to display.</p>
            ) : (
              <TaskList tasks={tasks} onDeleteTask={this.deleteTask} />
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
