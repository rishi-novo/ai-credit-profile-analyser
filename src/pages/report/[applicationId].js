import { useRouter } from 'next/router';
import axios from 'axios';
import LoanAnalysisTemplate from '@/components/LoanAnalysisTemplate';
import { useEffect, useState } from 'react';

const ReportPage = () => {
    const router = useRouter();
    const { applicationId } = router.query;

    const [template, setTemplate] = useState(null);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const response = await axios.post('https://ai-analyzer-api.indirow.com/v1/cam/zoho/generate', {
                    application_id: applicationId,
                });
                setTemplate(response.data);
            } catch (error) {
                console.error('Error fetching template:', error);
            }
        };

        if (applicationId) {
            fetchTemplate();
        }
    }, [applicationId]);

    return (
        <div>
            <LoanAnalysisTemplate template={template} />
        </div>
    );
};

export default ReportPage;