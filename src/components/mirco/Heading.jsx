// src/components/micro/Heading.jsx
import React from 'react';
import { cn } from "@/lib/utils";

const Heading = ({ level = 1, text, style = {}, className }) => {
    const Tag = `h${level}`;
    const baseStyles = {
        1: 'scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl',
        2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
        4: 'scroll-m-20 text-xl font-semibold tracking-tight',
        5: 'scroll-m-20 text-lg font-semibold tracking-tight',
        6: 'scroll-m-20 text-base font-semibold tracking-tight'
    };

    return (
        <Tag
            className={cn(baseStyles[level], className)}
            style={{ color: style?.color || 'inherit' }}
        >
            {text}
        </Tag>
    );
};

export default Heading;