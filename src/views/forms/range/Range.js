import React from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
  CFormLabel,
  CFormCheck,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap'
import Box from '@mui/material/Box'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DatePicker'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

const Range = () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Envio de reportes</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '20px' }}>Fecha</CFormLabel>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Custom input"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue)
                    }}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <input ref={inputRef} {...inputProps} />
                        {InputProps?.endAdornment}
                      </Box>
                    )}
                  />
                </LocalizationProvider>
              </CCol>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '20px' }}>Seccion y grupo</CFormLabel>
                <CFormSelect aria-label="Default select example">
                  <option>Todos</option>
                  <option value="1">Maternal / A</option>
                  <option value="2">Maternal / B</option>
                  <option value="3">Maternal / C</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '20px' }}>Buscar alumno</CFormLabel>
                <CFormInput
                  type="text"
                  id="exampleFormControlInput1ddddddd"
                  placeholder="Nombre o ID"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Maternal / A</strong> <small></small>
            </CCardHeader>
            <CCardBody>
              <CTable striped>
                <CTableHead className="text-center">
                  <CTableRow>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col">Alumno</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Grupo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Reportes pendientes</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Reportes completados</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className="text-center">
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label="" />
                    </CTableHeaderCell>
                    <CTableDataCell className="text-center">Mark</CTableDataCell>
                    <CTableDataCell>Maternal / A</CTableDataCell>
                    <CTableDataCell className="text-success">
                      <strong>0</strong>
                    </CTableDataCell>
                    <CTableDataCell className="text-success">
                      <strong>5</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          as={Button}
                          split
                          variant="link"
                          className="text-dark m-0 p-0"
                        >
                          <span className="icon icon-lg">
                            <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEye} className="me-2" /> Ver detalles
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar
                          </Dropdown.Item>
                          <Dropdown.Item className="text-danger">
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Borrar
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label="" />
                    </CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Maternal / A</CTableDataCell>
                    <CTableDataCell className="text-warning">
                      <strong>2</strong>
                    </CTableDataCell>
                    <CTableDataCell className="text-warning">
                      <strong>3</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          as={Button}
                          split
                          variant="link"
                          className="text-dark m-0 p-0"
                        >
                          <span className="icon icon-lg">
                            <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEye} className="me-2" /> Ver detalles
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar
                          </Dropdown.Item>
                          <Dropdown.Item className="text-danger">
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Borrar
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">
                      <CFormCheck id="flexCheckDefault" label="" />
                    </CTableHeaderCell>
                    <CTableDataCell>Larry the Bird</CTableDataCell>
                    <CTableDataCell>Maternal / A</CTableDataCell>
                    <CTableDataCell className="text-warning">
                      <strong>3</strong>
                    </CTableDataCell>
                    <CTableDataCell className="text-warning">
                      <strong>2</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                          as={Button}
                          split
                          variant="link"
                          className="text-dark m-0 p-0"
                        >
                          <span className="icon icon-lg">
                            <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                          </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEye} className="me-2" /> Ver detalles
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar
                          </Dropdown.Item>
                          <Dropdown.Item className="text-danger">
                            <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Borrar
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <CButton disabled color="primary">
              Enviar reportes seleccionados
            </CButton>
          </div>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Range
