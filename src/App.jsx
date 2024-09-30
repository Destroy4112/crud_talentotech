import React from 'react';
import CardsTasks from './components/CardsTasks';
import ContainerTasks from './components/ContainerTasks';
import FormTasks from './components/FormTasks';
import Tittle from './components/Tittle';
import useTasks from './hook/useTasks';

function App() {

  const { task, tasks, editIndex, setTask, handleSubmit, handleDelete, handleEdit } = useTasks();

  return (
    <ContainerTasks>
      <div className='w-[80%]'>
        <Tittle />
        <FormTasks task={task} setTask={setTask} handleSubmit={handleSubmit} editIndex={editIndex} />
      </div>
      <CardsTasks tasks={tasks} handleDeleteTask={handleDelete} handleEditTask={handleEdit} />
    </ContainerTasks>
  );
}

export default App;
