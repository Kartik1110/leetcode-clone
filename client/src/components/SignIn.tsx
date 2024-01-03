import Card from "./common/Card";
import googleLogo from "../assets/google.svg";
import siginBg from "../assets/signin-bg.jpg";

function SignIn() {
  const onSignin = () => {
    alert("Sign In");
  };

  return (
    <div className="flex h-[92vh] w-screen ">
      <div className="w-[30vw]">
        <img src={siginBg} alt="High Tech Image" className="w-full h-full object-cover" />
      </div>

      <div className="w-[70vw] flex items-center justify-center bg-gradient-to-r from-black to-gray-800">
        <Card>
          <div className="mb-5 float-left text-left">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">Login</h2>
              <span className="text-white pr-2">New to dailycode?</span>
              <span className="text-blue-600 hover:text-blue-500 hover:cursor-pointer">Signup</span>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-sm text-gray-400">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-2 px-3 mt-1 bg-gray-700 text-white rounded-md active:bg-inherit focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="text-sm text-gray-400">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full py-2 px-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={() => onSignin()}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
            >
              Sign In
            </button>
          </div>
          <button
            onClick={() => onSignin()}
            className="flex items-center justify-center text-white mt-5 rounded-md focus:outline-none"
          >
            <img src={googleLogo} alt="Google Logo" className="h-5 w-5 mr-2" />
            Login with Google
          </button>
        </Card>
      </div>
    </div>
  );
}

export default SignIn;
