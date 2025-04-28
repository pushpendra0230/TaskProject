// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//     // Simulated logged-in admin data
//     const admin = {
//         name: "Admin Kumar",
//         email: "admin@example.com",
//     };

//     const [activePage, setActivePage] = useState("dashboard");
//     const [tasks, setTasks] = useState([]);

//     // Fetch tasks when "allTasks" is selected
//     useEffect(() => {
//         if (activePage === "allTasks") {
//             axios
//                 .get("http://localhost:6001/tasks/get-all")
//                 .then((res) => setTasks(res.data))
//                 .catch((err) => console.error("Error fetching tasks:", err));
//         }
//     }, [activePage]);

//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar */}
//             <div className="w-64 bg-blue-900 text-white p-6 space-y-6">
//                 <div>
//                     <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
//                     <p>
//                         <strong>Name:</strong> {admin.name}
//                     </p>
//                     <p>
//                         <strong>Email:</strong> {admin.email}
//                     </p>
//                 </div>
//                 <div className="space-y-2 pt-6">
//                     <button
//                         className="block w-full text-left hover:bg-blue-700 p-2 rounded"
//                         onClick={() => setActivePage("dashboard")}
//                     >
//                         Dashboard
//                     </button>
//                     <button
//                         className="block w-full text-left hover:bg-blue-700 p-2 rounded"
//                         onClick={() => setActivePage("assignTask")}
//                     >
//                         Assign Task
//                     </button>
//                     <button
//                         className="block w-full text-left hover:bg-blue-700 p-2 rounded"
//                         onClick={() => setActivePage("allTasks")}
//                     >
//                         All Tasks
//                     </button>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 bg-gray-100 p-6">
//                 {activePage === "dashboard" && (
//                     <div>
//                         <h1 className="text-3xl font-bold mb-4">Welcome, {admin.name}</h1>
//                         <p>Choose an action from the left panel.</p>
//                     </div>
//                 )}

//                 {activePage === "assignTask" && (
//                     <div>
//                         <h1 className="text-2xl font-bold mb-4">Assign Task</h1>
//                         <p>Form coming soon...</p>
//                     </div>
//                 )}

//                 {activePage === "allTasks" && (
//                     <div>
//                         <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
//                         {tasks.length === 0 ? (
//                             <p>No tasks found.</p>
//                         ) : (
//                             <div className="space-y-4">
//                                 {tasks.map((task, index) => (
//                                     <div key={index} className="bg-white p-4 shadow rounded">
//                                         <h3 className="font-bold text-lg">{task.title}</h3>
//                                         <p className="text-gray-600">{task.description}</p>
//                                         <p className="text-sm text-blue-500">
//                                             Status: {task.status}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//     const [user, setUser] = useState([]);
//     const [admin, setAdmin] = useState([]);
//     const [task, setTask] = useState([]);
//     const [activePage, setActivePage] = useState("dashboard");
//     const navigate = useNavigate();

//     const fetchStats = async () => {
//         try {
//             const token = localStorage.getItem("token");

//             const [userRes, adminRes, taskRes] = await Promise.all([
//                 axios.get("http://localhost:6001/user/getAll", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//                 axios.get("http://localhost:6001/user/getAdmin", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//                 axios.get("http://localhost:6001/tasks/get-all", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//             ]);

//             setUser(userRes.data);
//             setAdmin(adminRes.data);
//             setTask(taskRes.data);
//         } catch (err) {
//             console.error("Fetch error:", err);
//         }
//     };

//     useEffect(() => {
//         fetchStats();
//     }, []);

//     const activeUsers = user.filter(
//         (u) => u.role === "user" && u.status === "active"
//     ).length;
//     const inactiveUsers = user.filter(
//         (u) => u.role === "user" && u.status === "inactive"
//     ).length;
//     const activeAdmins = admin.filter(
//         (u) => u.role === "admin" && u.status === "active"
//     ).length;
//     const inactiveAdmins = admin.filter(
//         (u) => u.role === "admin" && u.status === "inactive"
//     ).length;

//     const pending = task.filter((u) => u.status === "pending").length;
//     const inProgress = task.filter((u) => u.status === "inProgress").length;
//     const completed = task.filter((u) => u.status === "completed").length;
//     const cancelled = task.filter((u) => u.status === "cancelled").length;

