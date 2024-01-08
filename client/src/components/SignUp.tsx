import Card from './common/Card';
import googleLogo from '../assets/google.svg';
import signUpBg from '../assets/signup-bg.jpg';
import { Link } from 'react-router-dom';

function SignUp() {
  
  const onSignUp = () => {
    alert('Sign Up');
  };

  return (
    <div className="flex h-[92vh] w-screen ">
      <div className="w-[30vw]">
        <img
          src={signUpBg}
          alt="High Tech Image"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="w-[70vw] flex items-center justify-center bg-gradient-to-r from-black to-gray-800">
        <Card>
          <div className="mb-5 float-left text-left">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold">Sign Up</h2>
              <span className="text-white pr-2">Already have an account?</span>
              <Link
                to={'/login'}
                className="text-blue-600 hover:text-blue-500 hover:cursor-pointer"
              >
                Sign In
              </Link>
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

            <div className="mb-4">
              <label htmlFor="password" className="text-sm text-gray-400">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full py-2 px-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="text-sm text-gray-400">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full py-2 px-3 mt-1 bg-gray-700 text-white rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              onClick={() => onSignUp()}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
          <button
            onClick={() => onSignUp()}
            className="flex items-center justify-center text-white mt-5 rounded-md focus:outline-none"
          >
            <img src={googleLogo} alt="Google Logo" className="h-5 w-5 mr-2" />
            Sign Up with Google
          </button>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
