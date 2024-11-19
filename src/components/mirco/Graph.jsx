// src/components/micro/Graph.jsx
import React from 'react';
import {
    LineChart, Line, PieChart, Pie, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
    ResponsiveContainer
} from 'recharts';

const formatCurrency = (value) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${value.toLocaleString()}`;
};
import { chartStyles } from '@/utils/chartStyles';
import { COLORS } from '@/utils/colors';

const Graph = ({ type, data, chartConfig = {} }) => {
    if (!data?.labels || !data?.datasets) return null;

    const formattedData = data.labels.map((label, i) => ({
        name: label,
        ...data.datasets.reduce((acc, dataset) => ({
            ...acc,
            [dataset.label || 'value']: dataset.data[i]
        }), {})
    }));

    const commonProps = {
        width: "100%",
        height: 400,
        margin: { top: 20, right: 30, left: 60, bottom: 20 }
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (!active || !payload) return null;

        return (
            <div className="bg-white p-4 border rounded shadow-lg">
                <p className="font-semibold text-gray-800 border-b pb-2 mb-2">{label}</p>
                {payload.map((item, index) => (
                    <p key={index} className="flex items-center gap-2 py-1">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                        <span className="font-medium">{item.name}:</span>
                        <span className="text-gray-600">{formatCurrency(item.value)}</span>
                    </p>
                ))}
            </div>
        );
    };

    // Enhanced render methods with better styling
    const renderLineChart = () => (
        <LineChart {...commonProps} data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
                dataKey="name"
                label={{ value: chartConfig?.xAxis?.label, position: 'bottom', offset: 0 }}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                stroke="#d1d5db"
            />
            <YAxis
                label={{
                    value: chartConfig?.yAxis?.label,
                    angle: -90,
                    position: 'insideLeft',
                    offset: -10
                }}
                tickFormatter={formatCurrency}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                stroke="#d1d5db"
                domain={[0, 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{ paddingTop: '20px' }}
            />
            {data.datasets.map((dataset, index) => (
                <Line
                    key={index}
                    name={dataset.label}
                    type="monotone"
                    dataKey={dataset.label}
                    stroke={dataset.color || COLORS.primary[index]}
                    strokeWidth={2}
                    dot={{ fill: dataset.color || COLORS.primary[index], strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                />
            ))}
        </LineChart>
    );

    const renderPieChart = () => (
        <PieChart {...commonProps}>
            <Pie
                data={formattedData}
                cx="50%"
                cy="50%"
                innerRadius={chartStyles.pie.style.innerRadius}
                outerRadius={chartStyles.pie.style.outerRadius}
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                labelLine={{ stroke: "#9CA3AF", strokeWidth: 1 }}
            >
                {formattedData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={data.datasets[0].colors[index % data.datasets[0].colors.length]}
                    />
                ))}
            </Pie>
            <Tooltip
                formatter={formatCurrency}
                contentStyle={chartStyles.common.tooltip.contentStyle}
            />
            {/* <Legend
                layout={chartConfig?.legend?.position === 'right' ? 'vertical' : 'horizontal'}
                align="center"
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{
                    fontSize: chartStyles.common.fontSize,
                    fontFamily: chartStyles.common.fontFamily
                }}
            /> */}
        </PieChart>
    );

    const renderHistogram = () => (
        <BarChart {...commonProps} data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
                dataKey="name"
                label={{
                    value: chartConfig?.xAxis?.label,
                    position: 'bottom',
                    offset: 0
                }}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                stroke="#d1d5db"
            />
            <YAxis
                label={{
                    value: chartConfig?.yAxis?.label,
                    angle: -90,
                    position: 'insideLeft'
                }}
                tickFormatter={value => value.toFixed(0)}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                stroke="#d1d5db"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{ paddingTop: '20px' }}
            />
            <Bar
                name={data.datasets[0].label}
                dataKey="value"
                fill={data.datasets[0].color || COLORS.primary[0]}
                barSize={chartConfig?.barSize || 40}
                radius={[4, 4, 0, 0]}
            />
        </BarChart>
    );

    const renderGraph = () => {
        switch (type) {
            case 'line':
                return renderLineChart();
            case 'pie':
                return renderPieChart();
            case 'histogram':
                return renderHistogram();
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-[400px] bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <ResponsiveContainer>
                {renderGraph()}
            </ResponsiveContainer>
        </div>
    );
};

export default Graph;