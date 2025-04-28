// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ShowUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchUsers = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             console.log("Token in localStorage:", token);

//             if (!token) {
//                 console.error("No token found in localStorage");
//                 return;
//             }

//             const res = await axios.get("http://localhost:6001/user/getAll", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             setUsers(res.data);
//         } catch (err) {
//             console.error("Error fetching users:", err.response ? err.response.data : err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div className="min-h-screen p-4 bg-white">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-2xl font-bold mb-4 text-center">All Registered Users</h1>

//                 {loading ? (
//                     <p className="text-center text-lg">Loading users...</p>
//                 ) : users.length === 0 ? (
//                     <p className="text-center text-lg text-gray-500">No users found.</p>
//                 ) : (
//                     <div className="space-y-4">
//                         {users.map((user) => (
//                             <div
//                                 key={user._id}
//                                 className="border border-gray-200 p-4 rounded-lg shadow-sm"
//                             >
//                                 <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
//                                 <p className="text-sm text-gray-700">Email: {user.email}</p>
//                                 <p className="text-sm text-gray-700">Phone: {user.phone}</p>
//                                 <p className="text-sm text-gray-700">Role: {user.role}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ShowUsers;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ShowUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchUsers = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             if (!token) return;

//             const res = await axios.get("http://localhost:6001/user/getAll", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             setUsers(res.data);
//         } catch (err) {
//             console.error("Error fetching users:", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDelete = async (id) => {
//         const token = localStorage.getItem("token");

//         if (!window.confirm("Are you sure you want to delete this user?")) return;

//         try {
//             await axios.delete(`http://localhost:6001/user/delete/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
//         } catch (err) {
//             console.error("Error deleting user:", err);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-8 px-4">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//                     Registered Users
//                 </h1>

//                 {loading ? (
//                     <p className="text-center text-gray-600 text-lg">Loading users...</p>
//                 ) : users.length === 0 ? (
//                     <p className="text-center text-gray-600 text-lg">No users found.</p>
//                 ) : (
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {users.map((user) => (
//                             <div
//                                 key={user._id}
//                                 className="bg-white border border-gray-200 rounded-xl shadow-md p-5 relative hover:shadow-lg transition-shadow"
//                             >
//                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                                     {user.name}
//                                 </h2>
//                                 <p className="text-sm text-gray-600 mb-1">
//                                     📧 <span className="font-medium">Email:</span> {user.email}
//                                 </p>
//                                 <p className="text-sm text-gray-600 mb-1">
//                                     📱 <span className="font-medium">Phone:</span> {user.phone}
//                                 </p>
//                                 <p className="text-sm text-gray-600">
//                                     🧑 <span className="font-medium">Role:</span> {user.role}
//                                 </p>
//                                 <button
//                                     onClick={() => handleDelete(user._id)}
//                                     className="absolute top-3 right-3 text-xs text-red-600 border border-red-500 px-2 py-1 rounded hover:bg-red-100 transition"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ShowUsers;












import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingUser, setEditingUser] = useState(null);
    const [editForm, setEditForm] = useState({ name: "", email: "", phone: "", role: "" });

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const res = await axios.get("http://localhost:6001/user/getAll", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUsers(res.data);
        } catch (err) {
            console.error("Error fetching users:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        if (!window.confirm("Are you sure you want to delete this user?")) return;

        try {
            await axios.delete(`http://localhost:6001/user/delete/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (err) {
            console.error("Error deleting user:", err);
        }
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
        setEditForm({
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditSubmit = async () => {
        const token = localStorage.getItem("token");

        try {
            await axios.put(`http://localhost:6001/user/edit/${editingUser._id}`, editForm, {
                headers: { Authorization: `Bearer ${token}` },
            });

            // After update, refresh users
            fetchUsers();
            setEditingUser(null); // Close edit form
        } catch (err) {
            console.error("Error updating user:", err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    User Management
                </h1>

                {loading ? (
                    <div className="text-center text-gray-600 text-lg">Loading users...</div>
                ) : users.length === 0 ? (
                    <div className="text-center text-gray-600 text-lg">No users found.</div>
                ) : (
                    <div className="flex flex-col gap-6">
                        {users.map((user) => (
                            <div
                                key={user._id}
                                className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:shadow-lg transition-all"
                            >
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        {user.name}
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        📧 <span className="font-medium">Email:</span> {user.email}
                                    </p>
                                    <p className="text-gray-600 mt-1">
                                        📱 <span className="font-medium">Phone:</span> {user.phone}
                                    </p>
                                    <p className="text-gray-600 mt-1">
                                        🧑 <span className="font-medium">Role:</span> {user.role}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-4 sm:mt-0">
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Edit Modal */}
                {editingUser && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl p-8 shadow-lg w-[90%] max-w-md relative">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit User</h2>

                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={editForm.name}
                                    onChange={handleEditChange}
                                    placeholder="Name"
                                    className="border p-3 rounded w-full"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editForm.email}
                                    onChange={handleEditChange}
                                    placeholder="Email"
                                    className="border p-3 rounded w-full"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={editForm.phone}
                                    onChange={handleEditChange}
                                    placeholder="Phone"
                                    className="border p-3 rounded w-full"
                                />
                                <input
                                    type="text"
                                    name="role"
                                    value={editForm.role}
                                    onChange={handleEditChange}
                                    placeholder="Role"
                                    className="border p-3 rounded w-full"
                                />
                            </div>

                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    onClick={() => setEditingUser(null)}
                                    className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleEditSubmit}
                                    className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowUsers;