import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const postDetails = (pics) => {};
  const submitHanlder = () => {};
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center bg-purple-400 items-center text-black ">
      {/* register your input into the hook by invoking the "register" function */}
      <div className="min-h-screen bg-purple-400 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-0 right-0 transform rotate-12 hidden md:block"></div>
        <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-black text-center mb-4 cursor-pointer">
              Create Account
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Create an account to enjoy all the services for free!
            </p>
            <div className="div">
              <p className="p text-[#FF0000] text-center mb-2"></p>
            </div>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="block text-sm bg-[#eaeaf0] py-3 px-4 rounded-xl w-full border outline-purple-500"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              className="block bg-[#eaeaf0] text-sm py-3 px-4 rounded-xl w-full border outline-purple-500"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="block bg-[#eaeaf0] text-sm py-3 px-4 rounded-xl w-full border outline-purple-500"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="text"
              placeholder="Confirm Password"
              className="block bg-[#eaeaf0] text-sm py-3 px-4 rounded-xl w-full border outline-purple-500"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              placeholder="Confirm Password"
              className="block bg-[#eaeaf0] text-sm py-3 px-4 rounded-xl w-full border outline-purple-500"
              onChange={(e) => postDetails(e.target.files[0])}
            />

            {/* {errors.exampleRequired && <span>This field is required</span> */}
          </div>
          <div className="text-center mt-6">
            <input
              className="w-full py-2 font-bold text-xl text-white bg-purple-400 rounded-xl hover:bg-purple-500 transition-all"
              value="Register"
              type="submit"
              onClick={submitHanlder}
            />
            <p className="mt-4 text-sm">
              {" "}
              Have An Account?
              <Link to="/login">
                <span className="underline cursor-pointer"> Login</span>
              </Link>
            </p>
          </div>
        </form>
        <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Register;
