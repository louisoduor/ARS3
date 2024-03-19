import { useState } from 'react'

import './App.css'
import AdminMainPage from './Admin/mainpage'
import RequestAdminPage from './Admin/requests'
import AddAssetPage from './Admin/add'
import AssignFormPage from './Admin/assign'
import AccountAdminPage from './Admin/accountAdmin'
import UserAccountPage from './User/accountUser'
import UserMainPage from './User/mainpage(user)'
import MyRequestPage from './User/myRequest'
import RequestFormPage from './User/requestform'
import LoginPage from './Auth/login'

function App() {


  return (
    <>
    {/* LOGIN */}
    <LoginPage/>

    {/* ADMIN */}
    <AdminMainPage/>
    <RequestAdminPage/>
    <AddAssetPage/>
    <AssignFormPage/>
    <AccountAdminPage/>

    {/* USER */}
    <UserMainPage/>
    <UserAccountPage/>
    <MyRequestPage/>
    <RequestFormPage/>

    </>
  )
}

export default App
