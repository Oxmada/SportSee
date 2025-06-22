import React, { useEffect, useState } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import { getUserPerformance } from '../services/api';

function PerformanceRadarChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const formattedData = await getUserPerformance(12);
                setData(formattedData);
            } catch (error) {
                console.error('Erreur chargement des performances', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="performance-radar-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="subject"
                        stroke="#fff"
                        axisLine={false}
                        tickLine={false}
                        tickRadius={10}
                        tickSize={25}
                        tick={({ payload, x, y }) => (
                            <text
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize={12}
                                fontWeight={500}
                                fill="#FFFFFF"
                                dx={0}
                                dy={0}
                            >
                                {payload.value}
                            </text>
                        )}
                    />
                    <PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
                    <Radar
                        name="Performance"
                        dataKey="A"
                        stroke="#FF0101B2"
                        fill="#FF0101B2"
                        fillOpacity={1}
                    />
                </RadarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default PerformanceRadarChart;






