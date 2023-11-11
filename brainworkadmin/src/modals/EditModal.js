import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const EditModales = () => {
  const [show, setShow] = useState(false);
  const [taskData, setTaskData] = useState({
    taskName: '',
    description: '',
    dueDate: '',
    subject: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Datos del formulario:', taskData);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formTaskName">
              <Form.Label>Nombre de la tarea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre de la tarea"
                name="taskName"
                value={taskData.taskName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción"
                name="description"
                value={taskData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Nombre de la materia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre de la materia"
                name="subject"
                value={taskData.subject}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDueDate">
              <Form.Label>Fecha de entrega</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={taskData.dueDate}
                onChange={handleChange}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit">
              Editar Tarea
            </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModales;
