import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link} from "react-router-dom";
import "./styles.css";
import { IconContext } from "react-icons";
import Photo from "../img/doom.png"


function Tareas() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 className="titulo">Tareas Asignadas</h2>
        </div>
        
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

        <h1 className="prop">Tareas asignadas</h1>
      </IconContext.Provider>
    </>
  );
}

export default Tareas;
