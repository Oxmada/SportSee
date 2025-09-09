import { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../services/api';
import { useUser } from './UserContext';

function PerformanceRadarChart() {
    const { userId, useMock } = useUser();
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const formattedData = await getUserPerformance(userId, useMock);
                setData(formattedData);
            } catch (error) {
                console.error('Erreur chargement des performances', error);
            }
        }
        fetchData();
    }, [userId, useMock]);

    return (
        <div className="performance-radar-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="subject" stroke="#fff" axisLine={false} tickLine={false} tick={({ payload, x, y }) => (
                        <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight={500} fill="#FFFFFF">{payload.value}</text>
                    )} />
                    <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
                    <Radar name="Performance" dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={1} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceRadarChart;







