import React from 'react';
import './App.css';
import Header from './component/header';
import TaskContainer from './component/task-cont';
import AddTask from './component/addTask';

function App() {
  return (
    <>
      <Header />
      <TaskContainer />
      <AddTask />
    </>
  );
}

export default App;
