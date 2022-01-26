import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Card, Image, Button } from '@themesberg/react-bootstrap'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
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
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { faAddressBook, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import profile5 from 'src/assets/images/avatars/profile-picture-5.jpg'
import profile6 from 'src/assets/images/avatars/5.jpg'
import profile7 from 'src/assets/images/avatars/6.jpg'
import ProfileCover from 'src/assets/images/avatars/profile-cover.jpg'
import Modal from './Modals'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const tableExample = [
  {
    avatar: { src: avatar1, status: 'success' },
    user: {
      name: 'Yiorgos Avraamu',
      new: true,
      registered: 'Maternal / A',
    },
    usage: {
      value: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    activity: '10 sec ago',
  },
  {
    avatar: { src: avatar2, status: 'danger' },
    user: {
      name: 'Avram Tarasios',
      new: false,
      registered: 'Maternal / A',
    },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'info',
    },
    activity: '5 minutes ago',
  },
  {
    avatar: { src: avatar3, status: 'warning' },
    user: { name: 'Quintin Ed', new: true, registered: 'Maternal / A' },
    usage: {
      value: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'warning',
    },
    activity: '1 hour ago',
  },
  {
    avatar: { src: avatar4, status: 'secondary' },
    user: { name: 'Enéas Kwadwo', new: true, registered: 'Maternal / A' },
    usage: {
      value: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'danger',
    },
    activity: 'Last month',
  },
  {
    avatar: { src: avatar5, status: 'success' },
    user: {
      name: 'Agapetus Tadeáš',
      new: true,
      registered: 'Maternal / A',
    },
    usage: {
      value: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'primary',
    },
    activity: 'Last week',
  },
  {
    avatar: { src: avatar6, status: 'danger' },
    user: {
      name: 'Friderik Dávid',
      new: true,
      registered: 'Maternal / A',
    },
    usage: {
      value: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      color: 'success',
    },
    activity: 'Last week',
  },
]

export const ProfileCardWidget = (props) => {
  const { studentList } = props
  return (
    <>
      <Card border="light" className="text-center p-0 mb-4">
        {studentList === false ? (
          <Avatar
            alt="Remy Sharp"
            src={profile5}
            sx={{ width: 126, height: 126, marginTop: '40px' }}
            className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
          />
        ) : (
          <Avatar
            alt="Remy Sharp"
            src={profile5}
            sx={{ width: 86, height: 86, marginTop: '40px' }}
            className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
          />
        )}

        <CCardBody>
          <Card.Title>Jazmin Cisneros Rivera</Card.Title>
          <Card.Subtitle className="fw-normal">Maternal / B</Card.Subtitle>
          <Card.Text className="text-gray mb-4">Cumpleaños: 02/06/2019</Card.Text>
          <Button variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faUserPlus} className="me-1" />
            Modificar datos
          </Button>
          <Button variant="secondary" size="sm">
            Seleccionar foto
            <input type="file" hidden />
          </Button>
        </CCardBody>
      </Card>
    </>
  )
}

ProfileCardWidget.propTypes = {
  studentList: PropTypes.bool,
}

