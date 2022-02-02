import React, { useState } from 'react'
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
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Button from '@mui/material/Button'
import FoodReport from '../../components/reports/StudentFood'
import DiaperReport from '../../components/reports/StudentDiaper'
import NapReport from '../../components/reports/StudentNap'
import BathReport from '../../components/reports/StudentBath'
import AcademicReport from '../../components/reports/AcademicObservations'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import AirlineSeatFlatAngledIcon from '@mui/icons-material/AirlineSeatFlatAngled'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { Row, Col, Nav, Tab } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faComments, faSun, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { cibCcMastercard, cifUs, cilPeople } from '@coreui/icons'
import '../../components/styles/ReportItemsMenu.css'

import avatar1 from 'src/assets/images/avatars/1.jpg'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Jazmin Cisneros Torres',
      new: true,
      registered: 'Maternal / A',
    },
    country: { name: 'USA', flag: cifUs },
    usage: {
      value: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    payment: { name: 'Mastercard', icon: cibCcMastercard },
    activity: '10 sec ago',
  },
]

const Reports = () => {
  const [count, setCount] = useState(1)
  return (
    <CRow>
      <CCol lg={4}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Reporte de alimentos</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    <CIcon icon={cilPeople} />
                  </CTableHeaderCell>
                  <CTableHeaderCell>Alumno</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tableExample.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell className="text-center">
                      <CAvatar size="lg" src={item.avatar.src} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.user.name}</div>
                      <div className="small text-medium-emphasis">{item.user.registered}</div>
                      <div className="small text-medium-emphasis">Cumpleaños: 02/06/2019</div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Reportes</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <Col lg={12}>
              <Nav
                defaultActiveKey="alimentos"
                variant="pills"
                className="rounded flex-column flex-md-row"
              >
                <Nav.Item style={btnform} onClick={() => setCount(1)}>
                  <Nav.Link eventKey="alimentos" className="mb-sm-3 mb-md-0">
                    <RestaurantIcon fontSize="small" className="me-2" />
                    Alimentos y estado de ánimo
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={btnform} onClick={() => setCount(2)}>
                  <Nav.Link eventKey="pañales" href="#" className="mb-sm-5 mb-md-0">
                    <AccessibilityNewIcon icon={faUserCircle} className="me-2" />
                    Cambio de pañales
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={btnform} onClick={() => setCount(3)}>
                  <Nav.Link eventKey="siestas" href="#" className="mb-sm-3 mb-md-0">
                    <AirlineSeatFlatAngledIcon fontSize="small" className="me-2" /> Siestas
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={btnform} onClick={() => setCount(4)}>
                  <Nav.Link eventKey="baño" href="#" className="mb-sm-3 mb-md-0">
                    <EmojiEmotionsIcon fontSize="small" className="me-2" /> Baño
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item style={btnform} onClick={() => setCount(5)}>
                  <Nav.Link eventKey="observaciones" href="#" className="mb-sm-3 mb-md-0">
                    <MenuBookIcon fontSize="small" className="me-2" />
                    Observaciones academicas
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={8}>
        <CCard className="mb-4">
          {count === 1 ? (
            <FoodReport />
          ) : count === 2 ? (
            <DiaperReport />
          ) : count === 3 ? (
            <NapReport />
          ) : count === 4 ? (
            <BathReport />
          ) : (
            <AcademicReport />
          )}
          <div
            style={{ marginTop: '19px' }}
            className="d-grid gap-2 d-md-flex justify-content-md-end"
          >
            <CButton style={{ marginBottom: '25px', marginRight: '18px' }} color="primary">
              Guardar cambios
            </CButton>
          </div>
        </CCard>
      </CCol>
    </CRow>
  )
}

const btnform = {
  marginLeft: '10px',
  marginTop: '10px',
  width: '95%',
}
const navStyle = {
  backgroundColor: 'info',
}

export default Reports
