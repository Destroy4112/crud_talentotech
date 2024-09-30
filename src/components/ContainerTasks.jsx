import React from 'react'

export default function ContainerTasks({ children }) {
    
    return (
        <div className="bg-gray-100 pt-10">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] mx-auto">
                {children}
            </div>
        </div>
    )
}
