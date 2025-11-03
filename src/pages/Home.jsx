import React from 'react'
import TaskManager from '../tasks/TaskManager'


export default function Home() {
return (
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h2 className="text-2xl font-bold mb-4">Task Manager</h2>
<TaskManager />
</div>
<div>
<h2 className="text-2xl font-bold mb-4">About</h2>
<div className="space-y-4">
<p className="text-gray-700 dark:text-gray-300">This sample app demonstrates component architecture, hooks, state management, and API integration.</p>
<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
<h3 className="font-semibold">Features</h3>
<ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
<li>Add, complete, delete, filter tasks</li>
<li>Persist tasks to localStorage via custom hook</li>
<li>Fetch posts from JSONPlaceholder with pagination and search</li>
<li>Responsive UI and dark mode</li>
</ul>
</div>
</div>
</div>
</div>
)
}