//     const adminInfo = {
//         name: "Admin Kumar",
//         email: "admin@example.com",
//     };

//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar */}
//             <div className="w-64 bg-blue-900 text-white p-6 space-y-6">
//                 <div>
//                     <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
//                     <p><strong>Name:</strong> {adminInfo.name}</p>
//                     <p><strong>Email:</strong> {adminInfo.email}</p>
//                 </div>
//                 <div className="space-y-2 pt-6">
//                     <button
//                         className="block w-full text-left hover:bg-blue-700 p-2 rounded"
//                         onClick={() => setActivePage("dashboard")}
//                     >
//                         Dashboard
//                     </button>
//                     <button
//                         className="block w-full text-left hover:bg-blue-700 p-2 rounded"
//                         onClick={() => setActivePage("assignTask")}
//                     >
//                         Assign Task
//                     </button>
//                     <button
//                         className="block w-full text-left hover:bg-blue-700 p-2 rounded"
//                         onClick={() => setActivePage("allTasks")}
//                     >
//                         All Tasks
//                     </button>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 bg-gray-100 p-6">
//                 {activePage === "dashboard" && (
//                     <div>
//                         <h1 className="text-3xl font-bold mb-4">Admin Overview</h1>
//                         <h2 className="text-4xl font-bold text-center text-indigo-700 my-8">
//                             Admin Dashboard
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                             {/* Users Box */}
//                             <div
//                                 className="bg-white border-l-8 border-blue-400 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
//                                 onClick={() => navigate("/showusers")}
//                             >
//                                 <h3 className="text-2xl font-semibold mb-3 text-blue-600">
//                                     👥 Users
//                                 </h3>
//                                 <p>👤 Total: {user.length}</p>
//                                 <p>✅ Active: {activeUsers}</p>
//                                 <p>🚫 Inactive: {inactiveUsers}</p>
//                             </div>

//                             {/* Admins Box */}
//                             <div
//                                 className="bg-white border-l-8 border-purple-400 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
//                                 onClick={() => navigate("/admin")}
//                             >
//                                 <h3 className="text-2xl font-semibold mb-3 text-purple-600">
//                                     🧑‍💼 Admins
//                                 </h3>
//                                 <p>👤 Total: {admin.length}</p>
//                                 <p>✅ Active: {activeAdmins}</p>
//                                 <p>🚫 Inactive: {inactiveAdmins}</p>
//                             </div>

//                             {/* Tasks Box */}
//                             <div
//                                 className="bg-white border-l-8 border-green-400 rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all"
//                                 onClick={() => navigate("/task")}
//                             >
//                                 <h3 className="text-2xl font-semibold mb-3 text-green-600">
//                                     📝 Tasks
//                                 </h3>
//                                 <p>📋 Total: {task.length}</p>
//                                 <p>🕐 Pending: {pending}</p>
//                                 <p>🚧 In Progress: {inProgress}</p>
//                                 <p>✅ Completed: {completed}</p>
//                                 <p>❌ Cancelled: {cancelled}</p>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {activePage === "assignTask" && (
//                     <div>
//                         <h1 className="text-2xl font-bold mb-4">Assign Task</h1>
//                         <p>Form coming soon...</p>
//                     </div>
//                 )}

//                 {activePage === "allTasks" && (
//                     <div>
//                         <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
//                         {task.length === 0 ? (
//                             <p>No tasks found.</p>
//                         ) : (
//                             <div className="space-y-4">
//                                 {task.map((task, index) => (
//                                     <div key={index} className="bg-white p-4 shadow rounded">
//                                         <h3 className="font-bold text-lg">{task.title}</h3>
//                                         <p className="text-gray-600">{task.description}</p>
//                                         <p className="text-sm text-blue-500">
//                                             Category: {task.category} | Status: {task.status}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import ShowUsers from "./ShowUsers";

// const AdminDashboard = () => {
//     const [user, setUser] = useState([]);
//     const [admin, setAdmin] = useState([]);
//     const [task, setTask] = useState([]);
//     const [activePage, setActivePage] = useState("dashboard");
//     const navigate = useNavigate();

