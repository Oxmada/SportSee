import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, Customized } from 'recharts';
import { getUserActivity } from '../services/api';
import { useUser } from './UserContext';

function HighlightRect({ activeBar }) {
    if (!activeBar) return null;
    return <Rectangle x={parseFloat(activeBar.x) - 35} y={55} width={parseFloat(activeBar.width) + 56} height={200} fill="#C4C4C480" stroke="#C4C4C480" />;
}

function DailyActivityChart() {
    const { userId, useMock } = useUser();
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeBar, setActiveBar] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const formattedData = await getUserActivity(userId, useMock);
            setData(formattedData);
        }
        fetchData();
    }, [userId, useMock]);

    const minValue = Math.min(...data.flatMap(item => [item.kilogram, item.calories]));
    const maxValue = Math.max(...data.flatMap(item => [item.kilogram, item.calories]));
    const middleValue = Math.round((minValue + (maxValue - minValue) / 2) / 10) * 10;
    const maxValueRounded = Math.round(maxValue / 10) * 10;
    const yAxisTicks = [0, middleValue, maxValueRounded];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const kilo = payload.find(p => p.dataKey === "kilogram");
            const cal = payload.find(p => p.dataKey === "calories");
            return (
                <div className="custom-tooltip">
                    <div>{kilo?.value}kg</div>
                    <div>{cal?.value}kcal</div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="daily-activity-chart">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    barGap={8}
                    margin={{ left: 0, right: 40, bottom: 5 }}
                    onMouseLeave={() => { setActiveIndex(null); setActiveBar(null); }}
                >
                    <text x={0} y={11} className="chart-title">Activité quotidienne</text>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" padding={{ left: 12, right: 12 }} scale="point" />
                    <YAxis orientation="right" domain={[0, maxValueRounded]} ticks={yAxisTicks} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Legend verticalAlign="top" align="right" />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                        onMouseOver={(d, index, e) => { setActiveIndex(index); setActiveBar({ x: e.target.getAttribute('x'), width: e.target.getAttribute('width') }); }}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                        onMouseOver={(d, index, e) => { setActiveIndex(index); setActiveBar({ x: e.target.getAttribute('x'), width: e.target.getAttribute('width') }); }}
                    />
                    <Customized component={<HighlightRect activeBar={activeBar} />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default DailyActivityChart;


