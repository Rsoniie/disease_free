import React from "react";
import { FiHome, FiCheckSquare, FiBell, FiSearch, FiMenu } from "react-icons/fi";
import { FaTemperatureHigh, FaHeadSideCough } from "react-icons/fa";
import Footer from "../components/Footer";

const measures = [
  { 
    text: "Use prescribed medications", 
    icon: <FaTemperatureHigh className="text-indigo-600" />,
    category: "fever" 
  },
  { 
    text: "Use warm/cold packs when necessary",
    category: "fever" 
  },
  { 
    text: "Drink warm water frequently",
    category: "fever" 
  },
  { 
    text: "Get plenty of rest",
    category: "both" 
  },
  { 
    text: "In case of adult, serve ORS if necessary", 
    important: true,
    category: "fever" 
  },
  { 
    text: "Using mosquito coils or repellents", 
    icon: <FaHeadSideCough className="text-indigo-600" />,
    category: "dengue" 
  },
  { 
    text: "Once fever disappears, wear clean clothes", 
    important: true,
    category: "fever" 
  },
];

const activities = [
  "Consulted 1-5 volunteers",
  "Consulted a fever case",
  "Read two articles on dengue",
];

const Section = ({ title, icon, category }: { title: string; icon?: React.ReactNode; category?: string }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-600">
        {icon}
      </div>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    </div>

    {measures
      .filter(item => item.category === category || item.category === "both")
      .map((item, idx) => (
        <div
          key={idx}
          className="flex items-center mb-3 p-3 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 hover:shadow-sm transition-all"
        >
          <input 
            type="checkbox" 
            className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
          />
          <span className="ml-3 flex-1 text-gray-800">
            {item.text}
            {item.important && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                Important
              </span>
            )}
          </span>
          {item.icon && (
            <div className="ml-2 text-indigo-600">
              {item.icon}
            </div>
          )}
        </div>
      ))}
  </div>
);

const TodoList: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("todo");

  return (
    <div className="max-w-3xl mx-auto px-4 pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center py-6 sticky top-0 bg-gray-50 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Health Checklist</h1>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-indigo-600 transition-colors">
            <FiSearch className="text-xl" />
          </button>
          <button className="text-gray-500 hover:text-indigo-600 transition-colors">
            <FiMenu className="text-xl" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <Section
          title="Fever Management"
          icon={<FaTemperatureHigh />}
          category="fever"
        />
      </div>

      <div className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <Section
          title="Dengue Prevention"
          icon={<FaHeadSideCough />}
          category="dengue"
        />
      </div>

      {/* Activity cards */}
      <div className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Activity</h2>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-600 mr-3"></div>
                <span className="text-gray-800">{activity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

<Footer/>
    </div>
  );
};

export default TodoList;