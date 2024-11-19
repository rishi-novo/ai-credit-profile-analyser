// src/components/micro/Table.jsx
import {
    Table as ShadcnTable,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Table = ({ columns = [], rows = [], style = {} }) => (
    <div className="rounded-md border">
        <ShadcnTable>
            <TableHeader>
                <TableRow>
                    {columns.map((column, index) => (
                        <TableHead
                            key={index}
                            style={{ backgroundColor: style.headerBackgroundColor }}
                        >
                            {column.header}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <TableCell key={colIndex}>
                                {row[column.key]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </ShadcnTable>
    </div>
);

export default Table;