import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router'
import Footer from '../components/footer'

const Layout = () => {
  return (
   <>
    <Header />
    <Outlet />
    <Footer />
   </>
  )
}

export default Layout