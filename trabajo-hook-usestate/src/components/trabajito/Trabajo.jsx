import React, { useState } from 'react';

const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");
    const [estudiantes, setEstudiantes] = useState([])

    const agregarEstudiante = () => {
        if (task.trim() === "") return; 
        setTodos([...todos, { id: Date.now(), nombre: nombre, edad: edad, carnet: carnet }]);
        setTask(""); // Limpiar el input
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                        <button onClick={() => eliminarToDo(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
 
};

export default Registro;









