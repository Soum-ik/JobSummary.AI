"use client";

import { useState } from 'react';
import { Sparkles, Download, Copy, Check, Loader2 } from 'lucide-react';

interface JobSummaryResponse {
    summary: string;
    coverLetter: string;
    upworkProposal: string;
}

export default function Tool() {
    const [jobDescription, setJobDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<JobSummaryResponse | null>(null);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState<'summary' | 'coverLetter' | 'upworkProposal'>('summary');
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (jobDescription.trim().length < 50) {
            setError('Please enter a more detailed job description for better results (minimum 50 characters).');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Call our API route
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobDescription }),
            });

            if (!response.ok) {
                throw new Error('API call failed');
            }

            const result = await response.json();
            setResult(result);
        } catch (err) {
            setError('There was an error generating your summary. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        let textToCopy;
        
        if (activeTab === 'summary') {
            textToCopy = result?.summary;
        } else if (activeTab === 'coverLetter') {
            textToCopy = result?.coverLetter;
        } else {
            textToCopy = result?.upworkProposal;
        }
        
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        let textToDownload;
        let filename;
        
        if (activeTab === 'summary') {
            textToDownload = result?.summary;
            filename = 'job_summary.txt';
        } else if (activeTab === 'coverLetter') {
            textToDownload = result?.coverLetter;
            filename = 'cover_letter.txt';
        } else {
            textToDownload = result?.upworkProposal;
            filename = 'upwork_proposal.txt';
        }

        if (textToDownload) {
            const element = document.createElement('a');
            const file = new Blob([textToDownload], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = filename;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
    };

    return (
        <div className="animated-gradient bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 animated-text-gradient bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 inline-block">AI-Powered Job Application Assistant</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Paste your job description below and our AI will generate a professional summary, cover letter, and Upwork proposal
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 md:p-8">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                    Job Description
                                </label>
                                <textarea
                                    id="jobDescription"
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    rows={10}
                                    placeholder="Paste the complete job description here..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    required
                                ></textarea>

                                {error && (
                                    <div className="mt-2 text-red-500 text-sm">{error}</div>
                                )}

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full flex items-center justify-center shimmer-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-3 px-4 rounded-md font-medium ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-indigo-700'}`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                Generate with AI
                                                <Sparkles className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {result && (
                            <div className="border-t border-gray-100">
                                <div className="flex border-b border-gray-100">
                                    <button
                                        className={`flex-1 py-3 text-center font-medium ${activeTab === 'summary'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        onClick={() => setActiveTab('summary')}
                                    >
                                        Job Summary
                                    </button>
                                    <button
                                        className={`flex-1 py-3 text-center font-medium ${activeTab === 'coverLetter'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        onClick={() => setActiveTab('coverLetter')}
                                    >
                                        Cover Letter
                                    </button>
                                    <button
                                        className={`flex-1 py-3 text-center font-medium ${activeTab === 'upworkProposal'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                            }`}
                                        onClick={() => setActiveTab('upworkProposal')}
                                    >
                                        Upwork Proposal
                                    </button>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className="flex justify-end space-x-2 mb-4">
                                        <button
                                            onClick={handleCopy}
                                            className="inline-flex items-center text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium"
                                        >
                                            {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                        <button
                                            onClick={handleDownload}
                                            className="inline-flex items-center text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium"
                                        >
                                            <Download className="h-4 w-4 mr-2" />
                                            Download
                                        </button>
                                    </div>

                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 whitespace-pre-wrap markdown-content">
                                        {activeTab === 'summary' 
                                            ? result.summary 
                                            : activeTab === 'coverLetter' 
                                                ? result.coverLetter 
                                                : result.upworkProposal}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
