// src/data/templates/businessLoan.js
import { COLORS } from '@/utils/colors';

const businessLoanTemplate = {
    meta: {
        title: "Business Loan Analysis Report",
        author: "AI Credit Analysis System",
        reportId: "BL-2024-001", // Fixed ID
        loanType: "Business",
        status: "In Review",
        applicationType: "New Application",
        priority: "High",
        generatedDate: "2024-02-19",
        lastUpdated: "2024-02-19",
        analysisType: "Comprehensive"
    },
    sections: [
        {
            type: "section",
            id: "business-overview",
            variant: "primary",
            heading: {
                level: 1,
                text: "Business Overview",
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Parameter", key: "param" },
                        { header: "Details", key: "details" }
                    ],
                    rows: [
                        { param: "Business Name", details: "TechCorp Solutions Pvt Ltd" },
                        { param: "Industry", details: "Information Technology" },
                        { param: "Registration Number", details: "U72200MH2018PTC123456" },
                        { param: "Incorporation Date", details: "15th March 2018" },
                        { param: "Business Type", details: "Private Limited Company" },
                        { param: "GST Number", details: "27AABCT1234N1Z5" }
                    ]
                },
                {
                    type: "list",
                    items: [
                        "Headquarters: Mumbai, Maharashtra",
                        "Branch Offices: Bangalore, Delhi, Pune",
                        "Employee Count: 250+",
                        "Operating Markets: India, UAE, Singapore",
                        "Primary Business: Enterprise Software Solutions"
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "executive-profiles",
            variant: "info",
            heading: {
                level: 2,
                text: "Executive Profiles"
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Name", key: "name" },
                        { header: "Position", key: "position" },
                        { header: "Experience", key: "experience" },
                        { header: "Education", key: "education" },
                        { header: "Credit Score", key: "creditScore" }
                    ],
                    rows: [
                        {
                            name: "Rajesh Kumar",
                            position: "CEO & Founder",
                            experience: "20+ years",
                            education: "MBA (IIM-A)",
                            creditScore: "820"
                        },
                        {
                            name: "Priya Sharma",
                            position: "CFO",
                            experience: "15+ years",
                            education: "CA, CFA",
                            creditScore: "785"
                        },
                        {
                            name: "Alex Thompson",
                            position: "CTO",
                            experience: "18+ years",
                            education: "MS (Stanford)",
                            creditScore: "790"
                        }
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "financial-summary",
            variant: "success",
            heading: {
                level: 2,
                text: "Financial Performance Summary"
            },
            content: [
                {
                    type: "graph",
                    graphType: "line",
                    data: {
                        labels: ["2019", "2020", "2021", "2022", "2023"],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [25000000, 45000000, 78000000, 125000000, 180000000],
                                color: "#22c55e"
                            },
                            {
                                label: "Profit",
                                data: [5000000, 12000000, 25000000, 45000000, 72000000],
                                color: "#3b82f6"
                            }
                        ]
                    },
                    chartConfig: {
                        xAxis: {
                            label: "Financial Year",
                            tickCount: 5
                        },
                        yAxis: {
                            label: "Amount (₹)",
                            tickCount: 6
                        }
                    }
                },
                {
                    type: "table",
                    columns: [
                        { header: "Financial Metric", key: "metric" },
                        { header: "FY 2022", key: "fy22" },
                        { header: "FY 2023", key: "fy23" },
                        { header: "Growth", key: "growth" }
                    ],
                    rows: [
                        {
                            metric: "Revenue",
                            fy22: "₹12.5 Cr",
                            fy23: "₹18 Cr",
                            growth: "44%"
                        },
                        {
                            metric: "EBITDA",
                            fy22: "₹4.5 Cr",
                            fy23: "₹7.2 Cr",
                            growth: "60%"
                        },
                        {
                            metric: "Net Profit",
                            fy22: "₹3.2 Cr",
                            fy23: "₹5.1 Cr",
                            growth: "59%"
                        }
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "revenue-streams",
            variant: "primary",
            heading: {
                level: 2,
                text: "Revenue Stream Analysis"
            },
            content: [
                {
                    type: "graph",
                    graphType: "pie",
                    data: {
                        labels: [
                            "Enterprise Solutions",
                            "Consulting Services",
                            "Maintenance Contracts",
                            "Cloud Services",
                            "Training Programs"
                        ],
                        datasets: [
                            {
                                data: [40, 25, 20, 10, 5],
                                colors: [
                                    "#3b82f6",
                                    "#22c55e",
                                    "#f59e0b",
                                    "#8b5cf6",
                                    "#ef4444"
                                ]
                            }
                        ]
                    },
                    chartConfig: {
                        legend: {
                            position: "right"
                        },
                        tooltip: {
                            format: "percentage"
                        }
                    }
                }
            ]
        },
        {
            type: "section",
            id: "industry-analysis",
            variant: "info",
            heading: {
                text: "Industry Analysis & Positioning",
                description: "Sector-specific analysis and competitive positioning"
            },
            content: [
                {
                    type: "paragraph",
                    text: "Comprehensive analysis of the IT services sector and the company's competitive positioning within it. The sector shows strong growth potential with increasing demand for digital transformation services."
                },
                {
                    type: "table",
                    columns: [
                        { header: "Metric", key: "metric" },
                        { header: "Industry Average", key: "average" },
                        { header: "Company Position", key: "position" },
                        { header: "Status", key: "status" }
                    ],
                    rows: [
                        {
                            metric: "Market Growth Rate",
                            average: "12% YoY",
                            position: "18% YoY",
                            status: "Above Average"
                        },
                        {
                            metric: "Profit Margins",
                            average: "15-18%",
                            position: "22%",
                            status: "Superior"
                        },
                        {
                            metric: "Customer Retention",
                            average: "75%",
                            position: "85%",
                            status: "Excellent"
                        }
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "growth-initiatives",
            variant: "success",
            heading: {
                text: "Growth Initiatives & Fund Utilization",
                description: "Planned initiatives and capital allocation strategy"
            },
            content: [
                {
                    type: "graph",
                    graphType: "pie",
                    data: {
                        labels: [
                            "Market Expansion",
                            "Product Development",
                            "Infrastructure",
                            "Working Capital",
                            "Team Expansion"
                        ],
                        datasets: [{
                            data: [30, 25, 20, 15, 10],
                            colors: COLORS.pallette1
                        }]
                    },
                    chartConfig: {
                        donut: true,
                        legend: { position: "right" }
                    }
                },
                {
                    type: "list",
                    items: [
                        "Geographic expansion into APAC markets",
                        "New product development in AI/ML solutions",
                        "Infrastructure upgrade for cloud services",
                        "Working capital for larger project execution",
                        "Technical team expansion by 50%"
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "risk-mitigation",
            variant: "warning",
            heading: {
                text: "Risk Assessment & Mitigation",
                description: "Key risks and mitigation strategies"
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Risk Category", key: "category" },
                        { header: "Impact", key: "impact" },
                        { header: "Probability", key: "probability" },
                        { header: "Mitigation Strategy", key: "strategy" }
                    ],
                    rows: [
                        {
                            category: "Market Risk",
                            impact: "High",
                            probability: "Medium",
                            strategy: "Diversified client base across sectors"
                        },
                        {
                            category: "Technology Risk",
                            impact: "High",
                            probability: "Low",
                            strategy: "Continuous training and tech upgradation"
                        },
                        {
                            category: "Operational Risk",
                            impact: "Medium",
                            probability: "Low",
                            strategy: "Strong process documentation and redundancy"
                        }
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "financial-projections",
            variant: "primary",
            heading: {
                text: "Financial Projections",
                description: "5-year financial forecast and assumptions"
            },
            content: [
                {
                    type: "graph",
                    graphType: "line",
                    data: {
                        labels: ["Y1", "Y2", "Y3", "Y4", "Y5"],
                        datasets: [
                            {
                                label: "Projected Revenue",
                                data: [180000000, 234000000, 304200000, 395460000, 514098000],
                                color: COLORS.primary[0]
                            },
                            {
                                label: "Projected EBITDA",
                                data: [36000000, 46800000, 60840000, 79092000, 102819600],
                                color: COLORS.success[0]
                            }
                        ]
                    },
                    chartConfig: {
                        xAxis: { label: "Year" },
                        yAxis: { label: "Amount (₹)" }
                    }
                }
            ]
        },
        {
            type: "section",
            id: "monthly-trends",
            variant: "warning",
            heading: {
                level: 2,
                text: "Monthly Performance Trends (FY 2023)"
            },
            content: [
                {
                    type: "graph",
                    graphType: "line",
                    data: {
                        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [14000000, 15500000, 14800000, 16200000, 15900000, 17000000,
                                    16500000, 17800000, 18200000, 17500000, 18500000, 19000000],
                                color: "#22c55e"
                            },
                            {
                                label: "Operating Costs",
                                data: [10000000, 11000000, 10500000, 11500000, 11200000, 12000000,
                                    11800000, 12500000, 12800000, 12200000, 13000000, 13300000],
                                color: "#ef4444"
                            }
                        ]
                    },
                    chartConfig: {
                        xAxis: {
                            label: "Month",
                            tickCount: 12
                        },
                        yAxis: {
                            label: "Amount (₹)",
                            tickCount: 6
                        }
                    }
                }
            ]
        },
        {
            type: "section",
            id: "market-analysis",
            variant: "info",
            heading: {
                level: 2,
                text: "Market Analysis & Competition"
            },
            content: [
                {
                    type: "graph",
                    graphType: "pie",
                    data: {
                        labels: [
                            "TechCorp Solutions",
                            "Major Competitor 1",
                            "Major Competitor 2",
                            "Other Players",
                            "Untapped Market"
                        ],
                        datasets: [
                            {
                                data: [15, 25, 20, 25, 15],
                                colors: [
                                    "#22c55e",
                                    "#ef4444",
                                    "#f59e0b",
                                    "#3b82f6",
                                    "#8b5cf6"
                                ]
                            }
                        ]
                    },
                    chartConfig: {
                        legend: {
                            position: "right"
                        }
                    }
                },
                {
                    type: "table",
                    columns: [
                        { header: "Market Aspect", key: "aspect" },
                        { header: "Details", key: "details" },
                        { header: "Impact", key: "impact" }
                    ],
                    rows: [
                        {
                            aspect: "Total Market Size",
                            details: "₹12,000 Cr",
                            impact: "High Growth Potential"
                        },
                        {
                            aspect: "Market Growth Rate",
                            details: "18% YoY",
                            impact: "Positive"
                        },
                        {
                            aspect: "Competition Level",
                            details: "Moderate",
                            impact: "Favorable"
                        }
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "funding-history",
            variant: "secondary",
            heading: {
                level: 2,
                text: "Previous Fundraising & Loans"
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Type", key: "type" },
                        { header: "Amount", key: "amount" },
                        { header: "Date", key: "date" },
                        { header: "Status", key: "status" }
                    ],
                    rows: [
                        {
                            type: "Seed Funding",
                            amount: "₹2 Cr",
                            date: "Mar 2018",
                            status: "Completed"
                        },
                        {
                            type: "Series A",
                            amount: "₹15 Cr",
                            date: "Jan 2020",
                            status: "Completed"
                        },
                        {
                            type: "Business Loan",
                            amount: "₹5 Cr",
                            date: "Jun 2021",
                            status: "70% Repaid"
                        }
                    ]
                },
                {
                    type: "graph",
                    graphType: "histogram",
                    data: {
                        labels: ["<1Cr", "1-5Cr", "5-10Cr", ">10Cr"],
                        datasets: [
                            {
                                label: "Funding Distribution",
                                data: [1, 2, 1, 1],
                                color: "#6366f1"
                            }
                        ]
                    },
                    chartConfig: {
                        xAxis: {
                            label: "Amount Range",
                            tickCount: 4
                        },
                        yAxis: {
                            label: "Number of Rounds",
                            tickCount: 5
                        }
                    }
                }
            ]
        },
        {
            type: "section",
            id: "credit-risk-profile",
            variant: "danger",
            heading: {
                level: 2,
                text: "Credit Risk Assessment"
            },
            content: [
                {
                    type: "graph",
                    graphType: "pie",
                    data: {
                        labels: [
                            "Low Risk Factors",
                            "Moderate Risk Factors",
                            "High Risk Factors"
                        ],
                        datasets: [
                            {
                                data: [70, 20, 10],
                                colors: [
                                    "#22c55e",
                                    "#f59e0b",
                                    "#ef4444"
                                ]
                            }
                        ]
                    }
                },
                {
                    type: "table",
                    columns: [
                        { header: "Risk Factor", key: "factor" },
                        { header: "Assessment", key: "assessment" },
                        { header: "Impact", key: "impact" }
                    ],
                    rows: [
                        {
                            factor: "Credit Score",
                            assessment: "780",
                            impact: "Low Risk"
                        },
                        {
                            factor: "Payment History",
                            assessment: "No Defaults",
                            impact: "Low Risk"
                        },
                        {
                            factor: "Market Risk",
                            assessment: "Moderate Exposure",
                            impact: "Medium Risk"
                        }
                    ]
                }
            ]
        },
        {
            type: "section",
            id: "loan-proposal",
            variant: "success",
            heading: {
                level: 2,
                text: "Loan Proposal Analysis"
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Aspect", key: "aspect" },
                        { header: "Details", key: "details" },
                        { header: "Remarks", key: "remarks" }
                    ],
                    rows: [
                        {
                            aspect: "Requested Amount",
                            details: "₹25 Cr",
                            remarks: "Within eligible limits"
                        },
                        {
                            aspect: "Purpose",
                            details: "Business Expansion",
                            remarks: "Valid requirement"
                        },
                        {
                            aspect: "Tenure Requested",
                            details: "60 months",
                            remarks: "Acceptable"
                        }
                    ]
                },
                {
                    type: "graph",
                    graphType: "line",
                    data: {
                        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
                        datasets: [
                            {
                                label: "Projected Revenue",
                                data: [250000000, 325000000, 422500000, 549250000, 714025000],
                                color: "#22c55e"
                            },
                            {
                                label: "Projected EMI Coverage",
                                data: [15000000, 19500000, 25350000, 32955000, 42841500],
                                color: "#3b82f6"
                            }
                        ]
                    },
                    chartConfig: {
                        xAxis: {
                            label: "Projection Period",
                            tickCount: 5
                        },
                        yAxis: {
                            label: "Amount (₹)",
                            tickCount: 6
                        }
                    }
                }
            ]
        }
    ]
};

export default businessLoanTemplate;