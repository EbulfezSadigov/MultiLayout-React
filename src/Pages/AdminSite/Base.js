import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'

function Base() {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>
    </div>
  )
}

export default Base