import { useState } from "react";
import ActivityFeed from "./ActivityFeed";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import PopularItems from "./PopularItems";
import QuickActions from "./QuickActions";
import RecentOrders from "./RecentOrders";
import RevenueChart from "./RevenueChart";
import StatsCards from "./StatsCards";
import MobileSidebar from "./MobileSidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="flex">

        <main className="flex-1">

          <div className="p-6 space-y-6">
            <StatsCards />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <RevenueChart />
              </div>

              <PopularItems />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <RecentOrders />
              </div>

              <ActivityFeed />
            </div>

            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
