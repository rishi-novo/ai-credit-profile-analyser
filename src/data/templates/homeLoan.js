// src/data/templates/homeLoan.js

const homeLoanTemplate = {
    meta: {
        title: "Home Loan Analysis Report",
        author: "AI Credit Analysis System",
        date: new Date().toLocaleDateString(),
        reportId: `HL-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
        loanType: "Home",
        status: "In Review"
    },
    sections: [
        {
            type: "section",
            id: "applicant-profile",
            heading: {
                level: 1,
                text: "Applicant Profile",
                style: { color: "#2c3e50" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Parameter", key: "parameter" },
                        { header: "Primary Applicant", key: "primary" },
                        { header: "Co-Applicant", key: "secondary" }
                    ],
                    rows: [
                        { parameter: "Name", primary: "Robert Smith", secondary: "Sarah Smith" },
                        { parameter: "Age", primary: "45 years", secondary: "42 years" },
                        { parameter: "Occupation", primary: "Senior Manager", secondary: "Business Analyst" },
                        { parameter: "Monthly Income", primary: "₹1,25,000", secondary: "₹85,000" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "property-details",
            heading: {
                level: 2,
                text: "Property Assessment",
                style: { color: "#1e40af" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Detail", key: "detail" },
                        { header: "Value", key: "value" }
                    ],
                    rows: [
                        { detail: "Property Location", value: "Palm Heights, Sector 15, Mumbai" },
                        { detail: "Property Type", value: "3 BHK Apartment" },
                        { detail: "Built-up Area", value: "1,450 sq ft" },
                        { detail: "Market Value", value: "₹1,25,00,000" },
                        { detail: "Property Age", value: "New Construction" },
                        { detail: "Builder", value: "Prestige Group" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                },
                {
                    type: "graph",
                    graphType: "line",
                    data: {
                        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
                        datasets: [
                            {
                                label: "Property Value Trend (Per Sq Ft)",
                                data: [7200, 7500, 7800, 8200, 8500, 8800],
                                color: "#22c55e"
                            }
                        ]
                    },
                    style: {
                        width: "100%",
                        height: "300px"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "loan-eligibility",
            heading: {
                level: 2,
                text: "Loan Eligibility Analysis",
                style: { color: "#7e22ce" }
            },
            content: [
                {
                    type: "graph",
                    graphType: "pie",
                    data: {
                        labels: ["Down Payment", "Eligible Loan Amount", "Gap Funding"],
                        datasets: [
                            {
                                data: [25, 70, 5],
                                colors: ["#22c55e", "#3b82f6", "#f59e0b"]
                            }
                        ]
                    },
                    style: {
                        width: "100%",
                        height: "300px"
                    }
                },
                {
                    type: "table",
                    columns: [
                        { header: "Component", key: "component" },
                        { header: "Amount", key: "amount" }
                    ],
                    rows: [
                        { component: "Property Value", amount: "₹1,25,00,000" },
                        { component: "Down Payment (25%)", amount: "₹31,25,000" },
                        { component: "Eligible Loan Amount", amount: "₹87,50,000" },
                        { component: "Required Gap Funding", amount: "₹6,25,000" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "repayment-analysis",
            heading: {
                level: 2,
                text: "Repayment Analysis",
                style: { color: "#0891b2" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Parameter", key: "parameter" },
                        { header: "Value", key: "value" }
                    ],
                    rows: [
                        { parameter: "Loan Amount", value: "₹87,50,000" },
                        { parameter: "Interest Rate", value: "8.5% p.a." },
                        { parameter: "Tenure", value: "20 years" },
                        { parameter: "Monthly EMI", value: "₹75,800" },
                        { parameter: "Processing Fee", value: "0.5% + GST" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                },
                {
                    type: "graph",
                    graphType: "histogram",
                    data: {
                        labels: ["Year 5", "Year 10", "Year 15", "Year 20"],
                        datasets: [
                            {
                                label: "Outstanding Principal",
                                data: [7125000, 5250000, 3000000, 0],
                                color: "#6366f1"
                            }
                        ]
                    },
                    style: {
                        width: "100%",
                        height: "250px"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "legal-assessment",
            heading: {
                level: 2,
                text: "Legal Assessment",
                style: { color: "#dc2626" }
            },
            content: [
                {
                    type: "list",
                    items: [
                        "Title Deed: Clear and Marketable",
                        "Property Tax: Paid up to date",
                        "Municipal Approvals: All obtained",
                        "Environmental Clearance: Available",
                        "Encumbrance: Property free from encumbrance",
                        "Legal Opinion: Positive"
                    ],
                    style: { color: "#475569" }
                }
            ]
        },
        {
            type: "section",
            id: "required-documents",
            heading: {
                level: 2,
                text: "Required Documentation",
                style: { color: "#ea580c" }
            },
            content: [
                {
                    type: "list",
                    items: [
                        "Identity Proof (Aadhar/PAN)",
                        "Income Documentation (Last 3 months salary slips)",
                        "Bank Statements (6 months)",
                        "Property Documents (Original)",
                        "Property Insurance",
                        "Age Proof",
                        "Address Proof",
                        "Photographs",
                        "Employment Details"
                    ],
                    style: { color: "#475569" }
                }
            ]
        }
    ]
};

export default homeLoanTemplate;