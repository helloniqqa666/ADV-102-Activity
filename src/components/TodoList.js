import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditTask(tasks[index]);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditTask('');
  };

  const updateTask = () => {
    if (editTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditTask('');
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border rounded-l-md w-full"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 rounded-r-md">
          Create
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center px-2 py-1 border-b">
            <div className="flex items-center">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className="p-1 border rounded-md mr-2"
                  />
                  <button onClick={updateTask} className="text-green-500" type="button">
                    Update
                  </button>
                  <button onClick={cancelEditing} className="text-red-500 ml-2" type="button">
                    Cancel
                  </button>
                  <button onClick={() => removeTask(index)} className="text-red-500 ml-2" type="button">
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <button onClick={() => startEditing(index)} className="text-blue-500 px-2" type="button">
                    Edit
                  </button>
                 
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
