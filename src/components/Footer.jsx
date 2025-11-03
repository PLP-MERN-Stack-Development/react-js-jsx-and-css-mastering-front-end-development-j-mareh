import React from 'react'


export default function Footer() {
return (
<footer className="mt-12 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
<div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
<div className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Taskify</div>
<div className="space-x-4">
<a href="#" className="text-sm text-gray-600 dark:text-gray-300">Privacy</a>
<a href="#" className="text-sm text-gray-600 dark:text-gray-300">Terms</a>
</div>
</div>
</footer>
)
}