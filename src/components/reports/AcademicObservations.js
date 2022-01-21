import React from 'react'
import {
  CCol,
  CButton,
  CRow,
  CCardBody,
  CFormFloating,
  CCardHeader,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CFormInput,
} from '@coreui/react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

const AcademicReport = () => {
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
        <strong>Formulario</strong> <small>Observaciones academicas</small>
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
              <Tab icon={<TagFacesIcon fontSize="large" />} label="FELIZ" />
              <Tab icon={<SentimentDissatisfiedIcon fontSize="large" />} label="ENOJADO" />
              <Tab icon={<SentimentVeryDissatisfiedIcon fontSize="large" />} label="TRISTE" />
            </Tabs>
          </CCol>
          <CCol xs={6} sm={6} lg={6}>
            <CFormLabel style={{ marginTop: '20px' }}>Observaciones academicas</CFormLabel>
            <CFormSelect aria-label="Default select" style={{ marginTop: '22px' }}>
              <option>-- Seleccionar</option>
              <option value="1">Mami hoy practique nuevos conceptos gramaticales</option>
            </CFormSelect>
          </CCol>
          <CFormFloating>
            <CFormTextarea
              id="floatingTextarea2"
              style={{ height: '150px', marginTop: '25px' }}
            ></CFormTextarea>
            <CFormLabel htmlFor="floatingTextarea2" style={textArea}>
              Notas de mi maestra
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

export default AcademicReport
