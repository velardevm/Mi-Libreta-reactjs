import PropTypes from 'prop-types'
import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHappy, cilMediaPlay, cilCode } from '@coreui/icons'
import packageJson from '../../package.json'
import Summary from './Summary'

const SummaryHeaders = (props) => {
  const { children, sectionTitle } = props
  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink active>
            <CIcon icon={cilHappy} className="me-2" />
            {sectionTitle}
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

SummaryHeaders.propTypes = {
  children: PropTypes.node,
  sectionTitle: PropTypes.string,
}

export default React.memo(SummaryHeaders)
