// components/Section.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Graph from './mirco/Graph';
import Table from './mirco/Table';
import List from './mirco/List';
import Paragraph from './mirco/Paragraph';
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import Heading from './mirco/Heading';


// Define background color variants for sections
const sectionStyles = {
    primary: "bg-blue-50/50 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800",
    secondary: "bg-purple-50/50 dark:bg-purple-950/50 border-purple-200 dark:border-purple-800",
    neutral: "bg-gray-50/50 dark:bg-gray-950/50 border-gray-200 dark:border-gray-800",
    info: "bg-cyan-50/50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800",
    success: "bg-green-50/50 dark:bg-green-950/50 border-green-200 dark:border-green-800",
    danger: "bg-red-50/50 dark:bg-red-950/50 border-red-200 dark:border-red-800",
    warning: "bg-yellow-50/50 dark:bg-yellow-950/50 border-yellow-200 dark:border-yellow-800"
};

// Define header icons for different section types
const sectionIcons = {
    primary: null,
    secondary: null,
    neutral: null,
    info: <Info className="h-4 w-4 text-blue-500" />,
    success: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    danger: <AlertCircle className="h-4 w-4 text-red-500" />,
    warning: <AlertTriangle className="h-4 w-4 text-yellow-500" />
};

const Section = ({
    id,
    heading,
    content = [],
    variant = "neutral",
    className,
    collapsible = false,
    defaultExpanded = true
}) => {
    // State for collapsible sections
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    // Function to render the appropriate content based on type
    const renderContent = (item, index) => {
        switch (item.type) {

            case 'heading':
                return (
                    <div className={cn("pt-4", item.className)}>
                        <Heading
                            key={index}
                            level={item.level || 2}
                            text={item.text}
                            style={item.style}
                            className={item.className}
                        />
                        {item.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                                {item.description}
                            </p>
                        )}
                    </div>
                );

            case 'table':
                return (
                    <div className="rounded-lg overflow-hidden">
                        <Table key={index} {...item} />
                    </div>
                );

            case 'list':
                return (
                    <div className="py-2">
                        <List key={index} {...item} />
                    </div>
                );

            case 'graph':
                // Handle both graphType and graph_type
                const graphType = item.graphType || item.graph_type;
                if (!graphType || !item.data) return null;

                console.log('Rendering graph with:', {
                    type: graphType,
                    data: item.data,
                    config: item.data.chart_config || item.chartConfig
                });

                if (!graphType || !item.data) {
                    console.warn('Missing required graph data:', { item });
                    return null;
                }

                return (
                    <div className="w-full h-[400px] bg-white p-4 rounded-lg">
                        <Graph
                            type={graphType}
                            data={{
                                labels: item.data.labels,
                                datasets: item.data.datasets,
                                color: item.data.color,
                                chart_config: item.data.chart_config
                            }}
                            chartConfig={item.data.chart_config || item.chartConfig}
                        />
                    </div>
                );

            case 'paragraph':
                return (
                    <div className="py-2">
                        <Paragraph key={index} {...item} />
                    </div>
                );

            default:
                return null;
        }
    };

    // Get the icon for the current variant
    const SectionIcon = sectionIcons[variant];

    return (
        <Card
            className={cn(
                "mb-6 transition-all duration-200",
                sectionStyles[variant],
                className
            )}
        >
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {SectionIcon && <div>{SectionIcon}</div>}
                        <CardTitle className="text-2xl font-semibold tracking-tight">
                            {heading.text}
                        </CardTitle>
                    </div>
                    {collapsible && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            )}
                        </Button>
                    )}
                </div>
                {heading.description && (
                    <p className="text-sm text-muted-foreground">
                        {heading.description}
                    </p>
                )}
            </CardHeader>

            {(!collapsible || isExpanded) && (
                <CardContent>
                    <div className="space-y-4">
                        {content.map((item, index) => (
                            <div key={index}>
                                {renderContent(item, index)}
                            </div>
                        ))}
                    </div>
                </CardContent>
            )}
        </Card>
    );
};

export default Section;