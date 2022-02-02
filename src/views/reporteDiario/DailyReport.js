import React from 'react'
import {
  CAvatar,
  CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CLink,
  CRow,
  CFormInput,
  CFormLabel,
  CFormCheck,
  CFormSelect,
  CWidgetStatsF,
} from '@coreui/react'
import {
  cilArrowRight,
  cilCalculator,
  cilChartPie,
  cilBaby,
  cilRestaurant,
  cilNotes,
  cilSchool,
  cilSettings,
  cilGroup,
  cilStar,
  cilUserFemale,
} from '@coreui/icons'
import { v4 as uuidV4 } from 'uuid'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import Button from '@mui/material/Button'
import { StudentListPendings } from 'src/components/StudentCard'

const DailyReport = () => {
  const [orderList, setOrderList] = React.useState(1)
  const [section, setSection] = React.useState('')
  const [group, setGroup] = React.useState('')

  const buttons = [
    <Button key="Card" onClick={() => setOrderList(1)}>
      Card
    </Button>,
    <Button key="table" onClick={() => setOrderList(2)}>
      Table
    </Button>,
  ]

  const [value, setValue] = React.useState(new Date())
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Reportes por alumno</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '5px' }}>Sección</CFormLabel>
                <CFormSelect
                  style={{ marginBottom: '7px' }}
                  aria-label="Default select"
                  onChange={(e) => {
                    setSection({ section: e.target.value })
                  }}
                >
                  <option>-- Seleccionar</option>
                  <option value="maternal">Maternal</option>
                  <option value="prematernal">Prematernal</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '5px' }}>Grupo</CFormLabel>
                <CFormSelect
                  style={{ marginBottom: '7px' }}
                  aria-label="Default select"
                  onChange={(e) => {
                    setGroup({ section: e.target.value })
                  }}
                >
                  <option>-- Seleccionar</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
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
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Grupo</strong>
          </CCardHeader>
          <CCardBody>
            <StudentListPendings />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} md={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Reportes por alumno</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={6}>
                <CWidgetStatsF
                  className="mb-3"
                  color="warning"
                  footer={
                    <Link
                      style={{ textDecoration: 'none', color: '#1976D2' }}
                      to={{ pathname: '/reporteDiario/reportes' }}
                      className="font-weight-bold font-xs text-medium-emphasis"
                    >
                      Completar reporte
                      <CIcon icon={cilArrowRight} className="float-end" width={16} />
                    </Link>
                  }
                  icon={<CIcon icon={cilRestaurant} height={24} />}
                  title="Alimentos y estado de ánimo"
                />
              </CCol>
              <CCol xs={6}>
                <CWidgetStatsF
                  className="mb-3"
                  color="info"
                  footer={
                    <Link
                      style={{ textDecoration: 'none', color: '#1976D2' }}
                      to={{ pathname: '/reporteDiario/reportes' }}
                      className="font-weight-bold font-xs text-medium-emphasis"
                    >
                      Completar reporte
                      <CIcon icon={cilArrowRight} className="float-end" width={16} />
                    </Link>
                  }
                  icon={<CIcon icon={cilBaby} height={24} />}
                  title="Cambio de pañales"
                />
              </CCol>
              <CCol xs={6}>
                <CWidgetStatsF
                  className="mb-3"
                  color="success"
                  footer={
                    <Link
                      style={{ textDecoration: 'none', color: '#1976D2' }}
                      to={{ pathname: '/reporteDiario/reportes' }}
                      className="font-weight-bold font-xs text-medium-emphasis"
                    >
                      Completar reporte
                      <CIcon icon={cilArrowRight} className="float-end" width={16} />
                    </Link>
                  }
                  icon={<CIcon icon={cilSchool} height={24} />}
                  title="Observaciones academicas"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

const filterStyle = {
  marginLeft: '20px',
  marginRight: '10px',
  marginBottom: '15px',
}

export default DailyReport
