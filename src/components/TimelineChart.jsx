import React from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';

const TimelineChart = ({chartData}) => {

    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={chartData}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="10%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                nameKey={"name"}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            >

                {
                    chartData.map((entry, index) => (
                    <Pie key={index} fill={entry.fill} />
                    ))
                }
            </Pie>
            <Legend />
        </PieChart>
    );
};

export default TimelineChart;