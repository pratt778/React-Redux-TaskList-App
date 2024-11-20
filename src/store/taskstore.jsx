import { createStore } from "redux";

const initialState = {
  todos: [
    {
      tid: 0,
      taskname: "Wake up",
      priority: "Low",
    },
  ],
};


const generateID = () => {
  return Math.round(Math.random() * 9999);
};


const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      
      console.log("task name:", action.payload.taskname);
      console.log("priority:", action.payload.priority);

      return {
        ...state, 
        todos: [
          ...state.todos, 
          {
            tid: generateID(),
            taskname: action.payload.taskname,
            priority: action.payload.priority,
          },
        ],
      };

    case "Edit":
      console.log("Id:", action.payload.tid);
      console.log("edit task name:", action.payload.taskname);
      console.log("new priority:", action.payload.priority);

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.tid === action.payload.tid
            ? {
                ...todo,
                taskname: action.payload.taskname,
                priority: action.payload.priority,
              }
            : todo
        ),
      };

    case "Delete":
      console.log("delete action triggered");
      console.log("task id to delete:", action.payload.tid);

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.tid !== action.payload.tid),
      };

    default:
      console.log("invalid");
      return state;
  }
};


const TodoStore = createStore(TodoReducer);

export default TodoStore;
