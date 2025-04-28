import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:6001/user/signup", formData);
      alert("SignUp Successful!");
      navigate("/login");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert(error.response ? error.response.data.message : "An error occurred.");
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      role: "user",
    });
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 p-4">
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Create an Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <button
          onClick={handleNavigate}
          className="w-full mt-4 py-2 text-white border border-white/30 rounded-lg hover:bg-white/20 transition duration-300"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import VerifyOtp from "./VerifyOtp";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "user",
//   });
//   const [isOtpSent, setIsOtpSent] = useState(false); // Track OTP status

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.phone || !formData.password) {
//       alert("Please fill all the fields.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:6001/user/signup", formData);
//       alert("SignUp Successful! Please verify your OTP.");

//       // Mark OTP sent status as true after successful signup
//       setIsOtpSent(true);
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert(error.response ? error.response.data.message : "An error occurred.");
//     }

//     // Reset the form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       role: "user",
//     });
//   };

//   const handleNavigate = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 p-4">
//       <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30">
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">Create an Account</h2>

//         {!isOtpSent ? (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-white mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-white mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-white mb-1">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-white mb-1">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-5 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
//             >
//               Sign Up
//             </button>
//           </form>
//         ) : (
//           <VerifyOtp email={formData.email} /> // Show OTP verification component
//         )}

//         <button
//           onClick={handleNavigate}
//           className="w-full mt-4 py-2 text-white border border-white/30 rounded-lg hover:bg-white/20 transition duration-300"
//         >
//           Already have an account? Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SignUp;