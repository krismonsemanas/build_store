import { ReactNode } from "react";
export interface Column {
  name: string | ReactNode;
  accessor?: string;
}

export type BasicTableProps = {
  rows: [];
  columns: Column[];
};
