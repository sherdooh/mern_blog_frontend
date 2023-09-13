import { useState } from "react";

export default function Register() {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for loading state and error handling
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle user registration
  async function register(ev) {
    ev.preventDefault();
    setIsLoading(true); // Show loading state
    setError(''); // Clear any previous errors

    // Basic input validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      setIsLoading(false); // Hide loading state
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and Confirm Password must match.');
      setIsLoading(false); // Hide loading state
      return;
    }

    // Send registration request to the server
    const response = await fetch('http://localhost:0000/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    setIsLoading(false); // Hide loading state

    // Handle the server's response
    if (response.status === 200) {
      alert('Registration successful');
      // Clear form fields after successful registration
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      try {
        const data = await response.json(); // Parse the response body as JSON
        setError(`Registration failed: ${data.message}`);
      } catch (error) {
        setError('Registration failed. Please try again later.');
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="max-w-md w-full p-4 bg-white shadow-md rounded">
        <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={register}
          disabled={isLoading}
          style={{ fontFamily: 'Open Sans' }}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}
