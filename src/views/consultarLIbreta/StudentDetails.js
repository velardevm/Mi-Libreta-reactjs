import * as React from 'react'
import BasicTabs from 'src/components/TabPanel'
import {
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButtonGroup,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'

const StudentDetails = () => {
  return (
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>React Button Group</strong> <span>Mixed styles</span>
        </CCardHeader>
        <CCardBody>
          <BasicTabs />
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default StudentDetails
