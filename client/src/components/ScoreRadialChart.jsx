import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { getUser } from '../services/api';

function ScoreRadialChart() {
    const [score, setScore] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getUser(12);
                setScore(user.score);
            } catch (error) {
                console.error('Erreur chargement score:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="scoreRadialChart">
            <h4>Score</h4>
            <div className="chartContainer">
                <RadialBarChart
                    width={180}
                    height={180}
                    innerRadius="100%"
                    outerRadius="100%"
                    barSize={10}
                    data={[{ value: score * 100, fill: '#FF0000' }]}
                    startAngle={90}
                    endAngle={450}
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar dataKey="value" cornerRadius={10} background={{ fill: '#FBFBFB' }} />
                </RadialBarChart>
                <div className="centralText">
                    <p>{score * 100}%</p>
                    <p>de votre objectif</p>
                </div>
            </div>
        </div>
    );
}

export default ScoreRadialChart;




