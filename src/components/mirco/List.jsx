// src/components/micro/List.jsx
import { Check } from "lucide-react";

const List = ({ items = [], style = {} }) => (
    <div className="space-y-2">
        {items.map((item, index) => (
            <div
                key={index}
                className="flex items-center space-x-2"
            >
                <Check className="h-4 w-4" style={{ color: style.color || 'inherit' }} />
                <span className="text-sm" style={{ color: style.color || 'inherit' }}>
                    {item}
                </span>
            </div>
        ))}
    </div>
);

export default List;