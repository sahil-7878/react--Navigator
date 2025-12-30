import React, { useEffect, useState } from "react";
import { UserPlus, User, Mail, Phone, Briefcase, DollarSign, Camera } from "lucide-react";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    eid: "", name: "", email: "", phone: "", designation: "",
    salary: "", department: "", status: "Active", image: "",
  });

  const [employees, setEmployees] = useState(() => {
    const data = localStorage.getItem("UserData");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("UserData", JSON.stringify(employees));
  }, [employees]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { setEmployee({ ...employee, image: reader.result }); };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.eid || !employee.name || !employee.email) {
      alert("Please Fill Details!"); return;
    }
    setEmployees([...employees, employee]);
    setEmployee({ eid: "", name: "", email: "", phone: "", designation: "", salary: "", department: "", status: "Active", image: "" });
    alert("Employee Added Successfully!");
  };

  
  const inputClass = "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm";
  const labelClass = "text-[11px] font-bold text-gray-400 ml-1 uppercase tracking-wider";
  const iconWrapperClass = "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600";

  return (
    
    <div className="h-screen w-full pt-16 flex items-center justify-center bg-gray-50/50 overflow-hidden">
      <div className="w-full max-w-5xl px-4 animate-in fade-in duration-500">
        <div className="bg-white rounded-[2.5rem] shadow-xl p-6 md:p-10 border border-gray-100">
          
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="h-6 w-1.5 bg-indigo-600 rounded-full"></div>
            Employee Details
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              
      
              <div className="flex flex-col items-center justify-center lg:w-1/4">
                <div className="relative group">
                  <div className="w-36 h-36 rounded-[2rem] overflow-hidden border-2 border-dashed border-gray-200 group-hover:border-indigo-400 transition-all bg-gray-50 flex items-center justify-center">
                    {employee.image ? (
                      <img src={employee.image} className="w-full h-full object-cover" alt="preview" />
                    ) : (
                      <User size={40} className="text-gray-300" />
                    )}
                  </div>
                  <label className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-2.5 rounded-xl cursor-pointer shadow-lg hover:scale-110 transition-all">
                    <Camera size={18} />
                    <input type="file" className="hidden" onChange={handleImage} accept="image/*" />
                  </label>
                </div>
                <p className="mt-3 text-[10px] font-bold text-gray-400 uppercase">Profile Photo</p>
              </div>

       
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
                <div className="space-y-1 group">
                  <label className={labelClass}>Employee ID</label>
                  <div className="relative">
                    <div className={iconWrapperClass}><Briefcase size={16} /></div>
                    <input name="eid" value={employee.eid} onChange={handleChange} placeholder="EMP-101" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className={labelClass}>Full Name</label>
                  <div className="relative">
                    <div className={iconWrapperClass}><User size={16} /></div>
                    <input name="name" value={employee.name} onChange={handleChange} placeholder="John Doe" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className={labelClass}>Email Address</label>
                  <div className="relative">
                    <div className={iconWrapperClass}><Mail size={16} /></div>
                    <input name="email" type="email" value={employee.email} onChange={handleChange} placeholder="john@email.com" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className={labelClass}>Phone Number</label>
                  <div className="relative">
                    <div className={iconWrapperClass}><Phone size={16} /></div>
                    <input name="phone" type="tel" value={employee.phone} onChange={handleChange} placeholder="9876543210" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className={labelClass}>Department</label>
                  <div className="relative">
                    <div className={iconWrapperClass}><Briefcase size={16} /></div>
                    <input name="department" value={employee.department} onChange={handleChange} placeholder="Engineering" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className={labelClass}>Designation</label>
                  <div className="relative">
                    <div className={iconWrapperClass}><User size={16} /></div>
                    <input name="designation" value={employee.designation} onChange={handleChange} placeholder="Senior Dev" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className={labelClass}>Salary</label>
                  <div className="relative">
                    <div className={iconWrapperClass}><DollarSign size={16} /></div>
                    <input name="salary" type="number" value={employee.salary} onChange={handleChange} placeholder="85000" required className={inputClass} />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className={labelClass}>Status</label>
                  <select name="status" value={employee.status} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all cursor-pointer font-bold text-indigo-600 text-sm appearance-none">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/*  Submit Button */}
            <div className="mt-8 border-t border-gray-50 pt-6">
              <button type="submit" className="w-full py-3.5 text-md rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <UserPlus size={20} /> 
                Onboard Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;