import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 24000 },
  { month: "May", revenue: 21000 },
  { month: "Jun", revenue: 30000 },
  { month: "Jul", revenue: 28000 },
];

const RevenueChart = () => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Revenue Overview
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Revenue generated during the last 7 months
          </p>
        </div>

        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm hover:bg-orange-50">
          Last 7 Months
        </button>
      </div>

      {/* Chart */}

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ececec" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#e8691a"
              strokeWidth={4}
              dot={{
                fill: "#e8691a",
                r: 5,
              }}
              activeDot={{
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;