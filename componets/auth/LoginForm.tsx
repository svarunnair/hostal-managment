"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   if (!username.trim()) {
     setError("Please enter your username.");
     return;
   }

   if (!password.trim()) {
     setError("Please enter your password.");
     return;
   }

   setError("");
   setLoading(true);

   try {
     const response = await axios.post("/api/auth/login", {
       username,
       password,
     });

     console.log("Login successful:", response.data);

     router.push("/admin/dashboard");
   } catch (error: any) {
     console.error("Login failed:", error);

     setError(error.response?.data?.message || "Something went wrong.");
   } finally {
     setLoading(false);
   }
 };

  return (<div className="rounded-xl bg-white p-8 shadow-lg"> <div className="mb-8 text-center"> <h1 className="text-2xl font-bold text-gray-900">
    Admin Login </h1>

    <p className="mt-2 text-sm text-gray-500">
      Sign in to manage your hostel
    </p>
  </div>

    {error && (
      <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
        {error}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Username
        </label>

        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          placeholder="Enter username"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="Enter password"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  </div>


  );
}
