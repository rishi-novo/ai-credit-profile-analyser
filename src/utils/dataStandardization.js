// utils/dataStandardization.js
export const standardizeTemplateData = (response) => {
    // Handle API response structure
    const data = response.data || response;
    if (!data) return null;

    return {
        meta: {
            title: data.meta?.title,
            author: data.meta?.author,
            reportId: data.meta?.reportId,
            loanType: data.meta?.loanType,
            status: data.meta?.status,
            applicationType: data.meta?.applicationType,
            priority: data.meta?.priority,
            generatedDate: data.meta?.generatedDate,
            lastUpdated: data.meta?.lastUpdated,
            analysisType: data.meta?.analysisType
        },
        sections: data.sections?.map(section => ({
            type: 'section',
            id: section.id,
            variant: section.variant,
            heading: {
                level: section.heading?.level || 1,
                text: section.heading?.text,
                description: section.heading?.description
            },
            content: section.content?.map(item => {
                if (item.type === 'graph') {
                    return {
                        ...item,
                        data: {
                            labels: item.data?.labels || [],
                            datasets: Array.isArray(item.data?.datasets)
                                ? item.data.datasets
                                : [{
                                    label: item.data?.datasets?.label,
                                    data: item.data?.datasets?.data,
                                    color: item.data?.datasets?.color
                                }],
                            chartConfig: item.data?.chartConfig || item.data?.chart_config
                        }
                    };
                }
                return item;
            })
        }))
    };
};