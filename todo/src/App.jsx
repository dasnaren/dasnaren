import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const handelSubmit = (event) => {
    event.preventDefault();
    const data = event.target.todo.value;
    if (!todoList.includes(data)) {
      const finalData = [...todoList, data];
      setTodoList(finalData);
      event.target.todo.value = "";
    } else {
      alert("TODO already exist");
    }
  };
  const list = todoList.map((item, index) => {
    return (
      <TodoList
        value={item}
        key={index}
        indexNumber={index}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    );
  });
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-96">
          <span className="text-3xl font-semibold">TODO LIST</span>
          <form onSubmit={handelSubmit}>
            <div className="mt-4">
              <input
                type="text"
                name="todo"
                className="w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Add a new task..."
              />
              <button className="mt-2 w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                Submit
              </button>
            </div>
          </form>
          <ul className="mt-4 space-y-3">{list}</ul>
        </div>
      </div>
    </>
  );
}

export default App;

const TodoList = ({ value, indexNumber, todoList, setTodoList }) => {
  const handelDelete = () => {
    const filterData = todoList.filter((v, i) => i != indexNumber);
    setTodoList(filterData);
  };
  return (
    <>
      <li className="flex items-center justify-between bg-green-700 p-3 rounded-lg shadow-md">
        <span>
          {indexNumber + 1}. {value}
        </span>
        <button
          className="text-red-500 hover:text-red-700 font-bold"
          onClick={handelDelete}
        >
          Delete
        </button>
      </li>
    </>
  );
};
