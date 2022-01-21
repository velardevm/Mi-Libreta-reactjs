import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPopover,
  CRow,
  CTooltip,
} from '@coreui/react'
import PropTypes from 'prop-types'

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
