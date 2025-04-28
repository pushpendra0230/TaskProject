// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AllTask = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         title: "",
//         category: "",
//         description: "",
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

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
//             // navigate("/homepage");
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert(error.response?.data?.message || "Something went wrong. Please try again.");
//         }

//         setLoading(false);
//         setFormData({
//             title: "",
//             category: "",
//             description: "",
//         });
//     };

//     return (
//         <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//             <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Task</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 />

//                 <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 >
//                     <option value="">Select Category</option>
//                     <option value="Work">For Office</option>
//                     <option value="Personal">For Personal Use</option>
//                     <option value="Others">Others</option>
//                 </select>

//                 <textarea
//                     name="description"
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 ></textarea>

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     style={{
//                         width: "100%",
//                         padding: "10px",
//                         backgroundColor: "yellow",
//                         color: "black",
//                         border: "none",
//                         cursor: "pointer",
//                         marginBottom: "10px",
//                     }}
//                 >
//                     {loading ? "Adding Task..." : "Submit"}
//                 </button>
//             </form>

//             <button
//                 onClick={() => navigate("/homepage")}
//                 style={{
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "green",
//                     color: "black",
//                     border: "none",
//                     cursor: "pointer",
//                 }}
//             >
//                 Show Tasks
//             </button>
//         </div>
//     );
// };

// export default AllTask;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AllTask = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         title: "",
//         category: "",
//         description: "",
//     });

//     const [loading, setLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

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
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert(error.response?.data?.message || "Something went wrong. Please try again.");
//         }

//         setLoading(false);
//         setFormData({
//             title: "",
//             category: "",
//             description: "",
//         });
//     };

//     return (
//         <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//             <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Task</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 />

//                 <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 >
//                     <option value="">Select Category</option>
//                     <option value="Work">For Office</option>
//                     <option value="Personal">For Personal Use</option>
//                     <option value="Others">Others</option>
//                 </select>

//                 <textarea
//                     name="description"
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 ></textarea>

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     style={{
//                         width: "100%",
//                         padding: "10px",
//                         backgroundColor: "yellow",
//                         color: "black",
//                         border: "none",
//                         cursor: "pointer",
//                         marginBottom: "10px",
//                     }}
//                 >
//                     {loading ? "Adding Task..." : "Submit"}
//                 </button>
//             </form>

//             <button
//                 onClick={() => navigate("/homepage")}
//                 style={{
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "#4CAF50",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     marginBottom: "10px",
//                 }}
//             >
//                 Show Tasks
//             </button>

//             <button
//                 onClick={() => navigate("/showusers")}
//                 style={{
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "#2196F3",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                 }}
//             >
//                 Show Users
//             </button>
//             <button
//                 onClick={() => navigate("/dashboard")}
//                 style={{
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "#FF9800",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     marginTop: "10px"
//                 }}
//             >
//                 Go to Dashboard
//             </button>
//         </div>
//     );
// };

// export default AllTask;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AllTask = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         title: "",
//         category: "",
//         description: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const [tasks, setTasks] = useState([]);
//     const [fetchError, setFetchError] = useState("");

//     useEffect(() => {
//         fetchAllTasks();
//     }, []);

//     const fetchAllTasks = async () => {
//         try {
//             const res = await axios.get("http://localhost:6001/tasks/get-all");
//             setTasks(res.data);
//         } catch (err) {
//             setFetchError("Could not fetch tasks");
//             console.error(err);
//         }
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

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
//             fetchAllTasks(); // refresh task list after adding
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert(error.response?.data?.message || "Something went wrong. Please try again.");
//         }

//         setLoading(false);
//         setFormData({
//             title: "",
//             category: "",
//             description: "",
//         });
//     };

//     return (
//         <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//             <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Task</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 />

//                 <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 >
//                     <option value="">Select Category</option>
//                     <option value="Work">For Office</option>
//                     <option value="Personal">For Personal Use</option>
//                     <option value="Others">Others</option>
//                 </select>

//                 <textarea
//                     name="description"
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 ></textarea>

//                 <button
//                     type="submit"
//                     disabled={loading}
//                     style={{
//                         width: "100%",
//                         padding: "10px",
//                         backgroundColor: "yellow",
//                         color: "black",
//                         border: "none",
//                         cursor: "pointer",
//                         marginBottom: "10px",
//                     }}
//                 >
//                     {loading ? "Adding Task..." : "Submit"}
//                 </button>
//             </form>

//             <button
//                 onClick={() => navigate("/homepage")}
//                 style={{
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "#4CAF50",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     marginBottom: "10px",
//                 }}
//             >
//                 Show Tasks
//             </button>

//             <button
//                 onClick={() => navigate("/showusers")}
//                 style={{
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "#2196F3",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                 }}
//             >
//                 Show Users
//             </button>
//             <button
//                 onClick={() => navigate("/dashboard")}
//                 style={{
//                     width: "100%",
//                     padding: "10px",
//                     backgroundColor: "#FF9800",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     marginTop: "10px"
//                 }}
//             >
//                 Go to Dashboard
//             </button>

