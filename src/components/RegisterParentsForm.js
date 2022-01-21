import React, { useState } from 'react'
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap'
import Modal from './Modals'
import { CCardHeader, CFormInput } from '@coreui/react'

export const ParentsInfoForm = () => {
  const [birthday, setBirthday] = useState('')

  return (
    <Row className="justify-content-md-center">
      <Col xs lg="8">
        <Card border="light" className="bg-white shadow-sm">
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
                  <Form.Group id="lastName">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control required type="email" placeholder="example@hola.com" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="emal">
                    <Form.Label>Teléfono celular (10 digitos)</Form.Label>
                    <Form.Control required type="text" placeholder="(33)123 123 12" />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="family">
                    <Form.Label>Contraseña</Form.Label>
                    <CFormInput type="password" placeholder="Password" />
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
      </Col>
    </Row>
  )
}
