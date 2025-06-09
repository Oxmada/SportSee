import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <SideNav />
        </>
    )
}

export default Layout