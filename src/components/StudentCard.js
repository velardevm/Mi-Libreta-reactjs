import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Card, Image, Button } from '@themesberg/react-bootstrap'
import PropTypes from 'prop-types'
import Avatar from '@mui/material/Avatar'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'

import profile5 from 'src/assets/images/avatars/profile-picture-5.jpg'
import ProfileCover from 'src/assets/images/avatars/profile-cover.jpg'

export const ProfileCardWidget = () => {
  return (
    <>
      <Card border="light" className="text-center p-0 mb-4">
        <Avatar
          alt="Remy Sharp"
          src={profile5}
          sx={{ width: 156, height: 177, marginTop: '40px' }}
          className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
        />
        <CCardBody>
          <Card.Title>Neil Sims</Card.Title>
          <Card.Subtitle className="fw-normal">Senior Software Engineer</Card.Subtitle>
          <Card.Text className="text-gray mb-4">New York, USA</Card.Text>
          <Button variant="primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Connect
          </Button>
          <Button variant="secondary" size="sm">
            Send Message
            <input type="file" hidden />
          </Button>
        </CCardBody>
        {/*         <CListGroup flush>
          <CListGroupItem>Cras justo odio</CListGroupItem>
          <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
          <CListGroupItem>Vestibulum at eros</CListGroupItem>
        </CListGroup>
        <CCardBody>
          <CCardLink href="#">Card link</CCardLink>
          <CCardLink href="#">Another link</CCardLink>
        </CCardBody> */}
      </Card>
    </>
  )
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
