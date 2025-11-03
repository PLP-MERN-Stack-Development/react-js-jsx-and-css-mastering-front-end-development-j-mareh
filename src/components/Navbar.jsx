import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'


export default function Navbar() {
const { theme, setTheme } = useTheme()
return (
<nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Taskify</Link>
<div className="flex items-center gap-3">
<NavLink to="/" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600 dark:text-gray-300'}>Home</NavLink>
<NavLink to="/posts" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600 dark:text-gray-300'}>Posts</NavLink>
<Button variant="secondary" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
{theme === 'dark' ? 'Light' : 'Dark'}
</Button>
</div>
</div>
</div>
</nav>
)
}