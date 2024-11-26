# Loan Analysis Template Generator Documentation

## Overview
The Loan Analysis Template Generator is a React-based system for generating structured loan analysis reports. It supports various content types including tables, graphs, lists, and paragraphs, with customizable styling and layouts.

## Table of Contents
1. [Structure Overview](#structure-overview)
2. [JSON Schema](#json-schema)
3. [Content Types](#content-types)
4. [Styling Guide](#styling-guide)
5. [Examples](#examples)
6. [Best Practices](#best-practices)

## Structure Overview

The template follows a hierarchical structure:
```
Template
├── Meta Information
└── Sections
    ├── Heading
    └── Content
        ├── Tables
        ├── Graphs
        ├── Lists
        └── Paragraphs
```

### Basic Template Structure
```json
{
  "meta": {
    "title": "Report Title",
    "author": "Author Name",
    "reportId": "Unique ID",
    "status": "Status",
    // ... other meta fields
  },
  "sections": [/* Array of sections */]
}
```

## JSON Schema

### Meta Section
```json
{
  "meta": {
    "title": "string (required)",
    "author": "string (required)",
    "reportId": "string (required)",
    "loanType": "string",
    "status": "string",
    "applicationType": "string",
    "priority": "string",
    "generatedDate": "string (date)",
    "lastUpdated": "string (date)",
    "analysisType": "string"
  }
}
```

### Section Structure
```json
{
  "type": "section",
  "id": "unique-identifier",
  "variant": "one of: primary|secondary|neutral|info|success|danger|warning",
  "heading": {
    "level": "number (1-6)",
    "text": "string (required)",
    "description": "string (optional)"
  },
  "content": [/* Array of content items */]
}
```

## Content Types

### 1. Table
```json
{
  "type": "table",
  "columns": [
    {
      "header": "string",
      "key": "string"
    }
  ],
  "rows": [
    {
      "key1": "value1",
      "key2": "value2"
    }
  ]
}
```

### 2. Graph
```json
{
  "type": "graph",
  "graphType": "line|pie|histogram",
  "data": {
    "labels": ["array of labels"],
    "datasets": [
      {
        "label": "string",
        "data": [/* array of numbers */],
        "color": "hex color code"
      }
    ],
    "chart_config": {
      "xAxis": {
        "label": "string",
        "tickCount": "number"
      },
      "yAxis": {
        "label": "string",
        "tickCount": "number"
      }
    }
  }
}
```

### 3. List
```json
{
  "type": "list",
  "items": ["array of strings"]
}
```

### 4. Paragraph
```json
{
  "type": "paragraph",
  "text": "string"
}
```

## Styling Guide

### Section Variants
Available variants with their corresponding styles:
- `primary`: Blue theme
- `secondary`: Purple theme
- `neutral`: Gray theme
- `info`: Cyan theme
- `success`: Green theme
- `danger`: Red theme
- `warning`: Yellow theme

### Graph Customization
```json
"chartConfig": {
  "legend": {
    "position": "right|bottom"
  },
  "tooltip": {
    "format": "percentage|currency|number"
  },
  "donut": "boolean (for pie charts)"
}
```

## Examples

### Basic Section Example
```json
{
  "type": "section",
  "id": "financial-summary",
  "variant": "success",
  "heading": {
    "level": 2,
    "text": "Financial Summary",
    "description": "Overview of financial performance"
  },
  "content": [
    {
      "type": "table",
      "columns": [
        { "header": "Metric", "key": "metric" },
        { "header": "Value", "key": "value" }
      ],
      "rows": [
        { "metric": "Revenue", "value": "₹10Cr" },
        { "metric": "Profit", "value": "₹2Cr" }
      ]
    }
  ]
}
```

### Graph Example
```json
{
  "type": "graph",
  "graphType": "line",
  "data": {
    "labels": ["Jan", "Feb", "Mar"],
    "datasets": [
      {
        "label": "Revenue",
        "data": [100000, 120000, 150000],
        "color": "#22c55e"
      }
    ],
    "chart_config": {
      "xAxis": { "label": "Months" },
      "yAxis": { "label": "Amount (₹)" }
    }
  }
}
```

## Best Practices

1. **Identification**
   - Always provide unique `id` for sections
   - Use descriptive `reportId` in meta section

2. **Data Formatting**
   - Use consistent date formats (ISO 8601 recommended)
   - Format currency values as numbers, not strings
   - Use proper number formatting for financial data

3. **Graph Data**
   - Provide proper labels for axes
   - Use consistent color schemes
   - Include proper units in labels

4. **Content Organization**
   - Group related information in the same section
   - Use appropriate variants for section context
   - Keep table columns consistent within sections

5. **Error Prevention**
   - Validate all required fields
   - Ensure data types match expected formats
   - Test with different data volumes

## Version Control
Current Version: 1.0.0
Last Updated: February 2024

---