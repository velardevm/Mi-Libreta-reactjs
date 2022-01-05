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
} from '@coreui/react'
import { DocsExample } from 'src/components'
import CIcon from '@coreui/icons-react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cilPeople,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Jazmin Cisneros Torres',
      new: true,
      registered: 'Jan 1, 2021',
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

const Colors = () => {
  return (
    <CRow>
      <CCol lg={5}>
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
                      <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.user.name}</div>
                      <div className="small text-medium-emphasis">
                        <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                        {item.user.registered}
                      </div>
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
            <Stack direction="row" spacing={2}>
              <Button size="large" variant="outlined" startIcon={<DeleteIcon />}>
                Alimentacion y estado de animo
              </Button>
            </Stack>
            <Stack style={{ marginTop: '10px' }} direction="row" spacing={2}>
              <Button size="large" variant="outlined" startIcon={<DeleteIcon />}>
                Pañales
              </Button>
            </Stack>
            <Stack style={{ marginTop: '10px' }} direction="row" spacing={2}>
              <Button size="large" variant="outlined" startIcon={<DeleteIcon />}>
                Siestas
              </Button>
            </Stack>
            <Stack style={{ marginTop: '10px' }} direction="row" spacing={2}>
              <Button size="large" variant="outlined" startIcon={<DeleteIcon />}>
                Observaciones
              </Button>
            </Stack>
            <Stack style={{ marginTop: '10px' }} direction="row" spacing={2}>
              <Button size="large" variant="outlined" startIcon={<DeleteIcon />}>
                Observaciones academicas
              </Button>
            </Stack>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol lg={7}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Badges</strong> <small>Dismissing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Bootstrap badge scale to suit the size of the parent element by using relative font
              sizing and <code>em</code> units.
            </p>
            <p className="text-medium-emphasis small">
              Badges can be used as part of links or buttons to provide a counter.
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Colors
