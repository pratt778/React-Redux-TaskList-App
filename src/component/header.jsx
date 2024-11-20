const Header=()=>{


  const handleTask=()=>{
    console.log("clicked")
    let addtask = document.getElementById("addtask")
    addtask.classList.toggle("active")
  }

  return <>
    <div className="header-cont">
      <h1>Task List</h1>
      <button id="h-button" onClick={handleTask}>+ Add Task</button>
    </div>
  </>
}

export default Header;