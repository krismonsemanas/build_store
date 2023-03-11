import RenderIf from "@/components/atoms/RenderIf";
import BaseButton from "@/components/BaseButton";
import CardBox from "@/components/CardBox";
import CardBoxWidget from "@/components/CardBoxWidget";
import ChartLineSample from "@/components/ChartLineSample";
import { sampleChartData } from "@/components/ChartLineSample/config";
import BasicTable from "@/components/molecules/tables/BasicTable";
import TableSkeleton from "@/components/molecules/tables/TableSkeleton";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton";
import LayoutAuthenticated from "@/layouts/Authenticated";
import { useGetFiveUserQuery } from "@/services/overview";
import { Column } from "@/types/table";
import {
  mdiAccountMultiple,
  mdiChartPie,
  mdiChartTimelineVariant,
  mdiReload
} from "@mdi/js";
import React, { useState } from "react";

const Dashboard = () => {
  const [chartData, setChartData] = useState(sampleChartData);

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault();

    setChartData(sampleChartData());
  };

  const columns: Column[] = [
    {
      name: "#",
    },

    {
      name: "First Name",
      accessor: "firstName",
    },
    {
      name: "Last Name",
      accessor: "lastName",
    },
    {
      name: "Email",
      accessor: "email",
    },
    {
      name: "Age",
      accessor: "age",
    },
    {
      name: "Actions",
    },
  ];

  const { data: users, isLoading, error } = useGetFiveUserQuery();
  console.log(users);

  return (
    <LayoutAuthenticated>
      <SectionTitleLineWithButton
        icon={mdiChartTimelineVariant}
        title="Overview"
        main
      >
        <BaseButton icon={mdiReload} onClick={() => alert("reload")} />
      </SectionTitleLineWithButton>

      {/* Statistic */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          trendLabel="12%"
          trendType="up"
          trendColor="success"
          icon={mdiAccountMultiple}
          iconColor="success"
          number={512}
          label="Clients"
        />
        <CardBoxWidget
          trendLabel="16%"
          trendType="down"
          trendColor="danger"
          icon={mdiAccountMultiple}
          iconColor="success"
          number={512}
          label="Clients"
        />
        <CardBoxWidget
          trendLabel="Overview"
          trendType="warning"
          trendColor="warning"
          icon={mdiAccountMultiple}
          iconColor="success"
          number={512}
          label="Clients"
        />
      </div>

      {/* Chart Section */}
      <SectionTitleLineWithButton icon={mdiChartPie} title="Statistik">
        <BaseButton icon={mdiReload} onClick={fillChartData} />
      </SectionTitleLineWithButton>

      <CardBox className="mb-6">
        {chartData && <ChartLineSample data={chartData} />}
      </CardBox>

      {/* ./chart Section */}

      {/* Last five data */}
      <SectionTitleLineWithButton icon={mdiChartPie} title="Last client">
        <BaseButton icon={mdiReload} onClick={() => alert("ok")} />
      </SectionTitleLineWithButton>

      <RenderIf isTrue={isLoading}>
        <TableSkeleton />
      </RenderIf>
      <RenderIf isTrue={!isLoading}>
        <BasicTable columns={columns} rows={users.users as []} />
      </RenderIf>
    </LayoutAuthenticated>
  );
};

export default Dashboard;
