import React, {useState} from 'react';
import { Table, Pagination, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditModales from './EditModal';

const DataTable = ({ data }) => {

  //Constantes de la funcion de paginacion y busqueda
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Lógica para la paginación
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = searchResults.length > 0 ? searchResults.slice(indexOfFirstTask, indexOfLastTask) : data.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Lógica para la búsqueda
  const handleSearch = () => {
    const filteredResults = data.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    setSearchResults(filteredResults);
    setCurrentPage(1); // Reiniciar a la primera página después de la búsqueda
  };

  return (
    <div>

      {/*Funcion para realizar la busqueda de registros*/}
      <div className='d-flex justify-content-end mb-3'>
        <input
          className='form-control'
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-primary mx-2' onClick={handleSearch}>Buscar</button>
        <button className='btn btn-danger' onClick={() => { setSearchResults([]); setSearchTerm(''); }}>Cancelar</button>
      </div>

      {/*Tabla de las tareas asignadas */}
      <Table striped bordered hover responsive className='text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Descripción</th>
            <th>Materia</th>
            <th>Fecha de Entrega</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          { currentTasks.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombreTareas}</td>
              <td>{item.descripcion}</td>
              <td>{item.materia}</td>
              <td>{item.fechaEntrega}</td>
              <td>
                  <EditModales></EditModales>
              </td>
              <td>
                  <Button className='btn btn-danger'>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/*Funcion para realizar la paginacion*/}
      <Pagination className='d-flex justify-content-end mb-3'>
        {Array.from({ length: Math.ceil(data.length / tasksPerPage) }).map(
          (item, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>

    </div>
  );
};

export default DataTable;
