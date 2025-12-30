import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Users, Plus, UserCircle, Phone, Mail, IndianRupee } from "lucide-react";

const ViewEmployee = () => {
  const [employees, setEmployees] = useState(() => {
    const data = localStorage.getItem("UserData");
    return data ? JSON.parse(data) : [];
  });
  

  useEffect(() => {
    localStorage.setItem("UserData", JSON.stringify(employees));
  }, [employees]);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      const updatedList = employees.filter((_, i) => i !== index);
      setEmployees(updatedList);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] pt-28 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 overflow-hidden">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="space-y-2">
              
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
                <h1 className="text-3xl font-bold text-[#1e293b] tracking-tight">
                  Team Directory
                </h1>
              </div>
              <p className="text-slate-400 font-medium ml-4">
                Manage your organization's talent pool
              </p>
            </div>

            <div className="flex items-center gap-5">
              <Link 
                to="/Add" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg shadow-indigo-100 transition-all active:scale-95 whitespace-nowrap"
              >
                <Plus size={20} />
                Onboard Employee
              </Link>
            </div>
          </div>

          {/* Table Design */}
          {employees.length === 0 ? (
            <div className="py-20 text-center bg-[#f8fafc] rounded-[2rem] border border-dashed border-slate-200">
              <UserCircle size={60} className="mx-auto text-slate-200 mb-4" />
              <h3 className="text-xl font-bold text-slate-400">No team members found</h3>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-[1.5rem]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f8fafc] text-[#94a3b8]">
                    <th className="p-6 text-[11px] font-bold uppercase tracking-widest first:rounded-l-2xl">Profile</th>
                    <th className="p-6 text-[11px] font-bold uppercase tracking-widest hidden md:table-cell">Contact</th>
                    <th className="p-6 text-[11px] font-bold uppercase tracking-widest hidden lg:table-cell">Position</th>
                    <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Pay Grade</th>
                    <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Status</th>
                    <th className="p-6 text-[11px] font-bold uppercase tracking-widest text-center last:rounded-r-2xl">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {employees.map((emp, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-all group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-sm flex-shrink-0">
                            {emp.image ? (
                              <img src={emp.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-300">
                                <UserCircle size={24} />
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 text-base">{emp.name}</div>
                            <div className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-lg inline-block mt-1">{emp.eid}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 hidden md:table-cell">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <Mail size={14} className="text-slate-300" /> {emp.email}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Phone size={14} className="text-slate-300" /> {emp.phone}
                          </div>
                        </div>
                      </td>
                      <td className="p-6 hidden lg:table-cell">
                        <div className="text-sm font-bold text-slate-700">{emp.designation}</div>
                        <div className="text-[11px] font-medium text-slate-400 italic uppercase">{emp.department}</div>
                      </td>
                      <td className="p-6 font-bold text-slate-700">
                        <div className="flex items-center gap-1">
                           <IndianRupee size={14} className="text-slate-300" />
                           {Number(emp.salary).toLocaleString('en-IN')}
                        </div>
                      </td>
                      <td className="p-6">
                        <span className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider ${
                          emp.status === "Active" 
                            ? "bg-emerald-50 text-emerald-600" 
                            : "bg-rose-50 text-rose-600"
                        }`}>
                          {emp.status}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center justify-center gap-2">
                          <Link 
                            to={`/Update/${index}`}
                            className="p-2.5 bg-[#f8fafc] text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                          >
                            <Pencil size={18} />
                          </Link>
                          <button 
                            onClick={() => handleDelete(index)}
                            className="p-2.5 bg-[#f8fafc] text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
