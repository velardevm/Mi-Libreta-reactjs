import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormInput,
  CRow,
  CForm,
} from '@coreui/react'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import PropTypes from 'prop-types'

export const ModalConfiguration = (props) => {
  const { message, title, input, setInput, onFormSubmit, visible, setVisible } = props
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <Button
          onClick={() => setVisible(!visible)}
          loadingPosition="start"
          size="medium"
          startIcon={<AddCircleIcon />}
          variant="contained"
        >
          {title}
        </Button>
      </Box>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CForm onSubmit={onFormSubmit}>
          <CModalHeader>
            <CModalTitle>Nuevo titulo...</CModalTitle>
          </CModalHeader>
          <CModalBody className="text-center">
            <CCol md={12}>
              <CFormInput
                type="text"
                placeholder="Titulo de seccion"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value)
                }}
                required
              />
            </CCol>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Cancelar
            </CButton>
            <CButton onClick={() => setVisible(false)} color="primary" type="submit">
              Confirmar
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  )
}

ModalConfiguration.propTypes = {
  message: PropTypes.string,
  modalBody: PropTypes.string,
  input: PropTypes.string,
  setInput: PropTypes.func,
  onFormSubmit: PropTypes.func,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  title: PropTypes.string,
}

const Modal = (props) => {
  const [visible, setVisible] = useState(false)
  const { message, modalBody } = props
  return (
    <>
      <CButton style={buttonStyle} onClick={() => setVisible(!visible)}>
        {message}
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>¡Advertencia!</CModalTitle>
        </CModalHeader>
        <CModalBody className="text-center">{modalBody}</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cancelar
          </CButton>
          <CButton color="primary">Confirmar</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

const buttonStyle = {
  marginTop: '15px',
  marginBottom: '15px',
}

Modal.propTypes = {
  message: PropTypes.string,
  modalBody: PropTypes.string,
}

export default Modal
