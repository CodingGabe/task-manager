import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleComplete }) {
  return (
    <div className="mt-12 w-full lg:max-w-2xl bg-white min-w-min rounded shadow-sm">
        <ul className="flex flex-col">
            {tasks.map((task, index) => (
                <TaskItem 
                    key={index}
                    task={task}
                    completed={task.completed}
                    onToggleComplete={() => onToggleComplete(index)}
                    onDelete={() => onDeleteTask(index)}
                />
            ))}
        </ul>
    </div>
  );
}

export default TaskList;