export const StudentListGroup = () => {
  return (
    <>
      <CRow>
        <CCol md={3}>
          <Card border="light" className="text-center p-0 mb-4">
            <Avatar
              alt="Remy Sharp"
              src={profile6}
              sx={{ width: 86, height: 86, marginTop: '30px' }}
              className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-2"
            />
            <CCardBody>
              <Card.Title>Jazmin Cisneros Rivera</Card.Title>
              <div className="small text-medium-emphasis">Maternal / B</div>
              <div className="small text-medium-emphasis mb-2">Cumpleaños: 02/06/2019</div>
              <Stack className="d-flex justify-content-center" direction="row" spacing={1}>
                <IconButton aria-label="delete" color="primary">
                  <Link
                    style={{ textDecoration: 'none', color: '#1976D2' }}
                    to={{ pathname: '/consultarLibreta/estudianteDetalles' }}
                  >
                    <FontAwesomeIcon href="" icon={faEdit} className="me-1" />
                  </Link>
                </IconButton>
                <IconButton color="primary" aria-label="add an alarm">
                  <Link
                    style={{ textDecoration: 'none', color: '#1976D2' }}
                    to={{ pathname: '/consultarLibreta/estudianteLibreta' }}
                  >
                    <FontAwesomeIcon href="" icon={faAddressBook} className="me-1" />
                  </Link>
                </IconButton>
                <IconButton className="text-danger" aria-label="add to shopping cart">
                  <FontAwesomeIcon href="" icon={faTrashAlt} className="me-1" />
                </IconButton>
              </Stack>
            </CCardBody>
          </Card>
        </CCol>
        <CCol md={3}>
          <Card border="light" className="text-center p-0 mb-4">
            <Avatar
              alt="Remy Sharp"
              src={profile7}
              sx={{ width: 86, height: 86, marginTop: '30px' }}
              className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-2"
            />
            <CCardBody>
              <Card.Title>Mateo Torres Hernandez</Card.Title>
              <div className="small text-medium-emphasis">Maternal / B</div>
              <div className="small text-medium-emphasis mb-2">Cumpleaños: 02/06/2019</div>
              <Stack className="d-flex justify-content-center" direction="row" spacing={1}>
                <IconButton aria-label="delete" color="primary">
                  <Link
                    style={{ textDecoration: 'none', color: '#1976D2' }}
                    to={{ pathname: '/consultarLibreta/estudianteDetalles' }}
                  >
                    <FontAwesomeIcon href="" icon={faEdit} className="me-1" />
                  </Link>
                </IconButton>
                <IconButton color="primary" aria-label="add an alarm">
                  <Link
                    style={{ textDecoration: 'none', color: '#1976D2' }}
                    to={{ pathname: '/consultarLibreta/estudianteLibreta' }}
                  >
                    <FontAwesomeIcon href="" icon={faAddressBook} className="me-1" />
                  </Link>
                </IconButton>
                <IconButton className="text-danger" aria-label="add to shopping cart">
                  <FontAwesomeIcon href="" icon={faTrashAlt} className="me-1" />
                </IconButton>
              </Stack>
            </CCardBody>
          </Card>
        </CCol>
        <CCol md={3}>
          <Card border="light" className="text-center p-0 mb-4">
            <Avatar
              alt="Remy Sharp"
              src={profile5}
              sx={{ width: 86, height: 86, marginTop: '30px' }}
              className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-2"
            />
            <CCardBody>
              <Card.Title>Ana Saucedo Gonzalez</Card.Title>
              <div className="small text-medium-emphasis">Maternal / B</div>
              <div className="small text-medium-emphasis mb-2">Cumpleaños: 02/06/2019</div>
              <Stack className="d-flex justify-content-center" direction="row" spacing={1}>
                <IconButton aria-label="delete" color="primary">
                  <Link
                    style={{ textDecoration: 'none', color: '#1976D2' }}
                    to={{ pathname: '/consultarLibreta/estudianteDetalles' }}
                  >
                    <FontAwesomeIcon href="" icon={faEdit} className="me-1" />
                  </Link>
                </IconButton>
                <IconButton color="primary" aria-label="add an alarm">
                  <Link
                    style={{ textDecoration: 'none', color: '#1976D2' }}
                    to={{ pathname: '/consultarLibreta/estudianteLibreta' }}
                  >
                    <FontAwesomeIcon href="" icon={faAddressBook} className="me-1" />
                  </Link>
                </IconButton>
                <IconButton
                  onClick={
                    <Modal
                      message={'Enviar reportes seleccionados'}
                      modalBody={'¿Está seguro de enviar los reportes seleccionados?'}
                    />
                  }
                  className="text-danger"
                  aria-label="add to shopping cart"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="me-1" />
                </IconButton>
              </Stack>
            </CCardBody>
          </Card>
        </CCol>
      </CRow>
    </>
  )
}

export const StudentListTable = () => {
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Alumno</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Seccion / grupo</CTableHeaderCell>
                    <CTableHeaderCell>Cumpleaños</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Padres</CTableHeaderCell>
                    <CTableHeaderCell>Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        {/*                         <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

const handleChange = (newValue) => {
  console.log('clickeando')
}

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            <Image fluid rounded src={photo} />
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FontAwesomeIcon icon={faPaperclip} className="me-3" />
                </span>
                <input type="file" />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

ChoosePhotoWidget.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
}
