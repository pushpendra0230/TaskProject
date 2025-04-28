// import React, { useState } from "react";
// import axios from "axios";

// const VerifyOtp = ({ email }) => {
//     const [otp, setOtp] = useState("");
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState("");

//     const handleOtpSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:6001/verifyOtp", {
//                 email,
//                 otp,
//             });

//             setSuccess(response.data.message);
//             setError(""); // Reset error on success
//         } catch (err) {
//             setError(err.response.data.message);
//             setSuccess(""); // Reset success on error
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
//                 <h2 className="text-2xl font-semibold text-green-500 mb-4">Enter OTP</h2>
//                 <p className="text-gray-700 mb-4">Please enter the OTP sent to your email address to proceed.</p>

//                 {error && <div className="text-red-500 mb-4">{error}</div>}
//                 {success && <div className="text-green-500 mb-4">{success}</div>}

//                 <form onSubmit={handleOtpSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter OTP"
//                         value={otp}
//                         onChange={(e) => setOtp(e.target.value)}
//                         required
//                         className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                     <button
//                         type="submit"
//                         className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                     >
//                         Verify OTP
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default VerifyOtp;