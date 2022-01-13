import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import CalendarPicker from '@mui/lab/CalendarPicker'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

const Calendar = (props) => {
  const { date, setDate } = props
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  setDate: PropTypes.func,
}

export default React.memo(Calendar)
