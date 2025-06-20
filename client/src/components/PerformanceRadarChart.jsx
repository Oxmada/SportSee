import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, } from 'recharts';

const data = [
    { subject: 'Intensité', A: 70 },
    { subject: 'Vitesse', A: 80 },
    { subject: 'Force', A: 75 },
    { subject: 'Endurance', A: 85 },
    { subject: 'Énergie', A: 60 },
    { subject: 'Cardio', A: 65 },
];

function PerformanceRadarChart() {
    return (
        <div className="performance-radar-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid
                        radialLines={false}
                        stroke="#fff"
                        strokeWidth={1}
                        gridType="polygon"
                    />
                    <PolarAngleAxis
                        dataKey="subject"
                        stroke="#fff"
                        axisLine={false}
                        tickLine={false}
                        tick={({ payload, x, y, textAnchor }) => {
                            const isEndurance = payload.value === 'Endurance';
                            return (
                                <text
                                    x={x}
                                    y={isEndurance ? y + 10 : y}
                                    textAnchor={textAnchor}
                                    fontSize={12}
                                    fontWeight={500}
                                    fill="#FFFFFF"
                                >
                                    {payload.value}
                                </text>
                            );
                        }}
                    />
                    <PolarRadiusAxis tick={false} axisLine={false} tickCount={5} />
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




