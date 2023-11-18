import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBell, FaEnvelope} from 'react-icons/fa';
import './styles.css';


const DisenoMenu = () => {
  const [date, setDate] = useState(new Date());
  return (
    
    <div>

      <div style={{ display: 'flex', padding: '30px' }}>
        <h3 className='notificaciones'>Notificaciones</h3>
        <FaBell style={{ fontSize: '38px', color: 'Blue', cursor: 'pointer'}} />
      </div>

        {/* Sección de Tareas */}
        <div className="menu-section">
          <h2 className='color'>Tareas Asignadas</h2>

          <div className="task-subsection">
            <div className="task-section">
              <h4>Sección 1</h4>
              <p>Contenido de la sección 1</p>
            </div>
            {/* Sección 2 */}
            <div className="task-section">
              <h4>Sección 2</h4>
              <p>Contenido de la sección 2</p>
            </div>
            {/* Sección 3 */}
            <div className="task-section">
              <h4>Sección 3</h4>
              <p>Contenido de la sección 3</p>
            </div>
            {/* Sección 4 */}
            <div className="task-section">
              <h4>Sección 4</h4>
              <p>Contenido de la sección 4</p>
            </div>

          </div>
          {/* Botón al final del div "Hacer Esto" */}
          <button className="btn btn-primary float-end">Abrir Tareas</button>
        </div>

        {/* Sección de Calendario */}
        <div className="menu-section">
          <h2 className='color'>Calendario</h2>
          <div className="calendar-section">
            <p>{date.toDateString()}</p>
            <Calendar onChange={setDate} value={date} />
          </div>
          {/* Botón al final del div de Calendario */}
          <button className="btn btn-primary float-end">Abrir Calendario</button>
        </div>

        {/* Sección de Recordatorio */}
        <div className="menu-section">
          <h2 className='color'>Recordatorio</h2>
          <div className="reminder-subsection">

            {/* Sección 1 */}
            <div className="reminder-section">
              <h4>Recordatorio 1</h4>
              <p>Contenido del recordatorio 1</p>
            </div>
            {/* Sección 2 */}
            <div className="reminder-section">
              <h4>Recordatorio 2</h4>
              <p>Contenido del recordatorio 2</p>
            </div>
            {/* Sección 3 */}
            <div className="reminder-section">
              <h4>Recordatorio 3</h4>
              <p>Contenido del recordatorio 3</p>
            </div>
            {/* Sección 4 */}
            <div className="reminder-section">
              <h4>Recordatorio 4</h4>
              <p>Contenido del recordatorio 4</p>
            </div>

          </div>
          {/* Botón al final del div "Recordatorio" */}
          <button className="btn btn-primary float-end">Abrir Recordatorio</button>
        </div>

    </div>
  );
};

export default DisenoMenu;