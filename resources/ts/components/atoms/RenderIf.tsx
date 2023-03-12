import React, { ReactNode } from "react";

type RenderIfProps = {
  children: ReactNode;
  isTrue: boolean;
};

const RenderIf = ({ children, isTrue }: RenderIfProps) => {
  return isTrue ? <>{children}</> : <></>;
};

export default RenderIf;
