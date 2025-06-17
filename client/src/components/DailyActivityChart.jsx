import React, { useEffect, useState } from 'react';
import { getUserActivity } from '../services/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DailyActivityChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUserActivity(12)
            .then(setData)
            .catch(console.error);
    }, []);

    const minValue = Math.min(...data.flatMap(item => [item.kilogram, item.calories]));
    const maxValue = Math.max(...data.flatMap(item => [item.kilogram, item.calories]));

    const middleValue = Math.round((minValue + (maxValue - minValue) / 2) / 10) * 10;
    const maxValueRounded = Math.round(maxValue / 10) * 10;; // Evite que la ligne max tombe sur maxValue exactement

    const yAxisTicks = [0, middleValue, maxValue]; // Affiche maxValue sans doublon

    return (
        <div className="daily-activity-chart">
            <ResponsiveContainer width="100%" height={250}>
                <BarChart
                    data={data}
                    barGap={8}
                    margin={{ left: 0, right: 40, bottom: 5 }}
                >
                    <text x={0} y={11} textAnchor="start" className="chart-title">
                        Activité quotidienne
                    </text>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        padding={{ left: 12, right: 12 }}
                        scale="point"
                        tick={({ x, y, payload }) => (
                            <text
                                x={x}
                                y={y + 24}
                                textAnchor="middle"
                                className="axis-text"
                            >
                                {payload.value}
                            </text>
                        )}
                    />
                    <YAxis
                        orientation="right"
                        tickMargin={40}
                        axisLine={false}
                        tickLine={false}
                        domain={[0, maxValueRounded]}
                        ticks={yAxisTicks}
                        tick={({ x, y, payload }) => (
                            <text
                                x={x}
                                y={y + 2}
                                textAnchor="middle"
                                className="axis-text"
                            >
                                {payload.value}
                            </text>
                        )}
                    />
                    <Tooltip />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        content={({ payload }) => (
                            <div className="legendContainer">
                                {payload.map((entry, index) => (
                                    <div key={`item-${index}`} className="legendItem">
                                        <div className="legendColorIndicator" style={{ backgroundColor: entry.color }}></div>
                                        {entry.value === 'kilogram' ? 'Poids (kg)' : entry.value === 'calories'
                                            ? 'Calories brûlées (kCal)' : entry.value}
                                    </div>
                                ))}
                            </div>
                        )}
                    />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default DailyActivityChart;

