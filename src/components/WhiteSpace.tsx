import React from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const SIZE_MAP = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 28,
};

interface WhiteSpaceProps {
  size?: Size;
}

function WhiteSpace({ size = "md" }: WhiteSpaceProps) {
  const sizeNumber = SIZE_MAP[size];
  return <div style={{ height: sizeNumber, width: 1 }}></div>;
}

export default WhiteSpace;
