import React from "react";
import RenderIf from "../RenderIf";

type SkeletonProps = {
  circle?: boolean;
  width?:
    | "0"
    | "px"
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "3"
    | "3.5"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "14"
    | "16"
    | "18"
    | "20"
    | "24"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "96"
    | "auto"
    | "1/2"
    | "1/3"
    | "1/4"
    | "1/6"
    | "1/12"
    | "2/3"
    | "2/4"
    | "2/5"
    | "2/6"
    | "2/12"
    | "3/4"
    | "3/5"
    | "3/6"
    | "3/12"
    | "4/5"
    | "4/6"
    | "4/12"
    | "5/6"
    | "5/12"
    | "7/12"
    | "8/12"
    | "9/12"
    | "10/12"
    | "11/12"
    | "full"
    | "min"
    | "screen"
    | "max"
    | "fit";

  height?:
    | "0"
    | "px"
    | "0.5"
    | "1"
    | "1.5"
    | "2"
    | "2.5"
    | "3"
    | "3.5"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "14"
    | "16"
    | "18"
    | "20"
    | "24"
    | "32"
    | "36"
    | "40"
    | "44"
    | "48"
    | "52"
    | "56"
    | "60"
    | "64"
    | "72"
    | "96"
    | "auto"
    | "1/2"
    | "1/3"
    | "1/4"
    | "1/6"
    | "1/12"
    | "2/3"
    | "2/4"
    | "2/5"
    | "2/6"
    | "2/12"
    | "3/4"
    | "3/5"
    | "3/6"
    | "3/12"
    | "4/5"
    | "4/6"
    | "4/12"
    | "5/6"
    | "5/12"
    | "7/12"
    | "8/12"
    | "9/12"
    | "10/12"
    | "11/12"
    | "full"
    | "min"
    | "screen"
    | "max"
    | "fit";
};

const Skeleton = ({
  circle = false,
  width = "20",
  height = "2",
}: SkeletonProps) => {
  return (
    <>
      <RenderIf isTrue={!circle}>
        <div
          className={`w-${width} bg-gray-300 dark:bg-gray-400 h-${height} rounded animate-pulse`}
        />
      </RenderIf>
      <RenderIf isTrue={circle}>
        <div
          className={`w-${width} bg-gray-300 dark:bg-gray-400 h-${width} rounded-full animate-pulse`}
        />
      </RenderIf>
    </>
  );
};

export default Skeleton;
