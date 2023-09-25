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
      const newTaskObject = {
        task: newTask,
        completed: false,
      };
      this.setState({
        tasks: [...tasks, newTaskObject],
        newTask: '',
      });
    }
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks.splice(index, 1); // Remove the task at the specified index
    this.setState({ tasks: updatedTasks });
  };
  
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  };

  onToggleComplete = (index) => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks]; // Create a copy of the tasks array
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed, // Toggle completed state
    };
    this.setState({ tasks: updatedTasks });
  };
  

  render() {
    const { tasks } = this.state;
    // Create separate lists for active and completed tasks
    const activeTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
      <div className="App bg-slate-300">
        <main className="container mx-auto flex justify-center flex-col lg:max-w-md">
          <div className="task-header mb-12 px-4 py-12 bg-white rounded-md drop-shadow">
            <h1 className="text-3xl font-bold text-center text-neutral-900">Task Management App</h1>
          </div>
          {/* Add form and task list components here */}
          <div className="task-content flex flex-wrap justify-center flex-col justify-items-center text-center mx-auto">
            <div>
              <input
                type="text"
                placeholder="New Task"
                value={this.state.newTask}
                onChange={(e) => this.setState({ newTask: e.target.value })}
                onKeyDown={this.handleKeyPress} // User can click Enter
                className="rounded py-2 px-4 text-slate-700 focus-visible:outline-green-400"
              />
              <button onClick={this.addTask} className="rounded bg-green-500 py-2 px-4 ml-4 lg:ml-0 text-center text-white add">Add Task</button>
            </div>
            <div className="task-list">
              {/* Display active tasks */}
              {activeTasks.length > 0 && (
                <div className="active-tasks">
                  <h2 className="mt-6">Active Tasks</h2>
                  <TaskList tasks={activeTasks} onDeleteTask={this.deleteTask} onToggleComplete={this.onToggleComplete} />
                </div>
              )}
              {/* Display completed tasks */}
              {completedTasks.length > 0 && (
                <div className="comp-tasks">
                  <h2>Completed Tasks</h2>
                  <TaskList tasks={completedTasks} onDeleteTask={this.deleteTask} onToggleComplete={this.onToggleComplete} />
                </div>
              )}
              {/* Display a message if there are no tasks */}
              {tasks.length === 0 && <p className="mt-6">No task to display.</p>}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
