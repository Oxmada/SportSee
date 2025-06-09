import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Profil from '../pages/Profil';


function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Profil />} />
            </Route>
        </Routes>
    )
}

export default Router;