//             <hr style={{ margin: "30px 0" }} />

//             <h3 style={{ textAlign: "center" }}>All Tasks</h3>
//             {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
//             {tasks.length === 0 ? (
//                 <p>No tasks available.</p>
//             ) : (
//                 <ul>
//                     {tasks.map((task) => (
//                         <li key={task._id} style={{ marginBottom: "15px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "6px" }}>
//                             <strong>{task.title}</strong> - <em>{task.category}</em>
//                             <p>{task.description}</p>
//                             <small>Created by: {task.userId?.name || "Unknown"}</small>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default AllTask;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AllTask = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         title: "",
//         category: "",
//         description: "",
//     });

//     const [loading, setLoading] = useState(false);
//     const [tasks, setTasks] = useState([]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

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
//             fetchTasks(); // 🔁 fetch again after adding
//         } catch (error) {
//             console.error("Error submitting data:", error);
//             alert(error.response?.data?.message || "Something went wrong. Please try again.");
//         }

//         setLoading(false);
//         setFormData({ title: "", category: "", description: "" });
//     };

//     const fetchTasks = async () => {
//         try {
//             const res = await axios.get("http://localhost:6001/tasks/get-all", {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             });
//             setTasks(res.data);
//         } catch (error) {
//             console.error("Error fetching tasks:", error);
//             alert(error.response?.data?.message || "Unable to load tasks.");
//         }
//     };

//     useEffect(() => {
//         fetchTasks(); // 🔁 load tasks on page load
//     }, []);

//     return (
//         <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//             <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Task</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 />
//                 <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleChange}
//                     required
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 >
//                     <option value="">Select Category</option>
//                     <option value="Work">For Office</option>
//                     <option value="Personal">For Personal Use</option>
//                     <option value="Others">Others</option>
//                 </select>
//                 <textarea
//                     name="description"
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//                 ></textarea>
//                 <button
//                     type="submit"
//                     disabled={loading}
//                     style={{
//                         width: "100%",
//                         padding: "10px",
//                         backgroundColor: "yellow",
//                         color: "black",
//                         border: "none",
//                         cursor: "pointer",
//                         marginBottom: "10px",
//                     }}
//                 >
//                     {loading ? "Adding Task..." : "Submit"}
//                 </button>
//             </form>

//             <button onClick={() => navigate("/homepage")} style={{ width: "100%", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer", marginBottom: "10px" }}>
//                 Show Tasks
//             </button>

//             <button onClick={() => navigate("/showusers")} style={{ width: "100%", padding: "10px", backgroundColor: "#2196F3", color: "white", border: "none", cursor: "pointer" }}>
//                 Show Users
//             </button>

//             <button onClick={() => navigate("/dashboard")} style={{ width: "100%", padding: "10px", backgroundColor: "#FF9800", color: "white", border: "none", cursor: "pointer", marginTop: "10px" }}>
//                 Go to Dashboard
//             </button>
//         </div>
//     );
// };

// export default AllTask;












import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        fetchTasks(); // 🔁 load tasks on page load
    }, []);

    return (
        <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Show All Tasks</h2>

            <div style={{ marginBottom: "20px" }}>
                {tasks.length === 0 ? (
                    <p>No tasks available.</p>
                ) : (
                    <ul>
                        {tasks.map((task) => (
                            <li key={task._id} style={{ marginBottom: "10px" }}>
                                <strong>{task.title}</strong><br />
                                <span>{task.category}</span><br />
                                <span>{task.description}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button
                onClick={() => navigate("/homepage")}
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "10px",
                }}
            >
                Show Tasks
            </button>

            <button
                onClick={() => navigate("/showusers")}
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#2196F3",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Show Users
            </button>

            <button
                onClick={() => navigate("/dashboard")}
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#FF9800",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "10px",
                }}
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default AllTask;