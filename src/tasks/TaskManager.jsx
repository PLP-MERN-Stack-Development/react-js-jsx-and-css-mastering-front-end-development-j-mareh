import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";         // ✅ Correct path
import Button from "../components/Button";     // ✅ Correct path
import useLocalStorage from "../hooks/useLocalStorage"; // ✅ Correct path

// --- Task Row ---
function TaskRow({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="cursor-pointer"
        />
        <span
          className={`select-none ${
            task.done ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>
      <Button variant="danger" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </div>
  );
}

// --- Main Task Manager ---
export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks_v1", []);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("Tasks updated:", tasks.length);
  }, [tasks]);

  // --- Add new task ---
  function addTask(e) {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      done: false,
    };
    setTasks([newTask, ...tasks]);
    setTitle("");
  }

  // --- Toggle completion ---
  function toggleTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  // --- Delete task ---
  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  // --- Filter logic ---
  const filtered = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "completed") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <Card>
      {/* Add task input */}
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          className="flex-1 px-3 py-2 rounded border dark:border-gray-700 bg-white dark:bg-gray-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task..."
        />
        <Button type="submit">Add</Button>
      </form>

      {/* Filter buttons */}
      <div className="mb-4 flex gap-2">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      {/* Task list */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="text-gray-500 text-center py-4">No tasks</div>
        ) : (
          filtered.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </Card>
  );
}

