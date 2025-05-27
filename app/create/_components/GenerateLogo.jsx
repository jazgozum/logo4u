import React, { useEffect, useState } from 'react'
import Prompt from '@/app/_data/prompt';
import axios from 'axios'
import { Loader2Icon } from 'lucide-react';
import Link from 'next/link';

function GenerateLogo({ formData }) {
    const [logoOptions, setLogoOptions] = useState([]);
    const [selectedLogo, setSelectedLogo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (formData) {
            GenerateMultipleLogos();
        }
    }, [formData]); // Only run when formData changes

    const GenerateMultipleLogos = async () => {
        setIsLoading(true);
        setLogoOptions([]);
        setSelectedLogo('');

        try {
            const PROMPT = Prompt.LOGO_PROMPT
                .replace('{logoTitle}', formData?.title)
                .replace('{logoDesc}', formData?.desc)
                .replace('{logoColor}', formData?.palette)
                .replace('{logoIdea}', formData?.idea)
                .replace('{logoDesign}', formData?.design.title)
                .replace('{logoPrompt}', formData?.design.prompt);

            // Get the enhanced prompt
            const result = await axios.post('/api/ai-logo-model', {
                prompt: PROMPT,
            });

            const enhancedPrompt = result.data.prompt[0];

            // Generate 3 logos simultaneously
            const logoPromises = Array(3).fill().map(async (_, index) => {
                try {
                    const logoResult = await axios.post('/api/ai-generate-logo', {
                        prompt: enhancedPrompt,
                    });
                    return {
                        id: index + 1,
                        image: logoResult.data.imageBase64 ? `data:image/png;base64,${logoResult.data.imageBase64}` : null,
                        hasError: !logoResult.data.imageBase64
                    };
                } catch (error) {
                    console.error(`Error generating logo ${index + 1}:`, error);
                    return {
                        id: index + 1,
                        image: null,
                        hasError: true
                    };
                }
            });

            const generatedLogos = await Promise.all(logoPromises);
            setLogoOptions(generatedLogos);
        } catch (error) {
            console.error('Error generating logos:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogoSelect = (logoImage) => {
        setSelectedLogo(logoImage);
    };

    const handleRegenerate = () => {
        GenerateMultipleLogos();
    };

    return (
        <div className="space-y-6">
            {isLoading && (
                <div className="text-center">
                    <p>Generating your logo. Avoid refreshing the page</p>
                    <div className="flex justify-center items-center mt-5">
                        <Loader2Icon className='animate-spin text-primary w-10 h-10' />
                    </div>
                </div>
            )}

            {logoOptions.length > 0 && !selectedLogo && (
                <div>
                    <h3 className="text-lg font-semibold mb-4">Choose your favorite logo:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {logoOptions.map((logo) => (
                            <div
                                key={logo.id}
                                className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                                onClick={() => !logo.hasError && handleLogoSelect(logo.image)}
                            >
                                {logo.hasError ? (
                                    <div className="w-full h-48 bg-gray-100 rounded flex flex-col items-center justify-center text-gray-500">
                                        <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-sm">Failed to generate</p>
                                    </div>
                                ) : (
                                    <img
                                        src={logo.image}
                                        alt={`Logo Option ${logo.id}`}
                                        className="w-full h-auto rounded"
                                    />
                                )}
                                <button
                                    className={`w-full mt-2 py-2 px-4 rounded ${logo.hasError
                                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                            : 'bg-primary text-white hover:bg-primary cursor-pointer'
                                        }`}
                                    disabled={logo.hasError}
                                >
                                    {logo.hasError ? 'Generation Failed' : 'Select This Logo'}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-5 gap-4">
                        <button
                            onClick={handleRegenerate}
                            className="bg-primary cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Generate New Options
                        </button>
                        <Link
                            href="/"
                            className="bg-primary cursor-pointer text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Start Over
                        </Link>

                    </div>
                </div>
            )}

            {selectedLogo && (
                <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">Your Selected Logo:</h3>
                    <img
                        src={selectedLogo}
                        alt="Selected Logo"
                        className="max-w-md mx-auto rounded-lg shadow-lg"
                    />
                    <div className="mt-4 space-x-2">
                        <button
                            onClick={() => setSelectedLogo('')}
                            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                        >
                            Choose Different Logo
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}

export default GenerateLogo