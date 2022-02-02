import React from 'react'
import {
  CCol,
  CButton,
  CRow,
  CButtonGroup,
  CTable,
  CCard,
  CFormCheck,
  CCardBody,
  CFormFloating,
  CCardHeader,
  CFormLabel,
  CFormTextarea,
  CFormInput,
} from '@coreui/react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

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
    <>
      <CCardHeader>
        <strong>Formulario</strong> <small>Alimentacion y estado de animo</small>
      </CCardHeader>
      <CCardBody>
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
              <Tab icon={<TagFacesIcon sx={{ fontSize: 30 }} />} label="Feliz" />
              <Tab icon={<SentimentDissatisfiedIcon sx={{ fontSize: 30 }} />} label="Enojado" />
              <Tab icon={<SentimentVeryDissatisfiedIcon sx={{ fontSize: 30 }} />} label="Triste" />
            </Tabs>
          </CCol>
          <CCol xs={6} sm={6} lg={6}>
            <CFormLabel style={{ marginTop: '20px' }}>Cantidad de comida</CFormLabel>
            <br></br>
            <CButtonGroup role="group" class="text-center" style={{ marginTop: '15px' }}>
              <CFormCheck
                type="radio"
                button={{ color: 'info', variant: 'outline' }}
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                label="Mucho"
              />
              <CFormCheck
                type="radio"
                button={{ color: 'info', variant: 'outline' }}
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                label="Poco"
              />
              <CFormCheck
                type="radio"
                button={{ color: 'info', variant: 'outline' }}
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
                label="Nada"
              />
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
      </CCardBody>
    </>
  )
}

const textArea = {
  marginLeft: '10px',
  marginTop: '25px',
}

export default FoodReport
