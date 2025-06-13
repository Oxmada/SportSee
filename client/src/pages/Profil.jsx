import { useEffect, useState } from 'react';
import { getUser } from '../services/api';
import SideIcons from '../components/SideIcons';
import AverageSessionChart from '../components/AverageSessionChart';
import DailyActivityChart from '../components/DailyActivityChart';
import NutritionCard from '../components/NutritionCard';
import PerformanceRadarChart from '../components/PerformanceRadarChart';


function Profil() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getUser(12)
            .then(res => {
                console.log(res);
                setData(res);
            })
            .catch(console.error);
    }, []);


    if (!data) return <p>Chargement...</p>;

    return (
        <div>
        </div>
    );
}

export default Profil
