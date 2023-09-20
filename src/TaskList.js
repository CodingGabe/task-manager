import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="mt-12 w-full lg:max-w-2xl bg-white min-w-min rounded shadow-sm">
        <ul className="flex flex-col">
            {tasks.map((task, index) => (
                <li key={index} className="text-slate-700 text-lg flex justify-between border-b-2 p-4">
                {task}
                <button onClick={() => onDeleteTask(index)} className="ml-4 p-2 bg-red-400 rounded text-white leading-none text-sm">Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default TaskList;
