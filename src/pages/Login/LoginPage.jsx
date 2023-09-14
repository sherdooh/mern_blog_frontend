import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export default function LoginPage() {
  // State variables for username, password, redirection, and user authentication
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state variable
  const [errorMessage, setErrorMessage] = useState(''); // New state variable for error message

  // Access the UserContext to set user information
  const { setUserInfo } = useContext(UserContext);

  // Function to handle user login
  async function login(ev) {
    ev.preventDefault();

    // Check if username and password are not empty
    if (!username || !password) {
      setErrorMessage('Please fill in both username and password'); // Set error message
      return;
    }

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // Include cookies in the request for session management
    });

    if (response.ok) {
      // If login is successful, set user information, set isLoggedIn to true, and trigger redirection
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setIsLoggedIn(true);
        setRedirect(true);
      });
    } else {
      setErrorMessage('Wrong credentials'); // Set error message
    }
  }

  // Function to handle user logout
  function logout() {
    // Implement your logout logic here, e.g., clearing user data, cookies, etc.
    // Then set isLoggedIn to false.
    setIsLoggedIn(false);
  }

  // Redirect to the homepage after successful login
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="max-w-md w-full p-4 bg-white shadow-md rounded">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          onClick={login}
        >
          Login
        </button>
        {errorMessage && ( // Conditionally render error message
          <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
        )}
        {isLoggedIn ? (
          // If isLoggedIn is true, show the logout button
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg mt-2 transition duration-300"
            onClick={logout}
          >
            Logout
          </button>
        ) : null}
      </form>
    </div>
  );
}
