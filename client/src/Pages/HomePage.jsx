import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center bg-purple-400 items-center text-black ">
      {/* register your input into the hook by invoking the "register" function */}
      <div className="min-h-screen bg-purple-400 flex justify-center items-center">
        <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-0 right-0 transform rotate-12 hidden md:block"></div>
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-black text-center mb-4 cursor-pointer">
              Chat Always
            </h1>
            <div className=" flex text-xl  justify-between text-black text-center mb-4 cursor-pointer">
              <h3>
                <Link to="/login">Login</Link>
              </h3>
              <h3>
                <Link to="/register">Register</Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  );
};

export default HomePage;
