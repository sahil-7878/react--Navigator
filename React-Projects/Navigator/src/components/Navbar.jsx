import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, UserPlus, LayoutDashboard, Zap } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/Add', label: 'Add Employee', icon: UserPlus },
    { path: '/View', label: 'Directory', icon: Users },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] px-6">
      <div className="max-w-7xl mx-auto h-16 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl flex items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer">
          
          <span className="font-black text-xl tracking-tighter text-slate-800">
            Employee<span className="text-indigo-600"></span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'text-indigo-600 bg-indigo-50 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="hidden sm:inline">{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;