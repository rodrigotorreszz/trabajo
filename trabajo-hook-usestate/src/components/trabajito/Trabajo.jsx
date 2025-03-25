import React, { useState } from 'react';
import './Trabajo.css';

const Registro = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [carnet, setCarnet] = useState("");
    const [estudiantes, setEstudiantes] = useState([]);

    const agregarEstudiante = () => {
        // Validar que los campos no estén vacíos
        if (!nombre.trim() || !edad.trim() || !carnet.trim()) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        // Agregar un nuevo estudiante al arreglo
        setEstudiantes([
            ...estudiantes,
            { id: Date.now(), nombre: nombre, edad: edad, carnet: carnet }
        ]);
        // Limpiar los campos de entrada después de agregar
        setNombre("");
        setEdad("");
        setCarnet("");
    };

    return (
        <div className="Agregar-Estudiantes">
            {/* Inputs para nombre, edad y carnet */}
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <input
                type="text"
                placeholder="Carnet"
                value={carnet}
                onChange={(e) => setCarnet(e.target.value)}
            />
            {/* Botón para agregar estudiante */}
            <button onClick={agregarEstudiante}>Agregar</button>

            <h1>Listado</h1>

            {/* Mostrar el listado de estudiantes */}
            <ul className="Mostrar-Estudiantes">
                {estudiantes.map((estudiante) => (
                    <li className='estudiante' key={estudiante.id}>
                        <span >
                            Nombre: {estudiante.nombre}, Edad: {estudiante.edad}, Carnet: {estudiante.carnet}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Registro;









