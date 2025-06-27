import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <SideNav />
                <div className="content">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default Layout;