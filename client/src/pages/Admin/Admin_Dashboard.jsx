import React, { useEffect, useMemo, useState, lazy, Suspense } from "react";
import wavingImg from "/images/Dashboard/hand.gif";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { dashboardAnalytics as Analysis } from "../../assets";
import Block_Count from "../../component/Block_Count";
import { getCount } from "../../services/globalService";

const ClientTable = lazy(() => import("../../component/ClientTable"));
const Companytable = lazy(() => import("../../component/Companytable"));
const DocumentTable = lazy(() => import("../../component/DocumentTable"));

export default function Admin_Dashboard() {
  const OverViewAnalysis = useMemo(() => Analysis || [], []);
  const [usersCount, setUserCount] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsersCount = async () => {
      try {
        const userCounts = await Promise.all(
          OverViewAnalysis.map(async (category) => {
            const { count } = await getCount(category.Title);
            return { count };
          })
        );
        setUserCount(userCounts);
      } catch (error) {
        setError("Failed to load user counts");
        console.error("Error fetching user counts:", error);
      }
    };
    fetchUsersCount();
  }, []);

  return (
    <div className="mt-4">
      <div className="flex flex-row items-center gap-1">
        <h3 className="text-2xl font-semibold">Hi, Welcome back </h3>
        <div className="w-12 h-12 overflow-hidden mb-2">
          <img
            src={wavingImg}
            alt="Animated wavy Img"
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {usersCount.length === 0
          ? OverViewAnalysis.map((_, index) => (
              <div key={index}>
                <Skeleton width="100%" height="4rem" />
                <Skeleton width="75%" className="mb-2" />
                <Skeleton width="50%" className="mb-2" />
                <Skeleton height="2rem" className="mb-2" />
              </div>
            ))
          : OverViewAnalysis.map((block, index) => {
              const countData = usersCount[index];
              return (
                <Block_Count
                  key={block.Title || `block-${index}`}
                  bgColor={block.bgColor || "bg-gray-200"}
                  iconColor={block.iconColor || "text-gray-500"}
                  titleColor={block.titleColor || "text-gray-700"}
                  Title={block.Title || "Unknown"}
                  count={countData?.count || 0}
                  icon={block.icon || "default-icon"}
                />
              );
            })}
      </div>

      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="container overflow-hidden">
        <Suspense fallback={<Skeleton count={3} height="5rem" />}>
          <ClientTable />
          <Companytable />
          <DocumentTable />
        </Suspense>
      </div>
    </div>
  );
}
