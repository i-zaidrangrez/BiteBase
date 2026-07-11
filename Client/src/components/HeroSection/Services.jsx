import { FaTruck } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdBadge } from "react-icons/md";


const services = [
  {
    title: "Fast Delivery",
    description: "On time, Every time",
    icon: FaTruck,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    title: "Secure Payment",
    description: "100% Protected",
    icon: IoShieldCheckmark,
    bg: "bg-green-100",
    color: "text-green-500",
  },
  {
    title: "Best Quality",
    description: "Always Fresh",
    icon: MdBadge,
    bg: "bg-yellow-100",
    color: "text-yellow-500",
  },
];

const Services = () => {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="
                group
                flex
                items-center
                gap-5
                rounded-3xl
                border
                border-gray-100
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Icon */}

              <div
                className={`
                  ${service.bg}
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                `}
              >
                <Icon
                  size={34}
                  className={service.color}
                />
              </div>

              {/* Text */}

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;