// components/JSONEditor.jsx
import React, { useRef } from 'react';
import Editor from "@monaco-editor/react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCcw, AlertCircle } from 'lucide-react';

const JSONEditor = ({
    value,
    onChange,
    onReset,
    error,
    validationErrors = []
}) => {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;

        // Set up JSON validation
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [{
                uri: "http://myserver/loan-template-schema.json",
                fileMatch: ["*"],
                schema: {
                    type: "object",
                    required: ["meta", "sections"],
                    properties: {
                        meta: {
                            type: "object",
                            required: ["title", "author", "report_id"],
                            properties: {
                                title: { type: "string" },
                                author: { type: "string" },
                                report_id: { type: "string" }
                            }
                        },
                        sections: {
                            type: "array",
                            items: {
                                type: "object",
                                required: ["type", "id", "heading", "content"],
                                properties: {
                                    type: { type: "string", enum: ["section"] },
                                    id: { type: "string" },
                                    variant: { type: "string" },
                                    heading: {
                                        type: "object",
                                        required: ["text"],
                                        properties: {
                                            level: { type: "number" },
                                            text: { type: "string" }
                                        }
                                    },
                                    content: { type: "array" }
                                }
                            }
                        }
                    }
                }
            }]
        });
    };

    const handleEditorChange = (value) => {
        try {
            const parsed = JSON.parse(value);
            onChange(value, parsed);
        } catch (e) {
            onChange(value, null, e);
        }
    };

    return (
        <div className="space-y-4">
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        {error.message}
                    </AlertDescription>
                </Alert>
            )}

            {validationErrors.length > 0 && (
                <Alert variant="warning" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        <div className="font-semibold mb-2">Template Structure Warnings:</div>
                        <ul className="list-disc pl-4">
                            {validationErrors.map((err, index) => (
                                <li key={index}>{err}</li>
                            ))}
                        </ul>
                    </AlertDescription>
                </Alert>
            )}

            <div className="h-[600px] border rounded-lg overflow-hidden">
                <Editor
                    height="100%"
                    defaultLanguage="json"
                    value={value}
                    onChange={handleEditorChange}
                    onMount={handleEditorDidMount}
                    options={{
                        minimap: { enabled: false },
                        formatOnPaste: true,
                        formatOnType: true,
                        scrollBeyondLastLine: false,
                        wordWrap: "on",
                        wrappingIndent: "indent",
                        automaticLayout: true,
                        tabSize: 2,
                        fontSize: 14,
                        scrollbar: {
                            vertical: 'visible',
                            horizontal: 'visible',
                            verticalScrollbarSize: 12,
                            horizontalScrollbarSize: 12
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default JSONEditor;