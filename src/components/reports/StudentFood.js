import React from 'react'
import {
  CCol,
  CButton,
  CRow,
  CButtonGroup,
  CTable,
  CFormFloating,
  CFormLabel,
  CFormTextarea,
  CFormInput,
} from '@coreui/react'
import TextField from '@mui/material/TextField'
import CIcon from '@coreui/icons-react'
import DesktopTimePicker from '@mui/lab/DesktopTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import Stack from '@mui/material/Stack'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
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

const FoodReport = () => {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'))
  const [mood, setMood] = React.useState(0)
  const handleChange = (newValue) => {
    setMood(newValue)
  }
  const handleMood = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <CRow>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel htmlFor="inputCity">Fecha</CFormLabel>
        <CFormInput type="date" id="calendar" style={{ marginBottom: '7px' }} />
      </CCol>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel htmlFor="inputCity">Hora</CFormLabel>
        <CFormInput type="time" id="calendar" style={{ marginBottom: '7px' }} />
      </CCol>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel style={{ marginTop: '20px' }}>Hoy estuve:</CFormLabel>
        <Tabs value={value} onChange={handleMood} aria-label="icon label tabs example">
          <Tab icon={<TagFacesIcon fontSize="large" />} label="FELIZ" />
          <Tab icon={<SentimentDissatisfiedIcon fontSize="large" />} label="ENOJADO" />
          <Tab icon={<SentimentVeryDissatisfiedIcon fontSize="large" />} label="TRISTE" />
        </Tabs>
      </CCol>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel style={{ marginTop: '20px' }}>Cantidad de comida</CFormLabel>
        <CButtonGroup role="group" class="text-center" style={{ marginTop: '20px' }}>
          <CButton color="primary" variant="outline">
            Mucho
          </CButton>
          <CButton color="primary" variant="outline" style={{ marginLeft: '10px' }}>
            Poquito
          </CButton>
          <CButton color="primary" variant="outline" style={{ marginLeft: '10px' }}>
            Nada
          </CButton>
        </CButtonGroup>
      </CCol>
      <CFormFloating>
        <CFormTextarea
          id="floatingTextarea2"
          style={{ height: '150px', marginTop: '25px' }}
        ></CFormTextarea>
        <CFormLabel htmlFor="floatingTextarea2" style={textArea}>
          Observaciones de mi maestra
        </CFormLabel>
      </CFormFloating>
    </CRow>
  )
}

const textArea = {
  marginLeft: '10px',
  marginTop: '25px',
}

export default FoodReport
