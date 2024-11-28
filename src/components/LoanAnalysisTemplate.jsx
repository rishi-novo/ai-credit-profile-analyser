import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Section from '@/components/Section';
import { AlertCircle } from 'lucide-react';

const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (e) {
        return dateString;
    }
};

const LoanAnalysisTemplate = ({ template }) => {
    // Handle null or undefined template
    if (!template) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                    No template data available
                </AlertDescription>
            </Alert>
        );
    }

    // Handle API response structure with proper type checking
    const data = template.status === 1 ? template.data : template;

    // Validate required data structure
    if (!data || typeof data !== 'object') {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                    Invalid template data structure
                </AlertDescription>
            </Alert>
        );
    }

    // Validate sections array
    if (!Array.isArray(data.sections)) {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                    No sections found in template
                </AlertDescription>
            </Alert>
        );
    }

    const meta = data.meta || {};

    return (
        <ScrollArea className="w-full rounded-md">
            <div className="p-6">
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-3xl text-center">
                            {meta.title || 'Loan Analysis Report'}
                        </CardTitle>
                        <div className="text-center text-muted-foreground space-y-1">
                            {meta.reportId && (
                                <p className="text-sm">Report ID: {meta.reportId}</p>
                            )}
                            {meta.generatedDate && (
                                <p className="text-sm">
                                    Generated on: {formatDate(meta.generatedDate)}
                                </p>
                            )}
                            {meta.lastUpdated && (
                                <p className="text-sm text-gray-500">
                                    Last Updated: {formatDate(meta.lastUpdated)}
                                </p>
                            )}
                            {meta.status && (
                                <p className="text-sm font-medium">
                                    Status: {meta.status}
                                </p>
                            )}
                        </div>
                    </CardHeader>
                </Card>

                {data.sections.map((section, index) => {
                    // Validate section data
                    if (!section || !section.heading || !section.content) {
                        return null;
                    }

                    return (
                        <Section
                            key={`${section.id || index}-${index}`}
                            id={section.id}
                            heading={section.heading}
                            content={section.content}
                            variant={section.variant || 'neutral'}
                        />
                    );
                })}
            </div>
        </ScrollArea>
    );
};

export default LoanAnalysisTemplate;