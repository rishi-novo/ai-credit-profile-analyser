// src/components/LoanAnalysisTemplate.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Section from '@/components/Section';

const LoanAnalysisTemplate = ({ template = {} }) => {
    if (!template || !template.sections) return null;

    return (
        <ScrollArea className="h-[800px] w-full rounded-md">
            <div className="p-6">
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-3xl text-center">{template.meta?.title}</CardTitle>
                        <div className="text-center text-muted-foreground">
                            <p>Report ID: {template.meta?.reportId}</p>
                            <p>Generated on: {template.meta?.date}</p>
                        </div>
                    </CardHeader>
                </Card>

                {template.sections.map((section, index) => (
                    <Section
                        key={index}
                        id={section.id}
                        heading={section.heading}
                        content={section.content}
                        variant={section.variant || 'neutral'}
                    />
                ))}
            </div>
        </ScrollArea>
    );
};

export default LoanAnalysisTemplate;