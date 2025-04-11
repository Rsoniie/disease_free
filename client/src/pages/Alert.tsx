import React from "react";
import { FiHome, FiCheckSquare, FiBell, FiSearch, FiUser, FiChevronRight } from "react-icons/fi";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Footer from "../components/Footer";

const alerts = [
  {
    date: "Today",
    items: [
      {
        title: "Infection outbreak reported",
        description: "16 new conjunctivitis cases diagnosed in your area.",
        highlight: true,
        time: "2:45 PM",
      },
      {
        title: "Weather alert",
        description: "Heavy rain forecasted today. Remember your umbrella.",
        highlight: false,
        time: "9:30 AM",
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        title: "Dengue prevention advisory",
        description: "Increase in mosquito activity detected. Use repellents.",
        highlight: true,
        time: "4:15 PM",
      },
      {
        title: "Community health check",
        description: "Free health screening this weekend at community center.",
        highlight: false,
        time: "11:20 AM",
      },
      {
        title: "Air quality notice",
        description: "Moderate air pollution levels expected tomorrow.",
        highlight: false,
        time: "8:00 AM",
      },
    ],
  },
];

const Alerts = () => {
  const [activeTab, setActiveTab] = React.useState("alerts");

  return (
    <div className="max-w-3xl mx-auto px-4 pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center py-6 sticky top-0 bg-gray-50 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Health Alerts</h1>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-indigo-600 transition-colors">
            <FiSearch className="text-xl" />
          </button>
          <button className="text-gray-500 hover:text-indigo-600 transition-colors">
            <FiUser className="text-xl" />
          </button>
        </div>
      </header>

      {/* Alert sections */}
      {alerts.map((section, sidx) => (
        <div key={sidx} className="mb-6">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
            {section.date}
          </span>

          {section.items.map((item, idx) => (
            <div
              key={idx}
              className={`mb-3 p-4 rounded-xl border ${
                item.highlight
                  ? "border-yellow-200 bg-yellow-50"
                  : "border-gray-200 bg-white"
              } shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex gap-3">
                <div className={`mt-1 text-xl ${item.highlight ? "text-yellow-500" : "text-indigo-500"}`}>
                  {item.highlight ? <FaExclamationTriangle /> : <IoMdInformationCircleOutline />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  {item.highlight && (
                    <button className="flex items-center text-indigo-600 font-semibold text-sm hover:underline">
                      View details <FiChevronRight className="ml-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

    <Footer/>
    </div>
  );
};

export default Alerts;