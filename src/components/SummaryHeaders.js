import PropTypes from 'prop-types'
import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import { Col, Row, Card, Image, Button } from '@themesberg/react-bootstrap'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

const SummaryHeaders = (props) => {
  const { title } = props
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h6>
            Hoy estuve: Felíz <span> </span>
            <InsertEmoticonIcon sx={{ color: '#ffd700' }} fontSize="large" />
          </h6>
          {/*                 <Tabs value={'1'} aria-label="icon label tabs example">
                  <Tab
                    style={{ color: '#ffd700' }}
                    icon={<TagFacesIcon fontSize="large" />}
                    disabled
                    label="FELIZ"
                  />
                </Tabs> */}
        </Col>
        <Col className="text-end">
          <Button variant="secondary" disabled size="sm">
            Icon TZ
          </Button>
        </Col>
      </Row>
      <div className="small text-medium-emphasis">Fecha: 02/06/2019</div>
      <div className="small text-medium-emphasis">Hora: 12:28 a.m.</div>
      <br></br>
    </>
  )
}

SummaryHeaders.propTypes = {
  title: PropTypes.string,
}

export default React.memo(SummaryHeaders)
