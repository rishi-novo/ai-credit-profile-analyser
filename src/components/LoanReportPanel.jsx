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
    CardFooter
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, PieChart, Info, Download, Share2 } from 'lucide-react';
import LoanAnalysisTemplate from './LoanAnalysisTemplate';
import * as templates from '@/data/templates';

const LoanReportPanel = () => {
    const dispatch = useDispatch();
    const { selectedTemplate, currentTemplate } = useSelector((state) => state.report);
    const [activeTab, setActiveTab] = useState("preview");
    const [selectedLoanType, setSelectedLoanType] = useState("business");

    const templateNames = {
        business: 'Business Loan',
        personal: 'Personal Loan',
        home: 'Home Loan',
        education: 'Education Loan'
    };

    useEffect(() => {
        const template = templates[`${selectedLoanType}Loan`];
        dispatch(setCurrentTemplate(template));
    }, [selectedLoanType, dispatch]);

    const handleTemplateChange = (value) => {
        setSelectedLoanType(value);
        dispatch(setSelectedTemplate(value));
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
                                        <LoanAnalysisTemplate template={currentTemplate} />
                                    </div>
                                </ScrollArea>
                            </Card>
                        </TabsContent>

                        <TabsContent value="json" className="mt-0">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Template Structure</CardTitle>
                                </CardHeader>
                                <ScrollArea className="h-[800px] border-t">
                                    <div className="p-6">
                                        <pre className="text-sm bg-slate-50 p-4 rounded-lg overflow-auto">
                                            {JSON.stringify(currentTemplate, null, 2)}
                                        </pre>
                                    </div>
                                </ScrollArea>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoanReportPanel;