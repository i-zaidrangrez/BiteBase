import {
  FaClipboardCheck,
  FaUserPlus,
  FaUtensils,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "New Order Received",
    description: "Order #ORD-1028 placed by Rahul Sharma.",
    time: "2 min ago",
    icon: <FaClipboardCheck />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 2,
    title: "New Customer",
    description: "A new customer created an account.",
    time: "15 min ago",
    icon: <FaUserPlus />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Menu Updated",
    description: "Paneer Burger added to the menu.",
    time: "1 hour ago",
    icon: <FaUtensils />,
    color: "bg-blue-100 text-blue-600",
  },
];

const ActivityFeed = () => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Recent Activity
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Latest updates from your restaurant
      </p>

      <div className="mt-6 space-y-6">

        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">

            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${activity.color}`}
            >
              {activity.icon}
            </div>

            <div>

              <h3 className="font-semibold">
                {activity.title}
              </h3>

              <p className="text-sm text-gray-500">
                {activity.description}
              </p>

              <span className="mt-1 block text-xs text-gray-400">
                {activity.time}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ActivityFeed;