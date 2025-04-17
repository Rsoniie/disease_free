

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { FiSearch, FiMenu, FiArrowUpRight } from 'react-icons/fi';
import { FaTemperatureHigh, FaHeadSideCough, FaTired, FaHeadSideMask, FaRegLaughSquint } from 'react-icons/fa';
import { GiStomach, GiMuscleUp, GiRunningShoe } from 'react-icons/gi';
import { MdSick } from 'react-icons/md';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';



const HomeScreen: React.FC = () => {

  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDiseaseClick = (disease: string) => {
    navigate(`/questions/${disease}`);

    setIsDropdownOpen(false);
  };

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

  // Regional cases data
  const regionalCases = [
    { region: 'North', cases: 42, color: 'bg-indigo-100 text-indigo-800' },
    { region: 'South', cases: 28, color: 'bg-purple-100 text-purple-800' },
    { region: 'East', cases: 35, color: 'bg-blue-100 text-blue-800' },
    { region: 'West', cases: 19, color: 'bg-green-100 text-green-800' },
    { region: 'Central', cases: 18, color: 'bg-yellow-100 text-yellow-800' },
  ];

  // Articles data
  const articles = [
    {
      title: "Boost Your Immunity",
      description: "5 science-backed ways to stay healthy",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Self Care Essentials",
      description: "Tips for mental health during flu season",
      image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const diseaseList = [
    'Pollen Allergy',
    'Dust Mite Allergy',
    'Insect Allergy',
    'Mold Allergy',
    'Allergic Rhinitis',
  ];

 
  return (

    
    <div className="max-w-3xl mx-auto px-4 pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center py-6 sticky top-0 bg-gray-50 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Health Dashboard</h1>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-indigo-600 transition-colors">
            <FiSearch className="text-xl" />
          </button>
          <button className="text-gray-500 hover:text-indigo-600 transition-colors">
            <FiMenu className="text-xl" />
          </button>
        </div>
      </header>

      {/* Disease Dropdown */}
      <section className="mb-6 relative">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium flex justify-between items-center hover:bg-indigo-700 transition-colors"
        >
          View Common Diseases
          <svg 
            className={`w-5 h-5 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
            {diseaseList.map((disease, index) => (
              <button
                key={index}
                onClick={() => handleDiseaseClick(disease)}
                className={`w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors ${
                  index !== diseaseList.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {disease}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Seasonal Disease Overview */}
      <section className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Seasonal Disease Overview</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
            View stats <FiArrowUpRight />
          </button>
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

      {/* Regional Cases */}
      <section className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Regional Cases</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
            View details <FiArrowUpRight />
          </button>
        </div>
        
        {/* Map Visualization */}
        <div className="w-full h-48 rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 w-48 h-48">
            <div className="bg-indigo-200 rounded-lg"></div>
            <div className="bg-indigo-300 rounded-lg"></div>
            <div className="bg-indigo-200 rounded-lg"></div>
            <div className="bg-indigo-100 rounded-lg"></div>
            <div className="bg-indigo-400 rounded-lg flex items-center justify-center text-white font-bold">HOT</div>
            <div className="bg-indigo-100 rounded-lg"></div>
            <div className="bg-indigo-200 rounded-lg"></div>
            <div className="bg-indigo-300 rounded-lg"></div>
            <div className="bg-indigo-200 rounded-lg"></div>
          </div>
        </div>
        
        {/* Regions Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {regionalCases.map((area) => (
            <div key={area.region} className={`${area.color} text-center py-2 rounded-lg font-medium`}>
              <div>{area.region}</div>
              <div className="font-bold">{area.cases}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Common Symptoms</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
            View all <FiArrowUpRight />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {symptoms.map((symptom) => (
            <button 
              key={symptom.name} 
              className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 border border-gray-200 transition-all duration-200 flex flex-col items-center justify-center h-28 hover:shadow-sm hover:-translate-y-0.5"
            >
              {symptom.icon}
              <p className="text-sm font-medium text-gray-700 text-center">{symptom.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Health Articles */}
      <section className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Health Articles</h2>
          <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
            View all <FiArrowUpRight />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article, index) => (
            <button key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow text-left">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="bg-indigo-50 p-4 rounded-xl mt-4 flex items-center gap-3">
          <span className="text-2xl text-indigo-600">💡</span>
          <p className="text-sm text-gray-800">
            Remember to wash hands frequently and maintain social distancing to prevent spread.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomeScreen;