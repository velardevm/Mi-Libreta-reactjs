import React, { useState } from 'react'
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap'
import Modal from './Modals'
import { CCardHeader } from '@coreui/react'

export const StudentInfoForm = () => {
  const [birthday, setBirthday] = useState('')

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <CCardHeader>
        <strong>Informacion general</strong>
      </CCardHeader>
      <Card.Body>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>Nombre(s)</Form.Label>
                <Form.Control required type="text" placeholder="ej: Ximena" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Apellido paterno</Form.Label>
                <Form.Control required type="text" placeholder="ej: Gonzalez" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Apellido materno</Form.Label>
                <Form.Control required type="text" placeholder="ej: Hernández" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="gender">
                <Form.Label>Grupo</Form.Label>
                <Form.Select defaultValue="0">
                  <option value="0">-- Seleccionar</option>
                  <option value="1">Maternal / A</option>
                  <option value="2">Maternal / B</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control required type="date" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="family" style={{ marginTop: '40px' }}>
                <Form.Check
                  label="Ya tengo un(a) hermano registrado."
                  id="checkbox1"
                  htmlFor="checkbox1"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <br></br>
            <Modal
              message={'Guardar informacion'}
              modalBody={'¿Está seguro que la informacion es correcta?'}
            />
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}
