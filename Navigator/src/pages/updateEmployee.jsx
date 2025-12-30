import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  User, Phone, Briefcase, 
  Building2, IndianRupee, Camera,
  ChevronLeft, Save, ShieldCheck
} from "lucide-react";

const UpdateEmployee = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const [employees, setEmployees] = useState(() => {
    const data = localStorage.getItem("UserData");
    return data ? JSON.parse(data) : [];
  });

  const [employee, setEmployee] = useState({
    name: "",
    phone: "",
    designation: "",
    salary: "",
    department: "",
    status: "Active",
    image: ""
  });

  useEffect(() => {
    if (employees[index]) {
      setEmployee(employees[index]);
    }
  }, [index, employees]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmployee({ ...employee, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployees = [...employees];
    updatedEmployees[Number(index)] = employee;
    
    localStorage.setItem("UserData", JSON.stringify(updatedEmployees));
    alert("Profile Updated Successfully! ✅");
    navigate("/View");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-12 px-4 flex justify-center font-sans">
      <div className="max-w-4xl w-full">
        
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold mb-8 transition-all group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Directory
        </button>

        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 p-8 md:p-12 relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 relative z-10">
            <div>
              <h1 className="text-3xl font-black text-slate-800 tracking-tight">Edit Profile</h1>
              <p className="text-slate-400 font-medium mt-1">Update information for <span className="text-indigo-600 font-bold">{employee.name || 'Employee'}</span></p>
            </div>
      
            <div className="bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100 flex items-center gap-2">
              <ShieldCheck size={16} className="text-indigo-500" />
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{employee.eid || 'ID-000'}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Left: Avatar Upload */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative group">
                <div className="w-48 h-48 rounded-[2.5rem] bg-[#f8fafc] border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-slate-100 transition-transform duration-500 group-hover:scale-105">
                  {employee.image ? (
                    <img src={employee.image} alt="profile" className="w-full h-full object-cover" />
                  ) : (
                    <User size={64} className="text-slate-200" />
                  )}
                </div>
                <label className="absolute bottom-2 right-2 p-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-xl cursor-pointer transition-all active:scale-90 border-4 border-white">
                  <Camera size={20} />
                  <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                </label>
              </div>
            </div>

            {/* Right: Editable Fields */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input type="text" name="name" value={employee.name} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-50 outline-none font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input type="tel" name="phone" value={employee.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-50 outline-none font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Designation</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input type="text" name="designation" value={employee.designation} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-50 outline-none font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Department</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input type="text" name="department" value={employee.department} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-50 outline-none font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Monthly Salary</label>
                <div className="relative">
                  <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  <input type="number" name="salary" value={employee.salary} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 bg-[#f8fafc] border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-50 outline-none font-bold text-slate-700" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Status</label>
                <select name="status" value={employee.status} onChange={handleChange} className="w-full px-6 py-3.5 bg-[#f8fafc] border border-slate-100 rounded-2xl focus:ring-4 focus:ring-indigo-50 outline-none font-bold text-indigo-600 cursor-pointer appearance-none">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-6">
                <button type="submit" className="w-full bg-[#4f46e5] hover:bg-indigo-700 text-white py-4 rounded-[1.5rem] font-black shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                  <Save size={20} /> Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
