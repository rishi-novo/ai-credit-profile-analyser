// src/components/micro/List.jsx
const List = ({ items = [], style = {} }) => (
    <div className="space-y-2">
        {items.map((item, index) => (
            <div
                key={index}
                className="flex items-center space-x-2"
            >
                <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{
                        backgroundColor: style?.color || 'currentColor',
                        marginRight: '0.1rem'
                    }}
                />
                <span className="text-sm" style={{ color: style?.color || 'inherit' }}>
                    {item}
                </span>
            </div>
        ))}
    </div>
);

export default List;