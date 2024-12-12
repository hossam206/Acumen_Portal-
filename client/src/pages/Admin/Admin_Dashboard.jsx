import React, { useMemo } from "react";
import Block_Count from "../../component/Block_Count";
import { dashboardAnalytics as Analysis } from "../../assets";
import DocumentTable from "../../component/DocumentTable";
import ClientTable from "../../component/ClientTable";
import Companytable from "../../component/Companytable";
export default function Admin_Dashboard() {
  const OverViewAnalysis = useMemo(() => Analysis, []);

  return (
    <div className="mt-4 ">
      <h3 className="text-2xl font-semibold ">Hi, Welcome back 👋</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {OverViewAnalysis?.map((block, index) => (
          <Block_Count
            key={index} // Or use block.Title or another unique property
            bgColor={block.bgColor}
            iconColor={block.iconColor}
            titleColor={block.titleColor}
            Title={block.Title}
            count={block.count}
            icon={block.icon}
          />
        ))}
      </div>
      <div className="container overflow-hidden">
        <ClientTable />
        <Companytable />
        <DocumentTable />
      </div>
    </div>
  );
}
