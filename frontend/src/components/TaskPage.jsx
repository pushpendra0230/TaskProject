// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TaskPage = () => {
//     const navigate = useNavigate();
//     const [tasks, setTasks] = useState([]);
//     const [pendingTasks, setPendingTasks] = useState([]);
//     const [inProgressTasks, setInProgressTasks] = useState([]);
//     const [completedTasks, setCompletedTasks] = useState([]);
//     const [cancelledTasks, setCancelledTasks] = useState([]);
//     const [formData, setFormData] = useState({
//         title: "",
//         category: "",
//         description: "",
//     });
//     const [loading, setLoading] = useState(false);

//     // Fetch tasks by status
//     const fetchTasks = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const res = await axios.get("http://localhost:6001/tasks/get-all", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             const allTasks = res.data;
//             setTasks(allTasks);
//             setPendingTasks(allTasks.filter((task) => task.status === "pending"));
//             setInProgressTasks(allTasks.filter((task) => task.status === "inProgress"));
//             setCompletedTasks(allTasks.filter((task) => task.status === "completed"));
//             setCancelledTasks(allTasks.filter((task) => task.status === "cancelled"));
//         } catch (err) {
//             console.error("Error fetching tasks:", err);
//         }
//     };

//     // Handle input change for form data
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle task addition
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { title, category, description } = formData;

//         if (!title || !category || !description) {
//             alert("Please fill all fields.");
//             return;
//         }

//         setLoading(true);

//         try {
//             await axios.post("http://localhost:6001/tasks/add-task", formData, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             });
//             alert("Task added successfully.");
//             fetchTasks(); // Re-fetch tasks after adding
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert(error.response?.data?.message || "Something went wrong.");
//         }

//         setLoading(false);
//         setFormData({ title: "", category: "", description: "" });
//     };

//     // Delete task
//     const handleDelete = async (taskId) => {
//         try {
//             const token = localStorage.getItem("token");
//             await axios.delete("http://localhost:6001/tasks/delete", {
//                 headers: { Authorization: `Bearer ${token}` },
//                 data: { taskId },
//             });
//             fetchTasks();
//         } catch (err) {
//             console.error("Error deleting task:", err);
//         }
//     };

//     // Fetch tasks on page load
//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     // Handle "Total Tasks" click to view all tasks
//     const handleTotalTasksClick = () => {
//         // Navigate to the /all-tasks route and pass tasks through the state
//         navigate("/all-tasks", { state: { tasks } });
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
//             {/* Navbar */}
//             <div className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
//                 <h1 className="text-2xl font-bold">📋 Task Management</h1>
//                 <button
//                     className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold shadow hover:bg-indigo-100"
//                     onClick={() => navigate("/login")}
//                 >
//                     🚪 Logout
//                 </button>
//             </div>

//             {/* Task Addition Form */}
//             <div className="bg-white m-6 p-6 rounded-lg shadow-md border-l-8 border-indigo-600">
//                 <h2 className="text-2xl font-bold text-indigo-700 mb-2">📝 Add Task</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                     />
//                     <select
//                         name="category"
//                         value={formData.category}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                     >
//                         <option value="">Select Category</option>
//                         <option value="Work">For Work</option>
//                         <option value="Personal">For Personal</option>
//                         <option value="Others">Others</option>
//                     </select>
//                     <textarea
//                         name="description"
//                         placeholder="Description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                         rows="4"
//                     ></textarea>
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full p-3 bg-yellow-500 text-black rounded"
//                     >
//                         {loading ? "Adding Task..." : "Submit Task"}
//                     </button>
//                 </form>
//             </div>

//             {/* Total Tasks Section */}
//             <div
//                 className="bg-white m-6 p-6 rounded-lg shadow-md border-l-8 border-indigo-600 cursor-pointer"
//                 onClick={handleTotalTasksClick}
//             >
//                 <h2 className="text-2xl font-bold text-indigo-700 mb-2">
//                     📊 Total Tasks: {tasks.length}
//                 </h2>
//             </div>

//             {/* Task Sections */}
//             <TaskBox title="🕒 Pending Tasks" color="amber-600" tasks={pendingTasks} handleDelete={handleDelete} />
//             <TaskBox title="🚧 In Progress Tasks" color="blue-600" tasks={inProgressTasks} handleDelete={handleDelete} />
//             <TaskBox title="✅ Completed Tasks" color="green-600" tasks={completedTasks} handleDelete={handleDelete} />
//             <TaskBox title="❌ Cancelled Tasks" color="red-600" tasks={cancelledTasks} handleDelete={handleDelete} />
//         </div>
//     );
// };

// const TaskBox = ({ title, color, tasks, handleDelete }) => (
//     <div className="bg-white m-6 p-6 rounded-lg shadow-md">
//         <h2 className={`text-xl font-semibold text-${color} mb-4`}>
//             {title} ({tasks.length})
//         </h2>
//         {tasks.length === 0 ? (
//             <p className="text-gray-500">No tasks found.</p>
//         ) : (
//             tasks.map((task) => (
//                 <div
//                     key={task._id}
//                     className="flex justify-between items-start border-b py-3 px-2 hover:bg-gray-50 rounded-md transition"
//                 >
//                     <div>
//                         <p className="font-semibold text-lg text-gray-800">{task.title}</p>
//                         <p className="text-sm text-gray-600">Category: {task.category}</p>
//                         <p className="text-sm text-gray-500">{task.description}</p>
//                     </div>
//                     <button
//                         onClick={() => handleDelete(task._id)}
//                         className={`bg-${color} text-white px-3 py-1 mt-2 rounded hover:opacity-90`}
//                     >
//                         Delete
//                     </button>
//                 </div>
//             ))
//         )}
//     </div>
// );

// export default TaskPage;











// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TaskPage = () => {
//     const navigate = useNavigate();
//     const [tasks, setTasks] = useState([]);
//     const [pendingTasks, setPendingTasks] = useState([]);
//     const [inProgressTasks, setInProgressTasks] = useState([]);
//     const [completedTasks, setCompletedTasks] = useState([]);
//     const [cancelledTasks, setCancelledTasks] = useState([]);
//     const [formData, setFormData] = useState({
//         title: "",
//         category: "",
//         description: "",
//     });
//     const [loading, setLoading] = useState(false);

//     // Fetch tasks by status
//     const fetchTasks = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const res = await axios.get("http://localhost:6001/tasks/get-all", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             const allTasks = res.data;
//             setTasks(allTasks);
//             setPendingTasks(allTasks.filter((task) => task.status === "pending"));
//             setInProgressTasks(allTasks.filter((task) => task.status === "inProgress"));
//             setCompletedTasks(allTasks.filter((task) => task.status === "completed"));
//             setCancelledTasks(allTasks.filter((task) => task.status === "cancelled"));
//         } catch (err) {
//             console.error("Error fetching tasks:", err);
//         }
//     };

//     // Handle input change for form data
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle task addition
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { title, category, description } = formData;

//         if (!title || !category || !description) {
//             alert("Please fill all fields.");
//             return;
//         }

//         setLoading(true);

//         try {
//             await axios.post("http://localhost:6001/tasks/add-task", formData, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             });
//             alert("Task added successfully.");
//             fetchTasks(); // Re-fetch tasks after adding
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert(error.response?.data?.message || "Something went wrong.");
//         }

//         setLoading(false);
//         setFormData({ title: "", category: "", description: "" });
//     };

//     // Delete task
//     const handleDelete = async (taskId) => {
//         try {
//             const token = localStorage.getItem("token");
//             await axios.delete("http://localhost:6001/tasks/delete", {
//                 headers: { Authorization: `Bearer ${token}` },
//                 data: { taskId },
//             });
//             fetchTasks();
//         } catch (err) {
//             console.error("Error deleting task:", err);
//         }
//     };

//     // Fetch tasks on page load
//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     // Handle "Total Tasks" click to view all tasks
//     const handleTotalTasksClick = () => {
//         navigate("/all-tasks", { state: { tasks } });
//     };

//     // Handle "Show Users" button click
//     const handleShowUsersClick = () => {
//         navigate("/showusers"); // Redirect to Show Users page
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
//             {/* Navbar */}
//             <div className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
//                 <h1 className="text-2xl font-bold">📋 Task Management</h1>
//                 <button
//                     className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold shadow hover:bg-indigo-100"
//                     onClick={() => navigate("/login")}
//                 >
//                     🚪 Logout
//                 </button>
//             </div>

//             {/* Show Users Button */}
//             <div className="text-center my-4">
//                 <button
//                     onClick={handleShowUsersClick}
//                     className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
//                 >
//                     Show Users
//                 </button>
//             </div>

//             {/* Task Addition Form */}
//             <div className="bg-white m-6 p-6 rounded-lg shadow-md border-l-8 border-indigo-600">
//                 <h2 className="text-2xl font-bold text-indigo-700 mb-2">📝 Add Task</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                     />
//                     <select
//                         name="category"
//                         value={formData.category}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                     >
//                         <option value="">Select Category</option>
//                         <option value="Work">For Work</option>
//                         <option value="Personal">For Personal</option>
//                         <option value="Others">Others</option>
//                     </select>
//                     <textarea
//                         name="description"
//                         placeholder="Description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                         rows="4"
//                     ></textarea>
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full p-3 bg-yellow-500 text-black rounded"
//                     >
//                         {loading ? "Adding Task..." : "Submit Task"}
//                     </button>
//                 </form>
//             </div>

//             {/* Total Tasks Section */}
//             <div
//                 className="bg-white m-6 p-6 rounded-lg shadow-md border-l-8 border-indigo-600 cursor-pointer"
//                 onClick={handleTotalTasksClick}
//             >
//                 <h2 className="text-2xl font-bold text-indigo-700 mb-2">
//                     📊 Total Tasks: {tasks.length}
//                 </h2>
//             </div>

//             {/* Task Sections */}
//             <TaskBox title="🕒 Pending Tasks" color="amber-600" tasks={pendingTasks} handleDelete={handleDelete} />
//             <TaskBox title="🚧 In Progress Tasks" color="blue-600" tasks={inProgressTasks} handleDelete={handleDelete} />
//             <TaskBox title="✅ Completed Tasks" color="green-600" tasks={completedTasks} handleDelete={handleDelete} />
//             <TaskBox title="❌ Cancelled Tasks" color="red-600" tasks={cancelledTasks} handleDelete={handleDelete} />
//         </div>
//     );
// };

// const TaskBox = ({ title, color, tasks, handleDelete }) => (
//     <div className="bg-white m-6 p-6 rounded-lg shadow-md">
//         <h2 className={`text-xl font-semibold text-${color} mb-4`}>
//             {title} ({tasks.length})
//         </h2>
//         {tasks.length === 0 ? (
//             <p className="text-gray-500">No tasks found.</p>
//         ) : (
//             tasks.map((task) => (
//                 <div
//                     key={task._id}
//                     className="flex justify-between items-start border-b py-3 px-2 hover:bg-gray-50 rounded-md transition"
//                 >
//                     <div>
//                         <p className="font-semibold text-lg text-gray-800">{task.title}</p>
//                         <p className="text-sm text-gray-600">Category: {task.category}</p>
//                         <p className="text-sm text-gray-500">{task.description}</p>
//                     </div>
//                     <button
//                         onClick={() => handleDelete(task._id)}
//                         className={`bg-${color} text-white px-3 py-1 mt-2 rounded hover:opacity-90`}
//                     >
//                         Delete
//                     </button>
//                 </div>
//             ))
//         )}
//     </div>
// );

// export default TaskPage;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const TaskPage = () => {
//     const navigate = useNavigate();
//     const [tasks, setTasks] = useState([]);
//     const [pendingTasks, setPendingTasks] = useState([]);
//     const [inProgressTasks, setInProgressTasks] = useState([]);
//     const [completedTasks, setCompletedTasks] = useState([]);
//     const [cancelledTasks, setCancelledTasks] = useState([]);
//     const [formData, setFormData] = useState({
//         title: "",
//         category: "",
//         description: "",
//     });
//     const [loading, setLoading] = useState(false);

//     // Fetch tasks by status
//     const fetchTasks = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             const res = await axios.get("http://localhost:6001/tasks/get-all", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             const allTasks = res.data;
//             setTasks(allTasks);
//             setPendingTasks(allTasks.filter((task) => task.status === "pending"));
//             setInProgressTasks(allTasks.filter((task) => task.status === "inProgress"));
//             setCompletedTasks(allTasks.filter((task) => task.status === "completed"));
//             setCancelledTasks(allTasks.filter((task) => task.status === "cancelled"));
//         } catch (err) {
//             console.error("Error fetching tasks:", err);
//         }
//     };

//     // Handle input change for form data
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle task addition
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { title, category, description } = formData;

//         if (!title || !category || !description) {
//             alert("Please fill all fields.");
//             return;
//         }

//         setLoading(true);

//         try {
//             await axios.post("http://localhost:6001/tasks/add-task", formData, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             });
//             alert("Task added successfully.");
//             fetchTasks(); // Re-fetch tasks after adding
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert(error.response?.data?.message || "Something went wrong.");
//         }

//         setLoading(false);
//         setFormData({ title: "", category: "", description: "" });
//     };

//     // Delete task
//     const handleDelete = async (taskId) => {
//         try {
//             const token = localStorage.getItem("token");
//             await axios.delete("http://localhost:6001/tasks/delete", {
//                 headers: { Authorization: `Bearer ${token}` },
//                 data: { taskId },
//             });
//             fetchTasks();
//         } catch (err) {
//             console.error("Error deleting task:", err);
//         }
//     };

//     // Fetch tasks on page load
//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     // Handle "Total Tasks" click to view all tasks
//     const handleTotalTasksClick = () => {
//         navigate("/all-tasks", { state: { tasks } });
//     };

//     // Handle "Show Users" button click
//     const handleShowUsersClick = () => {
//         navigate("/showusers"); // Redirect to Show Users page
//     };

//     // Handle "Admin Page" button click
//     const handleAdminPageClick = () => {
//         navigate("/admin"); // Redirect to Admin Page
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
//             {/* Navbar */}
//             <div className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
//                 <h1 className="text-2xl font-bold">📋 Task Management</h1>
//                 <button
//                     className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold shadow hover:bg-indigo-100"
//                     onClick={() => navigate("/login")}
//                 >
//                     🚪 Logout
//                 </button>
//             </div>

//             {/* Buttons (Show Users & Admin Page) */}
//             <div className="text-center my-4 flex justify-center space-x-4">
//                 <button
//                     onClick={handleShowUsersClick}
//                     className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
//                 >
//                     Show Users
//                 </button>
//                 <button
//                     onClick={handleAdminPageClick}
//                     className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
//                 >
//                     Admin Page
//                 </button>
//             </div>

//             {/* Task Addition Form */}
//             <div className="bg-white m-6 p-6 rounded-lg shadow-md border-l-8 border-indigo-600">
//                 <h2 className="text-2xl font-bold text-indigo-700 mb-2">📝 Add Task</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="title"
//                         placeholder="Title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                     />
//                     <select
//                         name="category"
//                         value={formData.category}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                     >
//                         <option value="">Select Category</option>
//                         <option value="Work">For Work</option>
//                         <option value="Personal">For Personal</option>
//                         <option value="Others">Others</option>
//                     </select>
//                     <textarea
//                         name="description"
//                         placeholder="Description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         required
//                         className="w-full p-3 mb-3 border rounded"
//                         rows="4"
//                     ></textarea>
//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full p-3 bg-yellow-500 text-black rounded"
//                     >
//                         {loading ? "Adding Task..." : "Submit Task"}
//                     </button>
//                 </form>
//             </div>

//             {/* Total Tasks Section */}
//             <div
//                 className="bg-white m-6 p-6 rounded-lg shadow-md border-l-8 border-indigo-600 cursor-pointer"
//                 onClick={handleTotalTasksClick}
//             >
//                 <h2 className="text-2xl font-bold text-indigo-700 mb-2">
//                     📊 Total Tasks: {tasks.length}
//                 </h2>
//             </div>

//             {/* Task Sections */}
//             <TaskBox title="🕒 Pending Tasks" color="amber-600" tasks={pendingTasks} handleDelete={handleDelete} />
//             <TaskBox title="🚧 In Progress Tasks" color="blue-600" tasks={inProgressTasks} handleDelete={handleDelete} />
//             <TaskBox title="✅ Completed Tasks" color="green-600" tasks={completedTasks} handleDelete={handleDelete} />
//             <TaskBox title="❌ Cancelled Tasks" color="red-600" tasks={cancelledTasks} handleDelete={handleDelete} />
//         </div>
//     );
// };

// const TaskBox = ({ title, color, tasks, handleDelete }) => (
//     <div className="bg-white m-6 p-6 rounded-lg shadow-md">
//         <h2 className={`text-xl font-semibold text-${color} mb-4`}>
//             {title} ({tasks.length})
//         </h2>
//         {tasks.length === 0 ? (
//             <p className="text-gray-500">No tasks found.</p>
//         ) : (
//             tasks.map((task) => (
//                 <div
//                     key={task._id}
//                     className="flex justify-between items-start border-b py-3 px-2 hover:bg-gray-50 rounded-md transition"
//                 >
//                     <div>
//                         <p className="font-semibold text-lg text-gray-800">{task.title}</p>
//                         <p className="text-sm text-gray-600">Category: {task.category}</p>
//                         <p className="text-sm text-gray-500">{task.description}</p>
//                     </div>
//                     <button
//                         onClick={() => handleDelete(task._id)}
//                         className={`bg-${color} text-white px-3 py-1 mt-2 rounded hover:opacity-90`}
//                     >
//                         Delete
//                     </button>
//                 </div>
//             ))
//         )}
//     </div>
// );

// export default TaskPage;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [cancelledTasks, setCancelledTasks] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);

    // Fetch tasks by status
    const fetchTasks = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://localhost:6001/tasks/get-all", {
                headers: { Authorization: `Bearer ${token}` },
            });

            const allTasks = res.data;
            setTasks(allTasks);
            setPendingTasks(allTasks.filter((task) => task.status === "pending"));
            setInProgressTasks(allTasks.filter((task) => task.status === "inProgress"));
            setCompletedTasks(allTasks.filter((task) => task.status === "completed"));
            setCancelledTasks(allTasks.filter((task) => task.status === "cancelled"));
        } catch (err) {
            console.error("Error fetching tasks:", err);
        }
    };

    // Handle input change for form data
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle task addition
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, category, description } = formData;

        if (!title || !category || !description) {
            alert("Please fill all fields.");
            return;
        }

        setLoading(true);

        try {
            await axios.post("http://localhost:6001/tasks/add-task", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            alert("Task added successfully.");
            fetchTasks(); // Re-fetch tasks after adding
        } catch (error) {
            console.error("Error submitting data:", error);
            alert(error.response?.data?.message || "Something went wrong.");
        }

        setLoading(false);
        setFormData({ title: "", category: "", description: "" });
    };

    // Delete task
    const handleDelete = async (taskId) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete("http://localhost:6001/tasks/delete", {
                headers: { Authorization: `Bearer ${token}` },
                data: { taskId },
            });
            fetchTasks();
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    // Fetch tasks on page load
    useEffect(() => {
        fetchTasks();
    }, []);

    const handleShowUsersClick = () => {
        navigate("/showusers");
    };

    const handleShowTaskClick = () => {
        navigate("/homepage");
    };

    const handleAdminDashboardClick = () => {
        navigate("/admin-dashboard");
    };

    const handleDashboardClick = () => {
        navigate("/dashboard");
    };

    const handleAdminPageClick = () => {
        navigate("/admin");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-pink-50 to-purple-50">
            {/* Navbar */}
            <div className="bg-teal-700 text-white px-8 py-5 flex justify-between items-center shadow-xl rounded-b-2xl">
                <h1 className="text-3xl font-bold tracking-wide">📝 TaskBoard</h1>
                <button
                    className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-teal-100"
                    onClick={() => navigate("/login")}
                >
                    🚪 Logout
                </button>
            </div>

            {/* Buttons (Show Users, Admin Page, Admin Dashboard) */}
            <div className="text-center my-6 space-y-4">
                <div className="flex justify-center space-x-6">
                    <button
                        onClick={handleShowUsersClick}
                        className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition ease-in-out"
                    >
                        Show Users
                    </button>
                    <button
                        onClick={handleShowTaskClick}
                        className="px-6 py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition ease-in-out"
                    >
                        Show All Task
                    </button>
                    <button
                        onClick={handleAdminPageClick}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition ease-in-out"
                    >
                        Admin Page
                    </button>
                    <button
                        onClick={handleDashboardClick}
                        className="px-6 py-3 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition ease-in-out"
                    >
                        Dashboard
                    </button>
                    <button
                        onClick={handleAdminDashboardClick}
                        className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition ease-in-out"
                    >
                        Admin Dashboard
                    </button>
                </div>
            </div>

            {/* Task Addition Form */}
            <div className="bg-white m-6 p-8 rounded-2xl shadow-lg border-l-8 border-teal-600">
                <h2 className="text-3xl font-bold text-teal-600 mb-4">📝 Add Task</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-4 mb-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full p-4 mb-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        <option value="">Select Category</option>
                        <option value="Work">For Work</option>
                        <option value="Personal">For Personal</option>
                        <option value="Others">Others</option>
                    </select>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-4 mb-4 border border-teal-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        rows="4"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-4 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-yellow-600 transition ease-in-out"
                    >
                        {loading ? "Adding Task..." : "Submit Task"}
                    </button>
                </form>
            </div>

            {/* Total Tasks Section */}
            <div className="bg-white m-6 p-6 rounded-2xl shadow-lg border-l-8 border-teal-600">
                <h2 className="text-3xl font-bold text-teal-600 mb-4">
                    📊 Total Tasks: {tasks.length}
                </h2>
            </div>

            {/* Task Sections */}
            <TaskBox title="⏳ To-Do Tasks" color="amber-600" tasks={pendingTasks} handleDelete={handleDelete} />
            <TaskBox title="🎉 Done Tasks" color="green-600" tasks={completedTasks} handleDelete={handleDelete} />
            <TaskBox title="🛑 Dropped Tasks" color="red-600" tasks={cancelledTasks} handleDelete={handleDelete} />
        </div>
    );
};

const TaskBox = ({ title, color, tasks, handleDelete }) => (
    <div className="bg-white m-6 p-8 rounded-2xl shadow-lg">
        <h2 className={`text-2xl font-semibold text-${color} mb-6`}>
            {title} ({tasks.length})
        </h2>
        {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks found.</p>
        ) : (
            tasks.map((task) => (
                <div
                    key={task._id}
                    className="flex justify-between items-start border-b py-4 px-3 hover:bg-gray-50 rounded-xl transition ease-in-out"
                >
                    <div>
                        <p className="font-semibold text-lg text-gray-800">{task.title}</p>
                        <p className="text-sm text-gray-600">Category: {task.category}</p>
                        <p className="text-sm text-gray-500">{task.description}</p>
                    </div>
                    <button
                        onClick={() => handleDelete(task._id)}
                        className={`bg-${color} text-white px-4 py-2 mt-2 rounded-lg hover:bg-opacity-90 transition ease-in-out`}
                    >
                        Delete
                    </button>
                </div>
            ))
        )}
    </div>
);

export default TaskPage;