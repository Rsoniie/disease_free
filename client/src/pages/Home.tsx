import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { FiSearch, FiMenu, FiArrowUpRight, FiHome, FiCheckSquare, FiBell } from 'react-icons/fi';
import { FaTemperatureHigh, FaHeadSideCough, FaTired, FaHeadSideMask, FaRegLaughSquint } from 'react-icons/fa';
import { GiMedicinePills, GiStomach, GiMuscleUp, GiRunningShoe } from 'react-icons/gi';
import { MdSick } from 'react-icons/md';

const HomeScreen: React.FC = () => {
  // Chart configuration
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Cases',
        data: [12, 19, 15, 22, 18, 25, 30],
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        borderColor: '#4f46e5',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'white',
        pointBorderColor: '#4f46e5',
        pointBorderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6b7280',
        },
      },
    },
  };

  // Symptoms data
  const symptoms = [
    { name: 'Fever', icon: <FaTemperatureHigh className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Cough', icon: <FaHeadSideCough className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Fatigue', icon: <FaTired className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Headache', icon: <FaHeadSideMask className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Nausea', icon: <FaRegLaughSquint className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Sore Throat', icon: <MdSick className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Stomach Pain', icon: <GiStomach className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Muscle Aches', icon: <GiMuscleUp className="text-indigo-600 text-2xl mb-3" /> },
    { name: 'Runny Nose', icon: <GiRunningShoe className="text-indigo-600 text-2xl mb-3" /> },
  ];

  // Regional cases data for the custom map visualization
  const regionalCases = [
    { region: 'North', cases: 42, color: 'bg-indigo-100 text-indigo-800' },
    { region: 'South', cases: 28, color: 'bg-purple-100 text-purple-800' },
    { region: 'East', cases: 35, color: 'bg-blue-100 text-blue-800' },
    { region: 'West', cases: 19, color: 'bg-green-100 text-green-800' },
    { region: 'Central', cases: 18, color: 'bg-yellow-100 text-yellow-800' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 pb-20 font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center py-6 sticky top-0 bg-gray-50 z-10">
        <h1 className="text-2xl font-semibold text-gray-900">Health Dashboard</h1>
        <div className="flex gap-4 text-xl text-indigo-600">
          <button aria-label="Search" className="cursor-pointer">
            <FiSearch />
          </button>
          <button aria-label="Menu" className="cursor-pointer">
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Seasonal Disease Details */}
      <section className="mb-8 bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Seasonal Disease Overview</h2>
          <a href="#" className="text-sm text-indigo-600 flex items-center gap-1">
            View stats <FiArrowUpRight />
          </a>
        </div>
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-gray-900 mr-2">142 new cases</span>
          <span className="text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full flex items-center gap-1">
            <FiArrowUpRight /> 12% from last week
          </span>
        </div>
        <div className="h-48">
          <Line data={chartData} options={chartOptions} />
        </div>
      </section>

      {/* Disease Spectrum (Map) */}
      <section className="mb-8 bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Regional Cases</h2>
          <a href="#" className="text-sm text-indigo-600 flex items-center gap-1">
            View details <FiArrowUpRight />
          </a>
        </div>
        
        {/* Custom regional visualization since we can't embed a real map without API key */}
        <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Simplified "map" visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 grid-rows-3 gap-2 w-48 h-48">
                <div className="bg-indigo-200 rounded"></div>
                <div className="bg-indigo-300 rounded"></div>
                <div className="bg-indigo-200 rounded"></div>
                <div className="bg-indigo-100 rounded"></div>
                <div className="bg-indigo-400 rounded flex items-center justify-center text-white font-bold">HOT</div>
                <div className="bg-indigo-100 rounded"></div>
                <div className="bg-indigo-200 rounded"></div>
                <div className="bg-indigo-300 rounded"></div>
                <div className="bg-indigo-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Regional cases breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
          {regionalCases.map((area) => (
            <div key={area.region} className={`${area.color} text-center py-2 rounded-lg`}>
              <div className="font-medium">{area.region}</div>
              <div className="font-bold">{area.cases}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Symptoms Grid Section */}
      <section className="mb-8 bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Common Symptoms</h2>
          <a href="#" className="text-sm text-indigo-600 flex items-center gap-1">
            View all <FiArrowUpRight />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {symptoms.map((symptom) => (
            <div 
              key={symptom.name} 
              className="bg-gray-50 rounded-xl p-4 border border-gray-200 transition-all duration-200 flex flex-col items-center justify-center h-28 cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-indigo-100"
            >
              {symptom.icon}
              <p className="text-sm font-medium text-gray-700 text-center">{symptom.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="mb-8 bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Health Articles</h2>
          <a href="#" className="text-sm text-indigo-600 flex items-center gap-1">
            View all <FiArrowUpRight />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Boost Immunity"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-1">Boost Your Immunity</h3>
              <p className="text-sm text-gray-600">5 science-backed ways to stay healthy</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Self Care"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-900 mb-1">Self Care Essentials</h3>
              <p className="text-sm text-gray-600">Tips for mental health during flu season</p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-xl mt-4 flex items-center gap-3">
          <span className="text-2xl text-indigo-600">💡</span>
          <p className="text-sm text-gray-800">
            Remember to wash hands frequently and maintain social distancing to prevent spread.
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white py-3 border-t border-gray-200 max-w-3xl mx-auto flex justify-around items-center">
        <button className="flex flex-col items-center justify-center text-indigo-600">
          <FiHome className="text-xl" />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <FiCheckSquare className="text-xl" />
          <span className="text-xs">Todo</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500">
          <FiBell className="text-xl" />
          <span className="text-xs">Alerts</span>
        </button>
      </footer>
    </div>
  );
};

export default HomeScreen;