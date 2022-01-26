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
import ButtonGroup from '@mui/material/ButtonGroup'
import { faUsers, faEllipsisH, faEye, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import Modal from 'src/components/Modals'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { StudentListGroup } from 'src/components/StudentCard'
import { StudentListTable } from 'src/components/StudentCard'

const Students = () => {
  const [loading, setLoading] = React.useState(false)
  const [studentList, setStudentList] = React.useState(true)
  const [orderList, setOrderList] = React.useState(1)
  function handleClick() {
    setLoading(true)
  }

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
            <strong>Alumnos</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '5px' }}>Sección</CFormLabel>
                <CFormSelect style={{ marginBottom: '7px' }} aria-label="Default select">
                  <option>-- Seleccionar</option>
                  <option value="1">Maternal</option>
                  <option value="2">Prematernal</option>
                </CFormSelect>
              </CCol>
              <CCol md={4}>
                <CFormLabel style={{ marginTop: '5px' }}>Grupo</CFormLabel>
                <CFormSelect style={{ marginBottom: '7px' }} aria-label="Default select">
                  <option>-- Seleccionar</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
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
          <Box
            className="d-grid gap-2 d-md-flex justify-content-md-end"
            sx={{ '& > button': { m: 1 }, marginBottom: '10px' }}
          >
            <ButtonGroup size="large" aria-label="large button group">
              {buttons}
            </ButtonGroup>
            <Link
              style={{ textDecoration: 'none', color: '#1976D2' }}
              to={{ pathname: '/consultarLibreta/estudianteDetalles' }}
            >
              <Button
                onClick={handleClick}
                loading={loading}
                loadingPosition="start"
                startIcon={<AddCircleIcon studentList={studentList} />}
                variant="contained"
              >
                Registrar alumno
              </Button>
            </Link>
          </Box>
        </CCol>
      </CRow>
      <CCol xs={12}>{orderList === 1 ? <StudentListGroup /> : <StudentListTable />}</CCol>
    </CRow>
  )
}

const filterStyle = {
  marginLeft: '20px',
  marginRight: '10px',
  marginBottom: '15px',
}

export default Students
