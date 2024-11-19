// src/data/templates/educationLoan.js

const educationLoanTemplate = {
    meta: {
        title: "Education Loan Analysis Report",
        author: "AI Credit Analysis System",
        date: new Date().toLocaleDateString(),
        reportId: `EL-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
        loanType: "Education",
        status: "In Review"
    },
    sections: [
        {
            type: "section",
            id: "student-profile",
            heading: {
                level: 1,
                text: "Student Profile",
                style: { color: "#2c3e50" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Parameter", key: "parameter" },
                        { header: "Student Details", key: "student" },
                        { header: "Co-Applicant Details", key: "guardian" }
                    ],
                    rows: [
                        { parameter: "Name", student: "Alex Johnson", guardian: "Michael Johnson" },
                        { parameter: "Age", student: "22 years", guardian: "48 years" },
                        { parameter: "Qualification", student: "B.Tech in CS", guardian: "MBA" },
                        { parameter: "Relationship", student: "Self", guardian: "Father" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "academic-profile",
            heading: {
                level: 2,
                text: "Academic Assessment",
                style: { color: "#1e40af" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Education Level", key: "level" },
                        { header: "Institution", key: "institution" },
                        { header: "Score", key: "score" },
                        { header: "Year", key: "year" }
                    ],
                    rows: [
                        { level: "12th Grade", institution: "Delhi Public School", score: "92%", year: "2020" },
                        { level: "B.Tech", institution: "VIT University", score: "8.9 CGPA", year: "2024" },
                        { level: "GRE", institution: "ETS", score: "325/340", year: "2024" },
                        { level: "IELTS", institution: "British Council", score: "7.5/9", year: "2024" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "program-details",
            heading: {
                level: 2,
                text: "Program Details",
                style: { color: "#7e22ce" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Detail", key: "detail" },
                        { header: "Value", key: "value" }
                    ],
                    rows: [
                        { detail: "University", value: "Stanford University" },
                        { detail: "Program", value: "MS in Computer Science" },
                        { detail: "Duration", value: "2 years" },
                        { detail: "Country", value: "United States" },
                        { detail: "University Ranking", value: "World Rank 3" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                },
                {
                    type: "graph",
                    graphType: "pie",
                    data: {
                        labels: ["Tuition Fee", "Living Expenses", "Insurance", "Other Costs"],
                        datasets: [
                            {
                                data: [65, 25, 5, 5],
                                colors: ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"]
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
            id: "cost-breakdown",
            heading: {
                level: 2,
                text: "Cost Analysis",
                style: { color: "#0891b2" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Cost Component", key: "component" },
                        { header: "Amount (₹)", key: "amount" }
                    ],
                    rows: [
                        { component: "Tuition Fee", amount: "₹45,00,000" },
                        { component: "Living Expenses", amount: "₹18,00,000" },
                        { component: "Health Insurance", amount: "₹3,50,000" },
                        { component: "Travel & Other Costs", amount: "₹3,50,000" },
                        { component: "Total Cost", amount: "₹70,00,000" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        },
        {
            type: "section",
            id: "career-prospects",
            heading: {
                level: 2,
                text: "Career Prospects Analysis",
                style: { color: "#ea580c" }
            },
            content: [
                {
                    type: "graph",
                    graphType: "histogram",
                    data: {
                        labels: ["Starting", "After 2 Years", "After 4 Years", "After 6 Years"],
                        datasets: [
                            {
                                label: "Expected Annual Salary (USD)",
                                data: [120000, 150000, 180000, 220000],
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
                    type: "list",
                    items: [
                        "High demand for Computer Science graduates",
                        "95% placement rate from the program",
                        "Strong alumni network in major tech companies",
                        "Option for OPT and H1B sponsorship",
                        "ROI expected within 3-4 years"
                    ],
                    style: { color: "#475569" }
                }
            ]
        },
        {
            type: "section",
            id: "loan-recommendation",
            heading: {
                level: 2,
                text: "Loan Recommendation",
                style: { color: "#dc2626" }
            },
            content: [
                {
                    type: "table",
                    columns: [
                        { header: "Parameter", key: "parameter" },
                        { header: "Value", key: "value" }
                    ],
                    rows: [
                        { parameter: "Recommended Loan Amount", value: "₹60,00,000" },
                        { parameter: "Interest Rate", value: "9.5% p.a." },
                        { parameter: "Tenure", value: "8 years" },
                        { parameter: "Moratorium Period", value: "Course Duration + 6 months" },
                        { parameter: "Processing Fee", value: "1% + GST" },
                        { parameter: "Collateral Required", value: "Yes" }
                    ],
                    style: {
                        headerBackgroundColor: "#f8fafc"
                    }
                }
            ]
        }
    ]
};

export default educationLoanTemplate;