import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, UserCircle, Zap, Globe, ArrowUpRight, Shield, CreditCard, Users, Briefcase, Plus, SearchX } from 'lucide-react';

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("UserData");
    if (data) setEmployees(JSON.parse(data));
  }, []);

  const activeCount = employees.filter(e => e.status === "Active").length;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pt-28 pb-12 px-6 font-sans antialiased">
      
  
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-7 gap-8 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
              Team<span className="text-indigo-600">.</span>Gallery
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                <span className="text-slate-900">{activeCount}</span> Active
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100">
              <Users size={14} className="text-white/80" />
              <p className="text-[10px] font-black uppercase tracking-widest text-white/90">
                <span className="text-white">{employees.length}</span> Total
              </p>
            </div>
          </div>
        </div>

        {/* Validation: Check if employees exist */}
        {employees.length === 0 ? (
     
          <div className="flex flex-col items-center justify-center py-20 px-4 bg-white/50 backdrop-blur-sm border-2 border-dashed border-slate-200 rounded-[3rem] animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <SearchX size={48} className="text-indigo-300" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-2">No Talent Found</h2>
            <p className="text-slate-500 text-center max-w-sm mb-8 font-medium">
              It looks like your team gallery is empty. Start building your organization by onboarding your first employee.
            </p>
            <Link 
              to="/Add" 
              className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-indigo-100 transition-all hover:scale-105 active:scale-95"
            >
              <Plus size={20} strokeWidth={3} />
              First Employee
            </Link>
          </div>
        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {employees.map((emp, index) => (
              <div key={index} className="group relative bg-white border border-slate-200 rounded-[2.2rem] p-4 hover:border-indigo-300 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:-translate-y-2">
                <div className="relative h-52 w-full overflow-hidden rounded-[1.8rem] bg-slate-50 border border-slate-100">
                  {emp.image ? (
                    <img src={emp.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-200 bg-slate-50">
                      <UserCircle size={64} strokeWidth={1} />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${emp.status === "Active" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-slate-100 text-slate-500 border-slate-200"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${emp.status === "Active" ? "bg-emerald-500" : "bg-slate-400"}`}></span>
                      {emp.status}
                    </span>
                  </div>
                </div>

                <div className="pt-5 px-1 pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-slate-800 tracking-tight capitalize group-hover:text-indigo-600 transition-colors truncate leading-none mb-2">{emp.name}</h3>
                      <div className="flex items-center gap-1.5">
                         <Briefcase size={10} className="text-indigo-600" />
                         <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{emp.eid}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all duration-300">
                      <Globe size={16} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-5 bg-slate-50/50 rounded-2xl px-4 group-hover:bg-indigo-50/30 transition-colors duration-500">
                     <div className="text-left">
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Dept</p>
                        <p className="text-[13px] font-bold text-slate-700 capitalize">{emp.department || 'Management'}</p>
                     </div>
                     <div className="h-6 w-px bg-slate-200"></div>
                     <div className="text-right">
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Monthly Pay</p>
                        <div className="flex items-center gap-1 justify-end">
                          <CreditCard size={10} className="text-indigo-400" />
                          <p className="text-[13px] font-black text-indigo-600 tracking-tight">₹{Number(emp.salary).toLocaleString()}</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                     <div className="flex items-center gap-2.5 text-slate-400 overflow-hidden group/mail">
                        <div className="p-2 bg-slate-100 rounded-lg group-hover/mail:bg-indigo-600 group-hover/mail:text-white transition-all duration-300">
                          <Mail size={12} />
                        </div>
                        <span className="text-[11px] font-semibold truncate lowercase text-slate-500 group-hover/mail:text-indigo-600 transition-colors italic">{emp.email}</span>
                     </div>
                     <button className="w-9 h-9 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 hover:scale-105 transition-all shadow-md flex items-center justify-center">
                        <ArrowUpRight size={16} />
                     </button>
                  </div>
                </div>
              </div>
            ))}

         
            <Link 
              to="/Add" 
              className="group relative bg-white border-2 border-dashed border-slate-200 rounded-[2.2rem] p-4 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all duration-500 flex flex-col items-center justify-center min-h-[400px] hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm group-hover:shadow-indigo-200 mb-6">
                <Plus size={40} strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2">Onboard New</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                  Add a new talent <br /> to the organization
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;