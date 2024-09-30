import React from 'react';

export default function CardsTasks({ tasks, handleDeleteTask, handleEditTask }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
            {tasks.map((task, index) => (
                <div key={index} className="border border-gray-200 p-4 rounded-lg text-gray-700 shadow-md flex flex-col justify-between h-full">
                    <span className="font-semibold break-words">{task}</span>
                    <div className="flex justify-between mt-2">
                        <button 
                            className="text-blue-500 hover:text-blue-700"
                            onClick={() => handleEditTask(index)}
                        >
                            Editar
                        </button>
                        <button 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDeleteTask(index)}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
