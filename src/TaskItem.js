import React from 'react';

function TaskItem({ task, completed, onToggleComplete, onDelete }) {
    return (
      <li className={`flex items-center justify-between p-2 border border-gray-300 mb-2 ${completed ? 'bg-green-100' : ''}`}>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleComplete()}
          />
          <span className={`text-lg ${completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>{task.task}</span>
        </label>
        <button
          className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-600"
          onClick={onDelete}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default TaskItem;
  
