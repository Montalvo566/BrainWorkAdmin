import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link} from "react-router-dom";
import "./styles.css";
import { IconContext } from "react-icons";
import Photo from "../img/doom.png";
import Modales from "./Modal";
import { Container, Row, Col } from 'react-bootstrap';
import DataTable from "./Tabla";


function Tareas() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [taskData, setTaskData] = useState([
    {
      id: 1,
      nombreTareas: 'FrontEnd',
      descripcion: 'Crear una aplicación usando ReactJs',
      materia: 'Programación 1',
      fechaEntrega: '2023-12-01',
    },
    {
      id: 2,
      nombreTareas: 'Base de datos',
      descripcion: 'Se debe crear una base de datos',
      materia: 'Programación 1',
      fechaEntrega: '2023-12-01',
    },
  ]);

  return (
    <>

      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 className="titulo">Tareas Asignadas</h2>
        </div>
        
        {/*Menu lateral de opciones*/}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
          
          <div className="spaUser">
            <img src={Photo} alt="Imagen de usuario"></img>
          </div>
          <div className="nameUser">
            <p>Angel Montalvo</p>
          </div>

          <Link to="/main" className='d-grid coll'>Menu Principal</Link>
          <Link to="/tareas" className='d-grid coll'>Tareas Asignadas</Link>
          <Link to="/calendario"  className="d-grid coll">Calendario</Link>
          <Link to="/recordatorio"  className="d-grid coll">Recordatorio</Link>
          <Link to="/"  className="d-grid cerrar">Cerrar Sesión</Link>
          </ul>
        </nav>

        {/*Modal para agregar tareas*/}
        <Modales></Modales>

        {/*Tabla de tareas asignadas*/}
        <Container>
          <Row>
            <Col>
              <h1>Tabla de tareas asignadas</h1>
              <DataTable data={taskData} />
            </Col>
          </Row>
        </Container>

      </IconContext.Provider>
    </>
  );
}

export default Tareas;
