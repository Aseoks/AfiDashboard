import React from 'react'
import { Header, BookingTable, FormUpdate } from '../components'

const Bookings = () => {
  return (
    <div>
      <Header title='Bookings'/>
      <FormUpdate/>
      <BookingTable/>
    </div>
  )
}

export default Bookings