import React from 'react';

function TaskItem({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
