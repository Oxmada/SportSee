import React, { useEffect, useState } from 'react';
import { getUserAverageSessions } from '../services/api';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, } from 'recharts';




function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                {`${payload[0].value} min`}
            </div>
        );
    }
    return null;
}

function CustomCursor({ points }) {
    const x = points[0].x;
    return (
        <rect
            x={x}
            y={0}
            width="100%"
            height="100%"
            fill="rgba(0, 0, 0, 0.1)"
        />
    );
}

function AverageSessionChart() {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const formattedData = await getUserAverageSessions(12);
            setData(formattedData);
        }
        fetchData();
    }, []);

    const gradientOffset = activeIndex !== null ? activeIndex / (data.length - 1) : 1;

    const handleMouseMove = (state) => {
        if (state && state.activeTooltipIndex !== undefined) {
            setActiveIndex(state.activeTooltipIndex);
        }
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="average-session-chart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 50, right: 0, bottom: 30, left: 0 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset={`${gradientOffset * 100}%`} stopColor="white" stopOpacity={0.5} />
                            <stop offset={`${gradientOffset * 100}%`} stopColor="white" stopOpacity={1} />
                            <stop offset="100%" stopColor="white" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        padding={{ left: 0, right: 0 }}
                        tick={{ fill: '#fff', fontSize: 12, fontWeight: 500, opacity: 0.5 }}
                        dy={15}
                        dx={-18}
                    />
                    <YAxis hide />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={<CustomCursor />}
                        offset={-20} // distance entre l'infobulle et le point (par défaut 10)
                    />

                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="url(#lineGradient)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            r: 4,
                            stroke: 'rgba(255, 255, 255, 0.3)',
                            strokeWidth: 10,
                            fill: '#fff',
                        }}
                        isAnimationActive={false}
                    />
                    <text className="chart-title" x="30" y="30">
                        <tspan x="30" dy="0">Durée moyenne des</tspan>
                        <tspan x="30" dy="16">sessions</tspan>
                    </text>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AverageSessionChart;
