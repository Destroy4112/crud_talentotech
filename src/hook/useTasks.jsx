import { useState } from 'react';

export default function useTasks() {

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return alert('Ingrese una tarea');

        if (editIndex !== null) {
            const updatedTasks = tasks.map((t, index) => (index === editIndex ? task : t));
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            setTasks([...tasks, task]);
        }
        setTask('');
    };

    const handleDelete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleEdit = (index) => {
        setTask(tasks[index]);
        setEditIndex(index);
    };

    return {
        task,
        tasks,
        editIndex,
        handleSubmit,
        handleDelete,
        handleEdit,
        setTask
    }
}
