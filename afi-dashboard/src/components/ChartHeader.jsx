import React from "react";

const ChartHeader = ({title}) => {
  return (
    <div className="mb-10">
      <p className="p-3 font-bold text-xl tracking-tight">{title}</p>
    </div>
  );
};

export default ChartHeader;
