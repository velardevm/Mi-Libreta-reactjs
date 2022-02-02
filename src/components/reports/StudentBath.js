import React from 'react'
import {
  CCol,
  CButton,
  CRow,
  CButtonGroup,
  CCardBody,
  CFormCheck,
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

const BathReport = () => {
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
        <strong>Formulario</strong> <small>Baño</small>
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
              <Tab icon={<TagFacesIcon sx={{ fontSize: 30 }} />} label="FELIZ" />
              <Tab icon={<SentimentDissatisfiedIcon sx={{ fontSize: 30 }} />} label="ENOJADO" />
              <Tab icon={<SentimentVeryDissatisfiedIcon sx={{ fontSize: 30 }} />} label="TRISTE" />
            </Tabs>
          </CCol>
          <CCol xs={6} sm={6} lg={6}>
            <CFormLabel style={{ marginTop: '20px' }}>¿Fui al Baño?</CFormLabel>
            <CButtonGroup role="group" class="text-center" style={{ marginTop: '25px' }}>
              <CButton color="info" variant="outline">
                SÍ
              </CButton>
              <CButton color="info" variant="outline" style={{ marginLeft: '10px' }}>
                NO
              </CButton>
            </CButtonGroup>
          </CCol>
          <CCol xs={12} sm={12} lg={12} style={{ marginTop: '25px' }}>
            <CFormLabel>Observaciones de mi maestra</CFormLabel>
            <CFormSelect size="md" multiple aria-label="Multiple select example">
              <option value="1">MAMI NECESITO TOALLAS HÚMEDASPOR FAVOR,GRACIAS.</option>
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
      </CCardBody>
    </>
  )
}

const textArea = {
  marginLeft: '10px',
  marginTop: '25px',
}

export default BathReport
