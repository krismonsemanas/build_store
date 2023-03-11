import Skeleton from "@/components/atoms/skeletons/Skeleton";
import React from "react";

const TableSkeleton = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <Skeleton height="2.5" />
          </th>
          <th>
            <Skeleton height="2.5" />
          </th>
          <th>
            <Skeleton height="2.5" />
          </th>
          <th>
            <Skeleton height="2.5" />
          </th>
          <th>
            <div className="flex justify-center items-center">
              <Skeleton height="2.5" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array(5)
          .fill(5)
          .map((item: any) => (
            <tr key={item}>
              <td>
                <Skeleton height="2.5" />
              </td>
              <td>
                <Skeleton height="2.5" />
              </td>
              <td>
                <Skeleton height="2.5" />
              </td>
              <td>
                <Skeleton height="2.5" />
              </td>
              <td>
                <div className="flex justify-center items-center gap-2">
                  <Skeleton width="6" height="6" />
                  <Skeleton width="6" height="6" />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