//     const fetchStats = async () => {
//         try {
//             const token = localStorage.getItem("token");

//             const [userRes, adminRes, taskRes] = await Promise.all([
//                 axios.get("http://localhost:6001/user/getAll", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//                 axios.get("http://localhost:6001/user/getAdmin", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//                 axios.get("http://localhost:6001/tasks/get-all", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//             ]);

//             setUser(userRes.data);
//             setAdmin(adminRes.data);
//             setTask(taskRes.data);
//         } catch (err) {
//             console.error("Fetch error:", err);
//         }
//     };

//     useEffect(() => {
//         fetchStats();
//     }, []);

//     const activeUsers = user.filter(
//         (u) => u.role === "user" && u.status === "active"
//     ).length;
//     const inactiveUsers = user.filter(
//         (u) => u.role === "user" && u.status === "inactive"
//     ).length;
//     const activeAdmins = admin.filter(
//         (u) => u.role === "admin" && u.status === "active"
//     ).length;
//     const inactiveAdmins = admin.filter(
//         (u) => u.role === "admin" && u.status === "inactive"
//     ).length;

//     const pending = task.filter((u) => u.status === "pending").length;
//     const inProgress = task.filter((u) => u.status === "inProgress").length;
//     const completed = task.filter((u) => u.status === "completed").length;
//     const cancelled = task.filter((u) => u.status === "cancelled").length;

//     return (
//         <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 font-sans">
//             {/* Sidebar */}
//             <aside className="w-72 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white shadow-xl p-6 flex flex-col justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold mb-8 text-center tracking-wide">⚙️ TaskFlow</h1>
//                     <nav className="space-y-4">
//                         <button
//                             className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
//                             onClick={() => setActivePage("dashboard")}
//                         >
//                             📊 Dashboard
//                         </button>
//                         <button
//                             className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
//                             onClick={() => setActivePage("allTasks")}
//                         >
//                             ✅ All Tasks
//                         </button>
//                     </nav>
//                 </div>
//                 <div className="text-center text-sm opacity-75">© 2025 TaskFlow</div>
//             </aside>

//             {/* Main Content */}
//             <main className="flex-1 p-10">
//                 {activePage === "dashboard" && (
//                     <section>
//                         <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">📈 Admin Dashboard</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                             {/* Users Box */}
//                             <div
//                                 className="bg-white border-l-8 border-blue-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
//                                 onClick={() => navigate("/showusers")}
//                             >
//                                 <h3 className="text-2xl font-bold text-blue-600 mb-4">🧑‍🤝‍🧑 User Summary</h3>
//                                 <p className="mb-1">📊 Total Users: {user.length}</p>
//                                 <p className="mb-1">🟢 Active Users: {activeUsers}</p>
//                                 <p className="mb-1">🔴 Inactive Users: {inactiveUsers}</p>
//                             </div>

//                             {/* Admins Box */}
//                             <div
//                                 className="bg-white border-l-8 border-purple-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
//                                 onClick={() => navigate("/admin")}
//                             >
//                                 <h3 className="text-2xl font-bold text-purple-600 mb-4">🧑‍💼 Admin Overview</h3>
//                                 <p className="mb-1">📊 Total Admins: {admin.length}</p>
//                                 <p className="mb-1">🟢 Active Admins: {activeAdmins}</p>
//                                 <p className="mb-1">🔴 Inactive Admins: {inactiveAdmins}</p>
//                             </div>

//                             {/* Tasks Box */}
//                             <div
//                                 className="bg-white border-l-8 border-green-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
//                                 onClick={() => navigate("/all-task")}
//                             >
//                                 <h3 className="text-2xl font-bold text-green-600 mb-4">🗂️ Task Overview</h3>
//                                 <p className="mb-1">🧾 Total Tasks: {task.length}</p>
//                                 <p className="mb-1">🕓 Pending: {pending}</p>
//                                 <p className="mb-1">🔄 In Progress: {inProgress}</p>
//                                 <p className="mb-1">🏁 Completed: {completed}</p>
//                                 <p className="mb-1">🚫 Cancelled: {cancelled}</p>
//                             </div>
//                         </div>
//                     </section>
//                 )}

//                 {activePage === "assignTask" && (
//                     <section>
//                         <h2 className="text-3xl font-bold text-gray-700 mb-4">📝 Assign Task</h2>
//                         <p className="text-gray-500 italic">Form coming soon...</p>
//                     </section>
//                 )}

//                 {activePage === "allTasks" && (
//                     <section>
//                         <h2 className="text-3xl font-bold text-gray-700 mb-6">📋 All Tasks</h2>
//                         {task.length === 0 ? (
//                             <p className="text-gray-500 italic">No tasks found.</p>
//                         ) : (
//                             <div className="space-y-6">
//                                 {task.map((task, index) => (
//                                     <div
//                                         key={index}
//                                         className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-indigo-400"
//                                     >
//                                         <h3 className="text-xl font-semibold text-indigo-700 mb-1">{task.title}</h3>
//                                         <p className="text-gray-600 mb-1">{task.description}</p>
//                                         <span className="text-sm text-indigo-500">
//                                             Category: {task.category} | Status: {task.status}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </section>
//                 )}
//                 {activePage === "showUsers" && <ShowUsers />}
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import ShowUsers from "./ShowUsers";

// const AdminDashboard = () => {
//     const [user, setUser] = useState([]);
//     const [admin, setAdmin] = useState([]);
//     const [task, setTask] = useState([]);
//     const [activePage, setActivePage] = useState("dashboard");
//     const navigate = useNavigate();

//     const fetchStats = async () => {
//         try {
//             const token = localStorage.getItem("token");

//             const [userRes, adminRes, taskRes] = await Promise.all([
//                 axios.get("http://localhost:6001/user/getAll", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//                 axios.get("http://localhost:6001/user/getAdmin", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//                 axios.get("http://localhost:6001/tasks/get-all", {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }),
//             ]);

//             setUser(userRes.data);
//             setAdmin(adminRes.data);
//             setTask(taskRes.data);
//         } catch (err) {
//             console.error("Fetch error:", err);
//         }
//     };

//     useEffect(() => {
//         fetchStats();
//     }, []);

//     const activeUsers = user.filter(
//         (u) => u.role === "user" && u.status === "active"
//     ).length;
//     const inactiveUsers = user.filter(
//         (u) => u.role === "user" && u.status === "inactive"
//     ).length;
//     const activeAdmins = admin.filter(
//         (u) => u.role === "admin" && u.status === "active"
//     ).length;
//     const inactiveAdmins = admin.filter(
//         (u) => u.role === "admin" && u.status === "inactive"
//     ).length;

//     const pending = task.filter((u) => u.status === "pending").length;
//     const inProgress = task.filter((u) => u.status === "inProgress").length;
//     const completed = task.filter((u) => u.status === "completed").length;
//     const cancelled = task.filter((u) => u.status === "cancelled").length;

//     return (
//         <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 font-sans">
//             {/* Sidebar */}
//             <aside className="w-72 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white shadow-xl p-6 flex flex-col justify-between">
//                 <div>
//                     <h1 className="text-3xl font-bold mb-8 text-center tracking-wide">⚙️ TaskFlow</h1>
//                     <nav className="space-y-4">
//                         <button
//                             className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
//                             onClick={() => setActivePage("dashboard")}
//                         >
//                             📊 Dashboard
//                         </button>
//                         <button
//                             className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
//                             onClick={() => setActivePage("allTasks")}
//                         >
//                             ✅ All Tasks
//                         </button>
//                         {/* Show Users link inside sidebar */}
//                         <button
//                             className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
//                             onClick={() => setActivePage("showUsers")}
//                         >
//                             🧑‍🤝‍🧑 Show Users
//                         </button>
//                     </nav>
//                 </div>
//                 <div className="text-center text-sm opacity-75">© 2025 TaskFlow</div>
//             </aside>

//             {/* Main Content */}
//             <main className="flex-1 p-10">
//                 {activePage === "dashboard" && (
//                     <section>
//                         <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">📈 Admin Dashboard</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                             {/* Users Box */}
//                             <div
//                                 className="bg-white border-l-8 border-blue-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
//                                 onClick={() => setActivePage("showUsers")}
//                             >
//                                 <h3 className="text-2xl font-bold text-blue-600 mb-4">🧑‍🤝‍🧑 User Summary</h3>
//                                 <p className="mb-1">📊 Total Users: {user.length}</p>
//                                 <p className="mb-1">🟢 Active Users: {activeUsers}</p>
//                                 <p className="mb-1">🔴 Inactive Users: {inactiveUsers}</p>
//                             </div>

//                             {/* Admins Box */}
//                             <div
//                                 className="bg-white border-l-8 border-purple-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
//                                 onClick={() => setActivePage("admin")}
//                             >
//                                 <h3 className="text-2xl font-bold text-purple-600 mb-4">🧑‍💼 Admin Overview</h3>
//                                 <p className="mb-1">📊 Total Admins: {admin.length}</p>
//                                 <p className="mb-1">🟢 Active Admins: {activeAdmins}</p>
//                                 <p className="mb-1">🔴 Inactive Admins: {inactiveAdmins}</p>
//                             </div>

//                             {/* Tasks Box */}
//                             <div
//                                 className="bg-white border-l-8 border-green-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
//                                 onClick={() => setActivePage("allTasks")}
//                             >
//                                 <h3 className="text-2xl font-bold text-green-600 mb-4">🗂️ Task Overview</h3>
//                                 <p className="mb-1">🧾 Total Tasks: {task.length}</p>
//                                 <p className="mb-1">🕓 Pending: {pending}</p>
//                                 <p className="mb-1">🔄 In Progress: {inProgress}</p>
//                                 <p className="mb-1">🏁 Completed: {completed}</p>
//                                 <p className="mb-1">🚫 Cancelled: {cancelled}</p>
//                             </div>
//                         </div>
//                     </section>
//                 )}

//                 {activePage === "showUsers" && <ShowUsers />}

//                 {activePage === "assignTask" && (
//                     <section>
//                         <h2 className="text-3xl font-bold text-gray-700 mb-4">📝 Assign Task</h2>
//                         <p className="text-gray-500 italic">Form coming soon...</p>
//                     </section>
//                 )}

//                 {activePage === "allTasks" && (
//                     <section>
//                         <h2 className="text-3xl font-bold text-gray-700 mb-6">📋 All Tasks</h2>
//                         {task.length === 0 ? (
//                             <p className="text-gray-500 italic">No tasks found.</p>
//                         ) : (
//                             <div className="space-y-6">
//                                 {task.map((task, index) => (
//                                     <div
//                                         key={index}
//                                         className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-indigo-400"
//                                     >
//                                         <h3 className="text-xl font-semibold text-indigo-700 mb-1">{task.title}</h3>
//                                         <p className="text-gray-600 mb-1">{task.description}</p>
//                                         <span className="text-sm text-indigo-500">
//                                             Category: {task.category} | Status: {task.status}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </section>
//                 )}
//             </main>
//         </div>
//     );
// };

// export default AdminDashboard;















import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShowUsers from "./ShowUsers";

const AdminDashboard = () => {
    const [user, setUser] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [task, setTask] = useState([]);
    const [activePage, setActivePage] = useState("dashboard");
    const navigate = useNavigate();

    const fetchStats = async () => {
        try {
            const token = localStorage.getItem("token");

            const [userRes, adminRes, taskRes] = await Promise.all([
                axios.get("http://localhost:6001/user/getAll", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                axios.get("http://localhost:6001/user/getAdmin", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
                axios.get("http://localhost:6001/tasks/get-all", {
                    headers: { Authorization: `Bearer ${token}` },
                }),
            ]);

            setUser(userRes.data);
            setAdmin(adminRes.data);
            setTask(taskRes.data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    const activeUsers = user.filter(
        (u) => u.role === "user" && u.status === "active"
    ).length;
    const inactiveUsers = user.filter(
        (u) => u.role === "user" && u.status === "inactive"
    ).length;
    const activeAdmins = admin.filter(
        (u) => u.role === "admin" && u.status === "active"
    ).length;
    const inactiveAdmins = admin.filter(
        (u) => u.role === "admin" && u.status === "inactive"
    ).length;

    const pending = task.filter((u) => u.status === "pending").length;
    const inProgress = task.filter((u) => u.status === "inProgress").length;
    const completed = task.filter((u) => u.status === "completed").length;
    const cancelled = task.filter((u) => u.status === "cancelled").length;

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 font-sans">
            {/* Sidebar */}
            <aside className="w-72 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white shadow-xl p-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-8 text-center tracking-wide">⚙️ TaskFlow</h1>
                    <nav className="space-y-4">
                        <button
                            className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
                            onClick={() => setActivePage("dashboard")}
                        >
                            📊 Dashboard
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
                            onClick={() => setActivePage("allTasks")}
                        >
                            ✅ All Tasks
                        </button>
                        {/* Show Users link inside sidebar */}
                        <button
                            className="w-full text-left px-4 py-2 rounded-lg bg-indigo-800 hover:bg-indigo-700 transition-all duration-200"
                            onClick={() => setActivePage("showUsers")}
                        >
                            🧑‍🤝‍🧑 Show Users
                        </button>
                    </nav>
                </div>
                <div className="text-center text-sm opacity-75">© 2025 TaskFlow</div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                {activePage === "dashboard" && (
                    <section>
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">📈 Admin Dashboard</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Users Box */}
                            <div
                                className="bg-white border-l-8 border-blue-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
                                onClick={() => setActivePage("showUsers")}
                            >
                                <h3 className="text-2xl font-bold text-blue-600 mb-4">🧑‍🤝‍🧑 User Summary</h3>
                                <p className="mb-1">📊 Total Users: {user.length}</p>
                                <p className="mb-1">🟢 Active Users: {activeUsers}</p>
                                <p className="mb-1">🔴 Inactive Users: {inactiveUsers}</p>
                            </div>

                            {/* Admins Box */}
                            <div
                                className="bg-white border-l-8 border-purple-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
                                onClick={() => navigate("/admin")}
                            >
                                <h3 className="text-2xl font-bold text-purple-600 mb-4">🧑‍💼 Admin Overview</h3>
                                <p className="mb-1">📊 Total Admins: {admin.length}</p>
                                <p className="mb-1">🟢 Active Admins: {activeAdmins}</p>
                                <p className="mb-1">🔴 Inactive Admins: {inactiveAdmins}</p>
                            </div>

                            {/* Tasks Box */}
                            <div
                                className="bg-white border-l-8 border-green-500 rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
                                onClick={() => setActivePage("allTasks")}
                            >
                                <h3 className="text-2xl font-bold text-green-600 mb-4">🗂️ Task Overview</h3>
                                <p className="mb-1">🧾 Total Tasks: {task.length}</p>
                                <p className="mb-1">🕓 Pending: {pending}</p>
                                <p className="mb-1">🔄 In Progress: {inProgress}</p>
                                <p className="mb-1">🏁 Completed: {completed}</p>
                                <p className="mb-1">🚫 Cancelled: {cancelled}</p>
                            </div>
                        </div>
                    </section>
                )}

                {activePage === "showUsers" && <ShowUsers />}

                {activePage === "assignTask" && (
                    <section>
                        <h2 className="text-3xl font-bold text-gray-700 mb-4">📝 Assign Task</h2>
                        <p className="text-gray-500 italic">Form coming soon...</p>
                    </section>
                )}

                {activePage === "allTasks" && (
                    <AllTask />
                )}
            </main>
        </div>
    );
};

const AllTask = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const res = await axios.get("http://localhost:6001/tasks/get-all", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setTasks(res.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
            alert(error.response?.data?.message || "Unable to load tasks.");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Show All Tasks</h2>

            <div className="space-y-6">
                {tasks.length === 0 ? (
                    <p className="text-center text-xl text-gray-600">No tasks available.</p>
                ) : (
                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div
                                key={task._id}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
                            >
                                <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                                <p className="text-md text-blue-600 italic">{task.category}</p>
                                <p className="text-gray-600">{task.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-8 space-y-4">
                <button
                    onClick={() => navigate("/homepage")}
                    className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Show Tasks
                </button>

                <button
                    onClick={() => navigate("/showusers")}
                    className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Show Users
                </button>

                <button
                    onClick={() => navigate("/dashboard")}
                    className="w-full py-3 px-6 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default AdminDashboard;