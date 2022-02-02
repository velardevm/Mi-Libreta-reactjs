import React from 'react'
import {
  CCol,
  CButton,
  CRow,
  CButtonGroup,
  CTable,
  CCardBody,
  CFormFloating,
  CCardHeader,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormCheck,
  CFormSelect,
} from '@coreui/react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import { v4 as uuidV4 } from 'uuid'
import '../styles/ReportsForms.css'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

const DiaperReport = () => {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'))
  const [mood, setMood] = React.useState(0)
  const observationsTemp = [
    { id: uuidV4(), title: 'MAMI NECESITO TOALLAS HÚMEDASPOR FAVOR, GRACIAS.' },
    { id: uuidV4(), title: 'MAMI ME HACEN FALTA PAÑALES Y TOALLITAS HÚMEDAS POR FAVOR' },
  ]

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handleMood = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <CCardHeader>
        <strong>Formulario</strong> <small>Cambio de pañales</small>
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
            <CFormLabel style={{ marginTop: '20px' }}>Cambio de pañal</CFormLabel>
            <CButtonGroup role="group" class="text-center" style={{ marginTop: '25px' }}>
              <CButtonGroup role="group" class="text-center">
                <CButton color="info" variant="outline">
                  Pipi
                </CButton>
                <CButton color="info" variant="outline" style={{ marginLeft: '10px' }}>
                  Popo
                </CButton>
                <CButton color="info" variant="outline" style={{ marginLeft: '10px' }}>
                  Ninguno
                </CButton>
              </CButtonGroup>
            </CButtonGroup>
          </CCol>
          <CCol xs={12} sm={12} lg={12} style={{ marginTop: '25px' }}>
            <CFormLabel>Observaciones de mi maestra</CFormLabel>
            <div>
              {observationsTemp.map((item) => (
                <li className="list-item" key={item.id}>
                  <input
                    type="text"
                    value={item.title}
                    className="list"
                    onChange={(event) => event.preventDefault()}
                  />
                  <div>
                    <AutoFixHighIcon sx={{ color: 'rgb(35, 144, 216)' }} />
                  </div>
                </li>
              ))}
            </div>
          </CCol>
          <CFormFloating>
            <CFormTextarea
              id="floatingTextarea2"
              style={{ height: '100px', marginTop: '15px' }}
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
  marginTop: '15px',
}

export default DiaperReport
