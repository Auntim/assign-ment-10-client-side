import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function Root() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)]   mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default Root
