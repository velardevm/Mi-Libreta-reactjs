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
  CFormLabel,
  CFormTextarea,
  CFormCheck,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import { v4 as uuidV4 } from 'uuid'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import '../styles/ReportsForms.css'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

const NapReport = () => {
  const [value, setValue] = React.useState(new Date('2018-01-01T00:00:00.000Z'))
  const [mood, setMood] = React.useState(0)
  const observationsTemp = [
    { id: uuidV4(), title: 'HOY ME COSTÓ UN POCO DE TRABAJO QUEDARME DORMIDO.' },
    { id: uuidV4(), title: 'ME DORMÍ MUY PRONTO ESTABA MUY CANSADO' },
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
        <strong>Formulario</strong> <small>Siestas</small>
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
            <CFormLabel style={{ marginTop: '20px' }}>Horario de siesta</CFormLabel>
            <CRow>
              <CCol md={6}>
                <CFormLabel>De:</CFormLabel>
                <CFormInput type="time" id="calendar" style={{ marginBottom: '7px' }} />
              </CCol>
              <CCol md={6}>
                <CFormLabel>A:</CFormLabel>
                <CFormInput type="time" id="calendar" style={{ marginBottom: '7px' }} />
              </CCol>
            </CRow>
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

export default NapReport
