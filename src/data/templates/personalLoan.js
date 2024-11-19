// src/data/templates/personalLoan.js

const personalLoanTemplate = {
    meta: {
        title: "Personal Loan Analysis Report",
        author: "AI Credit Analysis System",
        date: new Date().toLocaleDateString(),
        reportId: `PL-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
        loanType: "Personal",
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
                        { header: "Details", key: "details" }
                    ],
                    rows: [
                        { parameter: "Name", details: "John Doe" },
                        { parameter: "Age", details: "35 years" },
                        { parameter: "Occupation", details: "Software Engineer" },
                        { parameter: "Employment Type", details: "Salaried" },
                        { parameter: "Current Employer", details: "Tech Solutions Inc." },
                        { parameter: "Employment Duration", details: "4 years" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "income-analysis",
            heading: {
                level: 2,
                text: "Income Analysis",
                style: { color: "#1e40af" }
            },
            content: [
                {
                    type: "graph",
                    graphType: "line",
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            {
                                label: "Monthly Income",
                                data: [85000, 85000, 85000, 90000, 90000, 90000],
                                color: "#22c55e"
                            },
                            {
                                label: "Monthly Expenses",
                                data: [45000, 46000, 44000, 47000, 45000, 46000],
                                color: "#ef4444"
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
                        { header: "Income Component", key: "component" },
                        { header: "Monthly Amount", key: "amount" }
                    ],
                    rows: [
                        { component: "Basic Salary", amount: "₹65,000" },
                        { component: "HRA", amount: "₹15,000" },
                        { component: "Special Allowance", amount: "₹10,000" },
                        { component: "Average Monthly Bonus", amount: "₹5,000" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "credit-profile",
            heading: {
                level: 2,
                text: "Credit Profile",
                style: { color: "#7e22ce" }
            },
            content: [
                {
                    type: "graph",
                    graphType: "line",
                    data: {
                        labels: ["6 Months Ago", "5 Months Ago", "4 Months Ago", "3 Months Ago", "2 Months Ago", "Current"],
                        datasets: [
                            {
                                label: "Credit Score Trend",
                                data: [720, 725, 728, 735, 742, 750],
                                color: "#6366f1"
                            }
                        ]
                    },
                    style: {
                        width: "100%",
                        height: "250px"
                    }
                },
                {
                    type: "table",
                    columns: [
                        { header: "Existing Credit", key: "credit" },
                        { header: "Monthly Payment", key: "payment" },
                        { header: "Outstanding", key: "outstanding" },
                        { header: "Status", key: "status" }
                    ],
                    rows: [
                        { credit: "Credit Card 1", payment: "₹15,000", outstanding: "₹45,000", status: "Regular" },
                        { credit: "Car Loan", payment: "₹12,000", outstanding: "₹3,50,000", status: "Regular" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "loan-eligibility",
            heading: {
                level: 2,
                text: "Loan Eligibility Assessment",
                style: { color: "#0891b2" }
            },
            content: [
                {
                    type: "graph",
                    graphType: "pie",
                    data: {
                        labels: ["Available Income", "Existing EMIs", "Proposed EMI"],
                        datasets: [
                            {
                                data: [60, 25, 15],
                                colors: ["#22c55e", "#f59e0b", "#3b82f6"]
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
                        { header: "Parameter", key: "parameter" },
                        { header: "Value", key: "value" }
                    ],
                    rows: [
                        { parameter: "Maximum Eligible Loan", value: "₹15,00,000" },
                        { parameter: "Recommended Tenure", value: "48 months" },
                        { parameter: "Interest Rate", value: "12% p.a." },
                        { parameter: "EMI", value: "₹39,500" },
                        { parameter: "Processing Fee", value: "2%" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        }
    ]
};

export default personalLoanTemplate;