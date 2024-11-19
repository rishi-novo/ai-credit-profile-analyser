// src/utils/chartStyles.js

export const chartStyles = {
    colors: {
        primary: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],
        success: ['#22c55e', '#4ade80', '#86efac', '#bbf7d0'],
        danger: ['#ef4444', '#f87171', '#fca5a5', '#fecaca'],
        warning: ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a'],
        info: ['#06b6d4', '#22d3ee', '#67e8f9', '#a5f3fc']
    },
    pie: {
        style: {
            padding: 20,
            labelOffset: 20,
            innerRadius: "50%",
            outerRadius: "80%"
        },
        legend: {
            position: "right",
            formatter: (value, entry) => `${entry.name} (${value}%)`
        }
    },
    line: {
        style: {
            strokeWidth: 2,
            dot: {
                radius: 4,
                strokeWidth: 2
            },
            activeDot: {
                radius: 6,
                strokeWidth: 0
            }
        },
        grid: {
            stroke: "#e5e7eb",
            strokeDasharray: "3 3"
        }
    },
    bar: {
        style: {
            barSize: 40,
            radius: [4, 4, 0, 0],
            padding: [20, 30, 20, 30]
        },
        grid: {
            stroke: "#e5e7eb",
            strokeDasharray: "3 3"
        }
    },
    common: {
        fontFamily: "'Inter', sans-serif",
        fontSize: 12,
        tooltip: {
            contentStyle: {
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                padding: "8px 12px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }
        }
    }
};