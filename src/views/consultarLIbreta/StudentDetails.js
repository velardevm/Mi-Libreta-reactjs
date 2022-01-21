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
import avatar3 from 'src/assets/images/avatars/3.jpg'
import { StudentInfoForm } from 'src/components/RegisterStudentForm'
import { ChoosePhotoWidget, ProfileCardWidget } from 'src/components/StudentCard'
import { ParentsInfoForm } from 'src/components/RegisterParentsForm'

// Material Dashboard 2 React components
import MDBox from 'src/components/MDBox'

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const StudentDetails = () => {
  const [activeKey, setActiveKey] = useState(1)
  const [tabValue, setTabValue] = useState(0)
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleSetTabValue = (event, newValue) => setTabValue(newValue)

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
              Alumno
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              Papá
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              Mamá
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 4}
              onClick={() => setActiveKey(4)}
            >
              Lista de distribucion
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
              <Col xs={12} xl={4}>
                <Row>
                  <Col xs={12}>
                    <ProfileCardWidget />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} xl={8}>
                <StudentInfoForm />
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
              <ParentsInfoForm />
            </CCol>
          </CTabPane>
          <CTabPane
            style={{ backgroundColor: '#ecedef', marginTop: '20px' }}
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 3}
          >
            <ParentsInfoForm />
          </CTabPane>
          <CTabPane
            style={{ backgroundColor: '#ecedef', marginTop: '20px' }}
            role="tabpanel"
            aria-labelledby="contact-tab"
            visible={activeKey === 4}
          >
            tho
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

const tabsStyle = {
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}

export default StudentDetails
