import React from "react";

type Props = {
  className?: string;
};

const BlurEllipse = ({ className }: Props) => {
  return (
    <div
      className={`absolute rounded-full blur-[15rem] bg-primary w-60 h-60 ${className}`}
    ></div>
  );
};

export default BlurEllipse;
