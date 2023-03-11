import RenderIf from "@/components/atoms/RenderIf";
import { BasicTableProps, Column } from "@/types/table";

const BasicTable = ({ rows, columns }: BasicTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column: Column, index: number) => (
            <th key={index}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <RenderIf isTrue={rows.length === 0}>
          <tr>
            <td colSpan={columns.length}>
              <p className="text-md font-medium text-gray-900 dark:text-gray-300">
                Data masih kosong
              </p>
            </td>
          </tr>
        </RenderIf>
        <RenderIf isTrue={rows.length > 0}>
          {rows.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {columns.map((column: any, columnIndex: number) => (
                <td key={`${rowIndex}-${columnIndex}`}></td>
              ))}
            </tr>
          ))}
        </RenderIf>
      </tbody>
    </table>
  );
};

export default BasicTable;
