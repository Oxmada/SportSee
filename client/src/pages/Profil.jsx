import { useEffect, useState } from 'react';
import { getUser } from '../services/api';
import AverageSessionChart from '../components/AverageSessionChart';
import DailyActivityChart from '../components/DailyActivityChart';
import NutritionCard from '../components/NutritionCard';
import PerformanceRadarChart from '../components/PerformanceRadarChart';
import ScoreRadialChart from '../components/ScoreRadialChart';



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
            <div className='user-container'>
                <p className='user-title'>Bonjour <span className="user-name">{data.name}</span></p>
                <p className='user-subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='main-container'>
                <div className="graph-container">
                    <div className="top-graph">
                        <DailyActivityChart />
                    </div>
                    <div className="bottom-graphs">
                        <AverageSessionChart />
                        <PerformanceRadarChart />
                        <ScoreRadialChart />
                    </div>
                </div>
                <div className='nutrition-cards-container'>
                    <NutritionCard />
                </div>
            </div>

        </div>
    );
}

export default Profil
