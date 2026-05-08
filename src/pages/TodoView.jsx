import { useState } from "react";

const TodoView = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (todo === "") return;

    setList([...list, todo]);

    setTodo("");
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="bg-white p-12 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-bold text-slate-800 mb-10">Todo App</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Tambah Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-4 rounded-xl"
          >
            Tambah
          </button>
        </div>

        <div className="mt-10 space-y-4">
          {list.map((item, index) => (
            <div key={index} className="bg-slate-100 p-5 rounded-xl">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoView;
