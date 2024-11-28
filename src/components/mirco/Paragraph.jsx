// src/components/micro/Paragraph.jsx
import React from 'react';

const Paragraph = ({ text, style = {} }) => (
    <p
        className="text-base mb-4 leading-relaxed"
        style={{ color: style?.color || 'inherit' }}
    >
        {text}
    </p>
);

export default Paragraph;