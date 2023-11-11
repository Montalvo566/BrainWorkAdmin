import React from 'react';
import { Table, Button} from 'react-bootstrap';

const DataTable = ({ data }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th>Descripción</th>
          <th>Materia</th>
          <th>Fecha de Entrega</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombreTareas}</td>
            <td>{item.descripcion}</td>
            <td>{item.materia}</td>
            <td>{item.fechaEntrega}</td>
            <td>
                <Button variant="info">
                    Editar
                </Button>{' '}
                <Button variant="danger">
                    Eliminar
                </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
