import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap'
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
import { cilChartPie, cilList, cilHappy, cilSearch } from '@coreui/icons'
import { ParentsInfoForm } from 'src/components/RegisterParentsForm'
import FormConfiguration from 'src/components/FormConfiguration'
import { v4 as uuidV4 } from 'uuid'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const Configuration = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([
    { id: uuidV4(), title: 'Prematernal.' },
    { id: uuidV4(), title: 'Maternal' },
    { id: uuidV4(), title: 'Primero' },
    { id: uuidV4(), title: 'Segundo' },
  ])
  const [cantidades, setCantidades] = useState([
    { id: uuidV4(), title: 'Mucho.' },
    { id: uuidV4(), title: 'Poquito' },
    { id: uuidV4(), title: 'Nada' },
    { id: uuidV4(), title: 'Solo lo que le gusta' },
  ])
  const [animo, setanimo] = useState([
    { id: uuidV4(), title: 'Feliz.' },
    { id: uuidV4(), title: 'Enojado' },
    { id: uuidV4(), title: 'Triste' },
  ])
  const [activeKey, setActiveKey] = useState(1)
  const [editTodo, setEditTodo] = useState('')

  /*   useEffect(() => {
      const observationsTemp = [
        { id: uuidV4(), title: 'MAMI NECESITO TOALLAS HÚMEDASPOR FAVOR, GRACIAS.' },
        { id: uuidV4(), title: 'MAMI ME HACEN FALTA PAÑALES Y TOALLITAS HÚMEDAS POR FAVOR' },
      ]
    }, []); */

  return (
    <>
      <div className="example">
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              <CIcon icon={cilList} className="me-2" />
              Secciones
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              <CIcon icon={cilChartPie} className="me-2" />
              Cantidades
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              <CIcon icon={cilHappy} className="me-2" />
              Estado de ánimo
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 4}
              onClick={() => setActiveKey(4)}
            >
              <CIcon icon={cilSearch} className="me-2" />
              Observaciones
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent style={{ backgroundColor: 'blue' }}>
          <CTabPane
            style={{ backgroundColor: '#ecedef', marginTop: '20px' }}
            role="tabpanel"
            aria-labelledby="home-tab"
            visible={activeKey === 1}
          >
            <Row>
              <Col>
                <FormConfiguration
                  input={input}
                  setInput={setInput}
                  todos={todos}
                  setTodos={setTodos}
                  editTodo={editTodo}
                  setEditTodo={setEditTodo}
                  cardTitle="Secciones actuales"
                  titleButton={'Registrar sección'}
                />
              </Col>
            </Row>
          </CTabPane>
          <CTabPane
            style={{ backgroundColor: '#ecedef', marginTop: '20px' }}
            role="tabpanel"
            aria-labelledby="profile-tab"
            visible={activeKey === 2}
          >
            <CCol>
              <FormConfiguration
                input={input}
                setInput={setInput}
                todos={cantidades}
                setTodos={setCantidades}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                cardTitle="Plantillas cantidades"
                titleButton={'Registrar cantidad'}
              />
            </CCol>
          </CTabPane>
          <CTabPane
            style={{ backgroundColor: '#ecedef', marginTop: '20px' }}
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 3}
          >
            <FormConfiguration
              input={input}
              setInput={setInput}
              todos={animo}
              setTodos={setanimo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              cardTitle="Plantillas estado de ánimo"
              titleButton={'Registrar estado de ánimo'}
            />
          </CTabPane>
          <CTabPane
            style={{ backgroundColor: '#ecedef', marginTop: '20px' }}
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 4}
          >
            <FormConfiguration
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              cardTitle="Plantillas observaciones"
              titleButton={'Registrar plantilla'}
            />
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default Configuration
