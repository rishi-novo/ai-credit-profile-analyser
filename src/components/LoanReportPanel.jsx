// src/components/LoanReportPanel.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTemplate, setSelectedTemplate } from '@/store/reportSlice';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Info, Download, Share2, Copy, Check, RefreshCcw } from 'lucide-react';
import LoanAnalysisTemplate from './LoanAnalysisTemplate';
import JSONEditor from './JSONEditor';
import * as templates from '@/data/templates';

const validateTemplateStructure = (template) => {
    const errors = [];

    try {
        // Check meta section
        if (!template.meta) {
            errors.push("Missing 'meta' section");
        } else {
            if (!template.meta.title) errors.push("Missing 'title' in meta");
            if (!template.meta.author) errors.push("Missing 'author' in meta");
        }

        // Check sections
        if (!template.sections || !Array.isArray(template.sections)) {
            errors.push("Missing or invalid 'sections' array");
        } else {
            template.sections.forEach((section, index) => {
                if (!section.type) errors.push(`Section ${index + 1}: Missing 'type'`);
                if (!section.id) errors.push(`Section ${index + 1}: Missing 'id'`);
                if (!section.heading?.text) {
                    errors.push(`Section ${index + 1}: Missing heading text`);
                }

                // Validate content array
                if (!section.content || !Array.isArray(section.content)) {
                    errors.push(`Section ${index + 1}: Invalid or missing content array`);
                } else {
                    section.content.forEach((item, itemIndex) => {
                        if (item.type === 'graph') {
                            if (!item.data?.labels || !item.data?.datasets) {
                                errors.push(`Section ${index + 1}, Content ${itemIndex + 1}: Invalid graph data structure`);
                            }
                        }
                    });
                }
            });
        }
    } catch (error) {
        errors.push(`Validation error: ${error.message}`);
    }

    return errors;
};

const LoanReportPanel = () => {
    const dispatch = useDispatch();
    const { selectedTemplate, currentTemplate } = useSelector((state) => state.report);
    const [activeTab, setActiveTab] = useState("preview");
    const [selectedLoanType, setSelectedLoanType] = useState("business");
    const [jsonInput, setJsonInput] = useState("");
    const [jsonError, setJsonError] = useState(null);
    const [validationErrors, setValidationErrors] = useState([]);
    const [previewTemplate, setPreviewTemplate] = useState(null);
    const [copied, setCopied] = useState(false);

    const templateNames = {
        business: 'Business Loan',
        personal: 'Personal Loan',
        home: 'Home Loan',
        education: 'Education Loan'
    };

    useEffect(() => {
        const template = templates[`${selectedLoanType}Loan`];
        dispatch(setCurrentTemplate(template));
        setJsonInput(JSON.stringify(template, null, 2));
        setPreviewTemplate(template);
        setValidationErrors([]);
        setJsonError(null);
    }, [selectedLoanType, dispatch]);

    const handleTemplateChange = (value) => {
        setSelectedLoanType(value);
        dispatch(setSelectedTemplate(value));
    };

    const handleJsonChange = (value, parsed, error) => {
        setJsonInput(value);
        if (error) {
            setJsonError(error);
            setPreviewTemplate(null);
            setValidationErrors([]);
        } else {
            setJsonError(null);
            const errors = validateTemplateStructure(parsed);
            setValidationErrors(errors);
            if (errors.length === 0) {
                setPreviewTemplate(parsed);
            }
        }
    };

    const handleCopyTemplate = () => {
        navigator.clipboard.writeText(jsonInput);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleReset = () => {
        const template = templates[`${selectedLoanType}Loan`];
        setJsonInput(JSON.stringify(template, null, 2));
        setPreviewTemplate(template);
        setJsonError(null);
        setValidationErrors([]);
    };

    return (
        <div className="container mx-auto p-6">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-2xl">Loan Report Generator</CardTitle>
                            <CardDescription>Generate detailed loan analysis reports</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Info className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Select loan type and view generated report</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="flex items-center justify-between mb-6 gap-4">
                        <div className="flex-1 max-w-xs">
                            <Select value={selectedLoanType} onValueChange={handleTemplateChange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select loan type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.entries(templateNames).map(([key, name]) => (
                                        <SelectItem key={key} value={key}>
                                            <div className="flex items-center">
                                                <FileText className="mr-2 h-4 w-4" />
                                                {name}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={handleCopyTemplate}>
                                {copied ? (
                                    <Check className="h-4 w-4 mr-2" />
                                ) : (
                                    <Copy className="h-4 w-4 mr-2" />
                                )}
                                {copied ? 'Copied!' : 'Copy Template'}
                            </Button>
                            <Button variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Export PDF
                            </Button>
                            <Button variant="outline">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                            </Button>
                        </div>
                    </div>

                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger value="preview">Preview Report</TabsTrigger>
                            <TabsTrigger value="json">Template Data</TabsTrigger>
                        </TabsList>

                        <TabsContent value="preview" className="mt-0">
                            <Card>
                                <CardHeader className="py-4">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg">Report Preview</CardTitle>
                                        <Badge variant="outline">{templateNames[selectedLoanType]}</Badge>
                                    </div>
                                </CardHeader>
                                <ScrollArea className="h-[800px] border-t">
                                    <div className="p-6">
                                        <LoanAnalysisTemplate template={previewTemplate} />
                                    </div>
                                </ScrollArea>
                            </Card>
                        </TabsContent>

                        <TabsContent value="json" className="mt-0">
                            <Card>
                                <CardHeader className="py-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle className="text-lg">Template Structure</CardTitle>
                                            <CardDescription>Edit JSON template data</CardDescription>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={handleReset}
                                            >
                                                <RefreshCcw className="h-4 w-4 mr-2" />
                                                Reset
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <JSONEditor
                                        value={jsonInput}
                                        onChange={handleJsonChange}
                                        onReset={handleReset}
                                        error={jsonError}
                                        validationErrors={validationErrors}
                                    />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoanReportPanel;