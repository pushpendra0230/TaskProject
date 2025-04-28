// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:6001/tasks/getAll", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setTasks(res.data);
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen p-4 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           {tasks[0]?.userId?.name || "User"}'s Task List
//         </h1>
//         <p className="text-center mb-8 text-gray-600">
//           {tasks[0]?.userId?.email || "Email not available"}
//         </p>

//         {loading ? (
//           <p className="text-center text-lg">Loading tasks...</p>
//         ) : tasks.length === 0 ? (
//           <p className="text-center text-lg text-gray-500">No tasks found.</p>
//         ) : (
//           <div className="space-y-4">
//             {tasks.map((task) => (
//               <div
//                 key={task._id}
//                 className="border border-gray-200 p-4 rounded-lg shadow-sm"
//               >
//                 <h2 className="text-lg font-semibold mb-1">{task.title}</h2>
//                 <p className="text-sm text-gray-700 mb-1">
//                   Category: <span className="font-medium">{task.category}</span>
//                 </p>
//                 <p className="text-sm text-gray-700 mb-3">
//                   Description: {task.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found in localStorage");
//         return;
//       }

//       const res = await axios.get("http://localhost:6001/tasks/get-all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       console.log(">>>>>>tasks:>>>>>>>", res.data);

//       setTasks(res.data);

//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen p-4 bg-white">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           {tasks[0]?.userId?.name || "User"}'s Task List
//         </h1>
//         <p className="text-center mb-8 text-gray-600">
//           {tasks[0]?.userId?.email || "Email not available"}
//         </p>

//         {loading ? (
//           <p className="text-center text-lg">Loading tasks...</p>
//         ) : tasks.length === 0 ? (
//           <p className="text-center text-lg text-gray-500">No tasks found.</p>
//         ) : (
//           <div className="space-y-4">
//             {tasks.map((task) => (
//               <div
//                 key={task._id}
//                 className="border border-gray-200 p-4 rounded-lg shadow-sm"
//               >
//                 <h2 className="text-lg font-semibold mb-1">{task.title}</h2>
//                 <p className="text-sm text-gray-700 mb-1">
//                   Category: <span className="font-medium">{task.category}</span>
//                 </p>
//                 <p className="text-sm text-gray-700 mb-3">
//                   Description: {task.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default HomePage;




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found in localStorage");
//         return;
//       }

//       const res = await axios.get("http://localhost:6001/tasks/get-all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setTasks(res.data);
//     } catch (err) {
//       console.error("Error fetching tasks:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleEdit = (taskId) => {
//     console.log("Edit Task", taskId);
//     // Navigate or open a modal for editing (to be implemented)
//   };

//   const handleDelete = async (taskId) => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         console.error("No token found in localStorage");
//         return;
//       }

//       // Send taskId in the request body
//       const res = await axios.delete("http://localhost:6001/tasks/delete", {
//         headers: { Authorization: `Bearer ${token}` },
//         data: { taskId }, // Send taskId as part of the request body
//       });

//       if (res.status === 200) {
//         setTasks(tasks.filter((task) => task._id !== taskId)); // Update UI after delete
//         alert("Task deleted successfully!");
//       } else {
//         alert("Failed to delete task.");
//       }
//     } catch (error) {
//       console.error("Error deleting task", error);
//       alert("Error deleting task.");
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-white">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-2 text-center text-blue-700">
//           {tasks[0]?.userId?.name || "User"}'s Tasks
//         </h1>
//         <p className="text-center mb-8 text-gray-600">
//           {tasks[0]?.userId?.email || "Email not available"}
//         </p>

//         {loading ? (
//           <p className="text-center text-lg">Loading tasks...</p>
//         ) : tasks.length === 0 ? (
//           <p className="text-center text-lg text-gray-500">No tasks found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {tasks.map((task) => (
//               <div
//                 key={task._id}
//                 className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
//               >
//                 <h2 className="text-xl font-semibold mb-2 text-blue-800">
//                   {task.title}
//                 </h2>

//                 <div className="flex justify-between gap-4">
//                   <button
//                     onClick={() => handleEdit(task._id)}
//                     className="w-full py-2 px-4 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
//                   >
//                     Edit Task
//                   </button>
//                   <button
//                     onClick={() => handleDelete(task._id)}
//                     className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300"
//                   >
//                     Delete Task
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;








import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null); // State for the task being edited
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const res = await axios.get("http://localhost:6001/tasks/get-all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (taskId) => {
    const task = tasks.find((task) => task._id === taskId);
    setEditingTask(task);
    setTitle(task.title);
    setCategory(task.category);
    setDescription(task.description);
    setStatus(task.status);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const taskId = editingTask._id;

      // Send taskId in the URL, and send other fields in the body
      const res = await axios.put(
        `http://localhost:6001/tasks/update/${taskId}`, // taskId as part of the URL
        {
          title,
          category,
          description,
          status
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.status === 200) {
        // Update UI with the updated task data
        setTasks(tasks.map((task) => (task._id === taskId ? res.data.task : task)));
        alert("Task updated successfully!");
        setEditingTask(null); // Close the edit modal
      } else {
        alert("Failed to update task.");
      }
    } catch (error) {
      console.error("Error updating task", error);
      alert("Error updating task.");
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        return;
      }

      const res = await axios.delete("http://localhost:6001/tasks/delete", {
        headers: { Authorization: `Bearer ${token}` },
        data: { taskId },
      });

      if (res.status === 200) {
        setTasks(tasks.filter((task) => task._id !== taskId)); // Update UI after delete
        alert("Task deleted successfully!");
      } else {
        alert("Failed to delete task.");
      }
    } catch (error) {
      console.error("Error deleting task", error);
      alert("Error deleting task.");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-700">
          {tasks[0]?.userId?.name || "User"}'s Tasks
        </h1>
        <p className="text-center mb-8 text-gray-600">
          {tasks[0]?.userId?.email || "Email not available"}
        </p>

        {loading ? (
          <p className="text-center text-lg">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="text-center text-lg text-gray-500">No tasks found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <h2 className="text-xl font-semibold mb-2 text-blue-800">
                  {task.title}
                </h2>

                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => handleEdit(task._id)}
                    className="w-full py-2 px-4 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  >
                    Edit Task
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="w-full py-2 px-4 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Task Modal */}
        {editingTask && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4 text-center">Edit Task</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Status</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="flex justify-between gap-4">
                <button
                  onClick={handleUpdate}
                  className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Update Task
                </button>
                <button
                  onClick={() => setEditingTask(null)}
                  className="w-full py-2 px-4 bg-gray-500 text-white font-medium rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;