import React, { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "../assets/Fixitlogo.png";
import { login, signUp } from "../api/data";
// import Google from "../assets/googleIcon.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import Reset from "./Reset";
import { Link } from "react-router";
// import { TextField, IconButton, InputAdornment } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CreateAccount = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // address: '',
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // const PasswordInput = () => {
  //   const [showPassword, setShowPassword] = useState(false);

  //   const togglePasswordVisibility = () => {
  //     setShowPassword(prev => !prev);
  //   };

  //   return (
  //     <TextField
  //       type={showPassword ? "text" : "password"}
  //       label="Password"
  //       variant="outlined"
  //       fullWidth
  //       InputProps={{
  //         endAdornment: (
  //           <InputAdornment position="end">
  //             <IconButton onClick={togglePasswordVisibility} edge="end">
  //               {showPassword ? <VisibilityOff /> : <Visibility />}
  //             </IconButton>
  //           </InputAdornment>
  //         ),
  //       }}
  //     />
  //   );
  // };

  // export default PasswordInput;

  // const toggleVisibility = () =>  {
  //   setIsVisible(!isVisible);

  // }

  // const toggleVisibility = () => {
  //   setIsVisible({ ...isVisible, password: !isVisible.password });
  // }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!isLogin) {
      if (!values.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!values.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
      // if (!values.address.trim()) {
      //   newErrors.address = 'Address is required';
      // }
      if (!values.confirmPassword.trim()) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (values.confirmPassword !== values.password) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!isLogin && values.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !isLogin &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(values.password)
    ) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, and special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      if (isLogin) {
        // Login API call here
        console.log(FormData, values);
        login(values)
          .then((response) => {
            console.log("Login API response:", response.data);
            toast.success(response.data.message);
            setTimeout(() => {
              navigate("/");
            }, 3000);
          })
          .catch((error) => {
            console.log("Login API error:", error);
          });
        try {
          // const response = await fetch('https://fixitbackend-7zrf.onrender.com/api/v1/user/login', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({
          //     email: values.email,
          //     password: values.password,
          //   }),
          // });
          // const data = await response.json();
          // console.log('Login API response:', data);
        } catch (error) {
          console.error("Login API error:", error);
        }
      } else {
        // Signup API call here

        console.log("Form submitted:", values);
        signUp(values)
          .then((response) => {
            console.log("Signup API response:", response.data);
          })
          .catch((error) => {
            console.log("Signup API error:", error);
          });
        // try {
        //   const response = await fetch('https://fixitbackend-7zrf.onrender.com/api/v1/user/signup', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(values),
        //   });
        //   const data = await response.json();
        //   console.log('Signup API response:', data);
        // } catch (error) {
        //   console.error('Signup API error:', error);
        // }
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#FCFCFC] w-full min-h-screen">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="p-4 w-full max-w-[496px]">
        <div className="">
          <img src={Logo} alt="Fixit Logo" />
        </div>

        <div className="flex  mt-8 bg-[#fcfcfc]  border border-[#E6E5F9] rounded-l-[16px]">
          <h2
            className={`cursor-pointer flex-1 h-[48px] flex justify-center items-center rounded-l-[16px] transition ${
              !isLogin
                ? "bg-[#1A1A1A] text-white "
                : "bg-[#E6E5F9] text-[#4B4B4B]"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Create an Account
          </h2>
          <h2
            className={`cursor-pointer flex-1 h-[48px]  flex justify-center items-center rounded-[16px] transition ${
              isLogin
                ? "bg-[#1A1A1A] text-white"
                : "bg-[#E6E5F9] text-[#4B4B4B]"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </h2>
        </div>
        {/* Sign up tab here */}

        {!isLogin && (
          <div className="mt-[29px] mb-[14px]">
            <div>
              <label htmlFor="firstName" className="font-poppins">
                First Name
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="mt-[14px] ">
              <label htmlFor="lastName" className="font-poppins mt-[14px]">
                Last Name
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div className="mt-[14px] ">
              <label htmlFor="email" className="font-poppins mt-[14px]">
                Email
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mt-[14px] ">
              <label htmlFor="password" className="font-poppins mt-[14px]">
                Password{" "}
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mt-[14px] ">
              <label htmlFor="confirmPassword" className="font-poppins mt-[14px]">
                Confirm Password{" "}
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="password"
                placeholder="Confirm Enter Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-[56px] bg-[#15803D] rounded-[16px] text-white mt-6 hover:bg-green-700 transition"
              >
                Create Account{" "}
              </button>
            </div>
            <div className=" mt-[24px] ">
              <p className="font-poppins mt-6 text-[#4B4B4B] font-poppins font-[500] text-[12px] sm:text[14px] leading-[24px]  ">
                By signing up, you agree to Fixitnaija’s
                <span className="text-[#15803D] pl-[2px] underline cursor-pointer">
                  terms of service
                </span>
              </p>
            </div>
            <div className="flex justify-around items-center mt-[24px]">
              <hr className="w-[98px] border border-[#D1D5DB] " />
              <div className="flex justify-center ">Or Continue with</div>
              <hr className=" w-[98px] border border-[#D1D5DB] " />
            </div>
            <div className=" flex justify-center items-center align-middle w-full h-[48px] bg-[#DDDDDD] rounded-[16px] text-white mt-6">
              <FcGoogle className="h-[32px] w-[32px] " />
            </div>
          </div>
        )}

        {/* Login tab here */}
        {isLogin && (
          <div className="min-h-[400px]">
            <div className="mt-[14px] ">
              <label htmlFor=" lastName" className="font-poppins mt-[14px]">
                Email
              </label>
              <input
                onChange={handleChange}
                className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mt-[14px] ">
              <label htmlFor=" lastName" className="font-poppins mt-[14px]">
                Password{" "}
              </label>
              <div className="relative w-full h-[48px] rounded-[16px] border border-[#DDDDDD] overflow-hidden mt-2">
                <input
                  // className="w-full h-[48px] rounded-[16px] border pl-4 mt-2 bg-white"
                  className="w-full h-full bg-white p-4 outline-none"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />
                <div className="absolute  top-1/2 -translate-y-1/2 right-[12px] cursor-pointer">
                  {showPassword ? (
                    <MdOutlineRemoveRedEye
                      onClick={() => setShowPassword(false)}
                      className="text-[#ABABAB] text-[24px]"
                    />
                  ) : (
                    <LuEyeClosed
                      onClick={() => setShowPassword(true)}
                      className="text-[#ABABAB] text-[24px]"
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-[56px] bg-[#15803D] rounded-[16px] text-white mt-6 hover:bg-green-700 transition"
              >
                Log In{" "}
              </button>
            </div>
            <div className=" flex justify-end ">
              <Link to="/Reset" className="flex  text-[#15803D]">
                Forgot Password?
              </Link>
            </div>
                  <div className="flex justify-around items-center mt-[24px]">
            <hr className="w-[98px] border border-[#D1D5DB] "/>
            <div className="flex justify-center ">Or Continue with</div>
            <hr className=" w-[98px] border border-[#D1D5DB] "/>
            </div>
            <div className=" flex justify-center items-center align-middle w-full h-[48px] bg-[#DDDDDD] rounded-[16px] text-white mt-6">
            
              <FcGoogle className="h-[32px] w-[32px] " />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateAccount;
