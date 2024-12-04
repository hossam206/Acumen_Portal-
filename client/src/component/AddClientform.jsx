import { LuDot } from "react-icons/lu";

export default function AddClientForm() {
  const routes = ["Dashboard", "User", "New account"];

  return (
    <div className="container">
      {/* Header Section */}
      <div>
        <h4 className="text-xl font-semibold leading-[1.5] dark:text-white">
          Create a New User
        </h4>
        <ul className="flex flex-row items-center space-x-4 text-sm py-2">
          {routes.map((route, index) => (
            <li
              key={index}
              className={`flex flex-row items-center ${
                index === routes.length - 1
                  ? "text-gray-400"
                  : "text-slate-900 dark:text-gray-200"
              }`}
            >
              <LuDot className="text-lg text-gray-400 mr-2" /> {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Form Section */}
      <div className="my-6 w-full max-w-md p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
        <form className="flex flex-col space-y-6">
          {/* Client Name Input */}
          <div className="relative">
            <label
              htmlFor="clientName"
              className="block text-sm font-medium mb-1"
            >
              Client Name
            </label>
            <input
              type="text"
              id="clientName"
              placeholder="Enter Client Name"
              className="input   "
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="clientEmail"
              className="block text-sm font-medium mb-1"
            >
              Client Email
            </label>
            <input
              type="email"
              id="clientEmail"
              placeholder="Enter Valid Email"
              className="input  "
            />
          </div>

          {/* File Input */}
          <div className="relative">
            <label
              htmlFor="fileInput"
              className="block text-sm font-medium mb-1"
            >
              Upload File
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="fileInput"
              type="file"
              aria-describedby="fileInputHelp"
            />
            <p
              id="fileInputHelp"
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            >
              SVG, PNG, JPG, or GIF (MAX. 800x400px).
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
