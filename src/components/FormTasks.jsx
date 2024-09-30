import React from 'react'

export default function FormTasks({ task, setTask, handleSubmit, editIndex }) {

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-5 mb-4">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
                placeholder="Nueva tarea"
                required
            />
            <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 p-2 mt-2">
                {editIndex !== null ? 'Actualizar' : 'Agregar'}
            </button>
        </form>
    )
}
