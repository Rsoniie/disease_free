import React from 'react'
import { FiHome, FiCheckSquare, FiBell } from "react-icons/fi";
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getActiveColor = (path : any) => {
        return location.pathname === path ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-600';
    }

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white py-3 border-t border-gray-200 max-w-3xl mx-auto flex justify-around items-center shadow-sm">
            <button 
                onClick={() => navigate('/home')} 
                className={`flex flex-col items-center justify-center transition-colors ${getActiveColor('/home')}`}
            >
                <FiHome className="text-xl" />
                <span className="text-xs mt-1">Home</span>
            </button>
            <button 
                onClick={() => navigate('/todo')}
                className={`flex flex-col items-center justify-center transition-colors ${getActiveColor('/todo')}`}
            >
                <FiCheckSquare className="text-xl" />
                <span className="text-xs mt-1">Todo</span>
            </button>
            <button 
                onClick={() => navigate('/alerts')}
                className={`flex flex-col items-center justify-center transition-colors ${getActiveColor('/alerts')}`}
            >
                <FiBell className="text-xl" />
                <span className="text-xs mt-1">Alerts</span>
            </button>
        </footer>
    )
}

export default Footer;