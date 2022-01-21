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
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faEllipsisH, faEye, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap'

const SearchDiary = () => {
  const [value, setValue] = React.useState(new Date())
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Consultar libreta virtual</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '5px' }}>Buscar fecha</CFormLabel>
                <CFormInput type="date" id="calendar" style={{ marginBottom: '7px' }} />
              </CCol>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '5px' }}>Seccion y grupo</CFormLabel>
                <CFormSelect style={{ marginBottom: '7px' }} aria-label="Default select">
                  <option>Todos</option>
                  <option value="1">Maternal / A</option>
                  <option value="2">Maternal / B</option>
                  <option value="3">Maternal / C</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '5px' }}>Buscar alumno</CFormLabel>
                <CFormInput
                  type="text"
                  id="searchStudent"
                  style={{ marginBottom: '7px' }}
                  placeholder="Nombre o ID"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CRow>
        <CCol xs={12}>
          <CFormCheck style={filterStyle} id="filter" label="" defaultChecked />
          <FontAwesomeIcon icon={faUsers} className="me-2" /> Ordenar alfabeticamente
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Maternal / A</strong> <small></small>
            </CCardHeader>
            <CCardBody>
              <CTable striped>
                <CTableHead className="text-center">
                  <CTableRow>
                    <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Alumno</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Grupo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Fecha de admisión</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody className="text-center">
                  <CTableRow>
                    <CTableDataCell className="text-center">1356</CTableDataCell>
                    <CTableDataCell className="text-center">Mark</CTableDataCell>
                    <CTableDataCell>Maternal / A</CTableDataCell>
                    <CTableDataCell className="text-success">
                      <strong>0</strong>
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
                            <Link
                              style={{ textDecoration: 'none', color: '#4F5D73' }}
                              to={{ pathname: '/consultarLibreta/estudianteDetalles' }}
                            >
                              <FontAwesomeIcon href="" icon={faEye} className="me-2" />
                              Vér detalles alumno
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link
                              style={{ textDecoration: 'none', color: '#4F5D73' }}
                              to={{ pathname: '/consultarLibreta/estudianteLibreta' }}
                            >
                              <FontAwesomeIcon href="" icon={faAddressBook} className="me-2" />
                              Vér libreta
                            </Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>1599</CTableDataCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Maternal / A</CTableDataCell>
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
                            <FontAwesomeIcon icon={faEye} className="me-2" /> Vér detalles alumno
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faAddressBook} className="me-2" /> Vér libreta
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>2486</CTableDataCell>
                    <CTableDataCell>Larry the Bird</CTableDataCell>
                    <CTableDataCell>Maternal / A</CTableDataCell>
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
                            <FontAwesomeIcon icon={faEye} className="me-2" /> Vér detalles alumno
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <FontAwesomeIcon icon={faAddressBook} className="me-2" /> Vér libreta
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CRow>
  )
}

const filterStyle = {
  marginLeft: '20px',
  marginRight: '10px',
  marginBottom: '15px',
}
export default SearchDiary
