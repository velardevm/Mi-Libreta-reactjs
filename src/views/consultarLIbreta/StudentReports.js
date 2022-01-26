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
import { cibCcMastercard, cifUs, cilPeople } from '@coreui/icons'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import Summary from 'src/components/Summary'
import Calendar from 'src/components/Calendar'
import SummaryReportTitle from 'src/components/SummaryHeaders'

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

const StudentDiary = () => {
  const [count, setCount] = useState(0)
  const [date, setDate] = React.useState(new Date())
  return (
    <CRow>
      <CCol lg={4}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Consultar libreta</strong> <small></small>
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
            <strong>Calendario</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <Calendar date={date} setDate={setDate} />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={8}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Resumen</strong> <small>20 Febrero 2022</small>
          </CCardHeader>
          <CCardBody>
            <Summary />
            {/*             <SummaryReportTitle title={'New title'} /> */}
          </CCardBody>
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
const btnicon = {
  marginLeft: '10px',
  marginTop: '10px',
  display: 'block',
}

export default StudentDiary
