import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { AdminHeader } from '../components/header/AdminHeader'

export const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
       <Grid>
         <Outlet />
       </Grid>
    </div>
  )
}
