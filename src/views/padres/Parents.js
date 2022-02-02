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
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Form, ButtonGroup, InputGroup } from '@themesberg/react-bootstrap'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { StudentListGroup } from 'src/components/StudentCard'
import { StudentListTable } from 'src/components/StudentCard'

const Parents = () => {
  const [loading, setLoading] = React.useState(false)
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

  return (
    <CRow>
      <CCol xs={12}>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <h4>Transactions</h4>
            <p className="mb-0">Your web analytics dashboard template.</p>
          </div>
        </div>
        <div className="table-settings mb-4">
          <Row className="justify-content-between align-items-center">
            <Col xs={8} md={6} lg={3} xl={4}>
              <InputGroup>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search" />
              </InputGroup>
            </Col>
            <Col xs={4} md={6} xl={6} className="ps-md-0 text-end">
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
                    startIcon={<AddCircleIcon />}
                    variant="contained"
                  >
                    Registrar alumno
                  </Button>
                </Link>
              </Box>
            </Col>
          </Row>
        </div>
      </CCol>
      <CCol xs={12}>{orderList === 1 ? <StudentListGroup /> : <StudentListTable />}</CCol>
    </CRow>
  )
}

const filterStyle = {
  marginLeft: '20px',
  marginRight: '10px',
  marginBottom: '15px',
}

export default Parents
