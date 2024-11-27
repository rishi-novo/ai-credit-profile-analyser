// src/components/micro/Graph.jsx
import React from 'react';
import {
    LineChart, Line, PieChart, Pie, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
    ResponsiveContainer
} from 'recharts';

const COLORS = {
    primary: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],
    success: ['#22c55e', '#4ade80', '#86efac', '#bbf7d0'],
    danger: ['#ef4444', '#f87171', '#fca5a5', '#fecaca'],
    warning: ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a'],
    info: ['#06b6d4', '#22d3ee', '#67e8f9', '#a5f3fc']
};

const formatCurrency = (value) => {
    if (typeof value === 'string') return value;
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${value.toLocaleString()}`;
};

const formatDate = (dateString) => {
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    } catch (e) {
        return dateString;
    }
};

const formatValue = (value) => {
    if (typeof value === 'string') return value;
    if (value < 2 && value > 0) return value.toFixed(3);
    if (Number.isInteger(value)) return formatCurrency(value);
    return value.toLocaleString();
};

const Graph = ({ type, data, chartConfig = {} }) => {
    if (!data?.labels) return null;

    const normalizeDatasets = () => {
        const datasets = data.datasets;
        if (!datasets) return [];

        // Handle single dataset object format (from API)
        if (!Array.isArray(datasets) && typeof datasets === 'object') {
            return [{
                label: datasets.label,
                data: datasets.data,
                color: datasets.color
            }];
        }

        // Handle array format
        if (Array.isArray(datasets)) {
            return datasets.map(dataset => ({
                label: dataset.label,
                data: dataset.data,
                color: dataset.color
            }));
        }

        return [];
    };

    const formattedData = data.labels.map((label, i) => {
        const normalizedDatasets = normalizeDatasets();
        const dataPoint = {
            name: label,
            originalLabel: label
        };

        normalizedDatasets.forEach(dataset => {
            dataPoint[dataset.label] = dataset.data[i];
        });

        return dataPoint;
    });

    const commonProps = {
        width: "100%",
        height: 400,
        margin: { top: 20, right: 30, left: 60, bottom: 20 }
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (!active || !payload) return null;

        return (
            <div className="bg-white p-4 border rounded shadow-lg">
                <p className="font-semibold text-gray-800 border-b pb-2 mb-2">
                    {formatDate(label)}
                </p>
                {payload.map((item, index) => (
                    <p key={index} className="flex items-center gap-2 py-1">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium">
                            {item.name}:
                        </span>
                        <span className="text-gray-600">
                            {formatValue(item.value)}
                        </span>
                    </p>
                ))}
            </div>
        );
    };

    const renderLineChart = () => (
        <LineChart {...commonProps} data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
                dataKey="name"
                label={{
                    value: data.chart_config?.x_axis?.label || chartConfig?.xAxis?.label,
                    position: 'bottom',
                    offset: 0
                }}
                tick={{
                    fontSize: 12,
                    fill: '#6b7280',
                    formatter: (value) => formatDate(value)
                }}
                stroke="#d1d5db"
            />
            <YAxis
                label={{
                    value: data.chart_config?.y_axis?.label || chartConfig?.yAxis?.label,
                    angle: -90,
                    position: 'insideLeft',
                    offset: -10
                }}
                tickFormatter={formatValue}
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
            {normalizeDatasets().map((dataset, index) => (
                <Line
                    key={index}
                    name={dataset.label || `Series ${index + 1}`}
                    type="monotone"
                    dataKey={dataset.label || 'value'}
                    stroke={dataset.color}
                    strokeWidth={2}
                    dot={{ fill: dataset.color, strokeWidth: 2 }}
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
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
                dataKey="value"
                nameKey="name"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                labelLine={{ stroke: "#9CA3AF", strokeWidth: 1 }}
            >
                {formattedData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={normalizeDatasets()[0]?.colors?.[index] || COLORS.primary[index % COLORS.primary.length]}
                    />
                ))}
            </Pie>
            <Tooltip
                formatter={(value, name) => [formatValue(value), name]}
                contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    padding: '8px 12px'
                }}
            />
            <Legend
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                iconType="circle"
            />
        </PieChart>
    );

    const renderHistogram = () => (
        <BarChart {...commonProps} data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
                dataKey="name"
                label={{
                    value: data.chart_config?.x_axis?.label || chartConfig?.xAxis?.label,
                    position: 'bottom',
                    offset: 0
                }}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                stroke="#d1d5db"
            />
            <YAxis
                label={{
                    value: data.chart_config?.y_axis?.label || chartConfig?.yAxis?.label,
                    angle: -90,
                    position: 'insideLeft'
                }}
                tickFormatter={formatValue}
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
            {normalizeDatasets().map((dataset, index) => (
                <Bar
                    key={index}
                    name={dataset.label || `Series ${index + 1}`}
                    dataKey={dataset.label || 'value'}
                    fill={dataset.color || COLORS.primary[0]}
                    barSize={chartConfig?.barSize || 40}
                    radius={[4, 4, 0, 0]}
                />
            ))}
        </BarChart>
    );

    const renderGraph = () => {
        const graphType = type || data.graph_type;
        switch (graphType) {
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