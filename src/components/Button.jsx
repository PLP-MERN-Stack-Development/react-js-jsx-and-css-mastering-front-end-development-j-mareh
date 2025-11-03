import React from 'react'
import clsx from 'clsx'


export default function Button({ children, variant = 'primary', className = '', ...props }) {
const base = 'px-4 py-2 rounded-md font-semibold focus:outline-none transition-transform active:scale-95'
const variants = {
primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200',
danger: 'bg-red-500 text-white hover:bg-red-600',
}
return (
<button className={clsx(base, variants[variant], className)} {...props}>
{children}
</button>
)
}