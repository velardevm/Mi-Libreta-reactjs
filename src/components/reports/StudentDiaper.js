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
  CFormCheck,
  CFormSelect,
} from '@coreui/react'
import TextField from '@mui/material/TextField'
import CIcon from '@coreui/icons-react'
import DesktopTimePicker from '@mui/lab/DesktopTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
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

const DiaperReport = () => {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'))
  const handleChange = (newValue) => {
    setValue(newValue)
  }
  return (
    <CRow>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel htmlFor="inputCity">Fecha</CFormLabel>
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
      </CCol>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel htmlFor="inputCity">Hora</CFormLabel>
        <Stack component="form" noValidate spacing={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopTimePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Stack>
      </CCol>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel style={{ marginTop: '20px' }}>Hoy estuve</CFormLabel>
      </CCol>
      <CCol xs={6} sm={6} lg={6}>
        <CFormLabel style={{ marginTop: '20px' }}>Cambio de pañal</CFormLabel>
        <CButtonGroup role="group" class="text-center">
          <CFormCheck
            inline
            type="radio"
            name="inlineRadioOptions"
            id="inlineCheckbox1"
            value="option1"
            label="Pipi"
          />
          <CFormCheck
            inline
            type="radio"
            name="inlineRadioOptions"
            id="inlineCheckbox2"
            value="option2"
            label="Popo"
          />
          <CFormCheck
            inline
            type="radio"
            name="inlineRadioOptions"
            id="inlineCheckbox2"
            value="option2"
            label="Ninguno"
          />
        </CButtonGroup>
      </CCol>
      <CCol xs={12} sm={12} lg={12} style={{ marginTop: '25px' }}>
        <CFormLabel>Observaciones de mi maestra</CFormLabel>
        <CFormSelect size="md" multiple aria-label="Multiple select example">
          <option value="1">MAMI NECESITO TOALLAS HÚMEDASPOR FAVOR, GRACIAS.</option>
          <option value="2">MAMI ME HACEN FALTA PAÑALES Y TOALLITAS HÚMEDAS POR FAVOR</option>
        </CFormSelect>
      </CCol>
      <CFormFloating>
        <CFormTextarea
          id="floatingTextarea2"
          style={{ height: '100px', marginTop: '25px' }}
        ></CFormTextarea>
        <CFormLabel htmlFor="floatingTextarea2" style={textArea}>
          Comentarios
        </CFormLabel>
      </CFormFloating>
    </CRow>
  )
}

const textArea = {
  marginLeft: '10px',
  marginTop: '25px',
}

export default DiaperReport
