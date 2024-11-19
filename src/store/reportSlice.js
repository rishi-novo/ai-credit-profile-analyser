// store/reportSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { businessLoan } from '@/data/templates';

const initialState = {
    selectedTemplate: 'business',
    currentTemplate: businessLoan,
    loading: false,
    error: null
};

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setSelectedTemplate: (state, action) => {
            state.selectedTemplate = action.payload;
        },
        setCurrentTemplate: (state, action) => {
            state.currentTemplate = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    setSelectedTemplate,
    setCurrentTemplate,
    setLoading,
    setError
} = reportSlice.actions;

export default reportSlice.reducer;