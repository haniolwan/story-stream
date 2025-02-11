import './style.css'
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-300 to-indigo-500">
      <div className="shadow-lg relative w-full max-w-sm rounded-lg p-6 bg-neutral-100 dark:bg-gray-900">
        <h2 className="text-2xl font-semibold text-purple-600 text-center mb-2">
          Login
        </h2> 
        <p className="text-sm dark:text-white text-black text-center mb-6">
          Access your Story stream account
        </p>

        <a
          href="/"
          className="absolute top-6 inline-flex items-center px-2 py-1.5 rounded-md text-purple-600 hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </a>

        <form method="POST" action="{{ route('login') }}">
          <div className="mb-4">
            <label
              for="email"
              className="block text-md font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              required
              autofocus
              autocomplete="email"
              placeholder="Enter your username"
              className="appearance-none dark:!bg-gray-800 mt-2 block w-full rounded-lg border-2 border-[#A0C9E0] shadow-sm focus:outline-[#85c5ea] sm:text-sm px-4 py-2.5"
            />
            <span className="text-sm text-red-600 mt-2">Message</span>
          </div>

          <div className="mb-4 relative">
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              autocomplete="current-password"
              placeholder="Enter your password"
              className="relative mt-2 block w-full rounded-lg border-2 border-[#A0C9E0] shadow-sm focus:outline-[#85c5ea] sm:text-sm px-4 py-2.5"
            />
            <button
              type="button"
              id="toggle-password"
              className="absolute top-[40%] inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
            >
              <svg
                className="shrink-0 size-3.5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  id="eye-closed"
                  className="hs-password-active:block"
                  d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                ></path>
                <path
                  id="eye-closed"
                  className="hs-password-active:block"
                  d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                ></path>
                <path
                  id="eye-closed"
                  className="hs-password-active:block"
                  d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                ></path>
                <line
                  id="eye-closed"
                  className="hs-password-active:block"
                  x1="2"
                  x2="22"
                  y1="2"
                  y2="22"
                ></line>

                <path
                  id="eye-open"
                  className="hidden hs-password-active:block"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                ></path>
                <circle
                  id="eye-open"
                  className="hidden hs-password-active:block"
                  cx="12"
                  cy="12"
                  r="3"
                ></circle>
              </svg>
            </button>

            <span className="text-sm text-red-600 mt-2"></span>
          </div>

          <input
            id="login_type"
            type="hidden"
            name="login_type"
            value="patient"
          />

          <div className="flex items-center justify-between mb-6">
            <label
              for="remember_me"
              className="flex items-center text-sm text-gray-600"
            >
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="{{ route('password.request') }}"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 w-full py-2 px-4 mb-3 text-white rounded-md text-md font-medium focus:outline-none focus:ring-2 "
          >
            Login
          </button>
          <div id="doctorLogin" className="hidden text-center">
            <a
              href="{{ url('/register/doctor') }}"
              className="text-md text-blue-600 hover:text-blue-800"
            >
              Register as a new doctor
            </a>
          </div>

          <div id="patientLogin" className="text-center">
            <a
              href="{{ url('/register/patient') }}"
              className="text-md text-blue-600 hover:text-blue-800"
            >
              Register as a new patient
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
