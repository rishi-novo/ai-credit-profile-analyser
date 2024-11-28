import { useRouter } from 'next/router';
import axios from 'axios';
import LoanAnalysisTemplate from '@/components/LoanAnalysisTemplate';
import { useEffect, useState } from 'react';

const CustomLoader = () => {
    const [loaderText, setLoaderText] = useState('Fetching Financial Records...');

    useEffect(() => {
        const interval = setInterval(() => {
            switch (loaderText) {
                case 'Fetching Financial Records':
                    setLoaderText('Reading Bank Statements...');
                    break;
                case 'Reading Bank Statements':
                    setLoaderText('Generating Credit Summary...');
                    break;
                case 'Generating Credit Summary':
                    setLoaderText('Fetching Financial Records...');
                    break;
                default:
                    setLoaderText('Fetching Financial Records...');
                    break;
            }
        }, 2500);

        return () => clearInterval(interval);
    }, [loaderText]);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center flex-col gap-4">
            <div className="border-4 border-blue-500 border-t-4 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
            <h3 className="ml-4 text-blue-500 font-medium fs-3">{loaderText}</h3>
        </div>
    );
};

const ReportPage = () => {
    const router = useRouter();
    const { applicationId } = router.query;

    const [template, setTemplate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const response = await axios.post('https://ai-analyzer-api.indirow.com/v1/cam/zoho/generate', {
                    application_id: applicationId,
                });
                setTemplate(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching template:', error);
                setIsLoading(false);
            }
        };

        if (applicationId) {
            fetchTemplate();
        }
    }, [applicationId]);

    return (
        <div>
            {isLoading &&
                <CustomLoader />
            }
            <LoanAnalysisTemplate template={template} />
        </div>
    );
};

export default ReportPage;