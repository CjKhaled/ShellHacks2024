"use client";
import React, { useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const validateForm = (name: string, value: string) => {
    const newErrors = { ...errors };

    if (name === "username") {
      if (!value) {
        newErrors.username = "Username is required.";
      } else if (value.length < 8 || value.length > 15){
          newErrors.username = "Username must be between 8 and 15 characters.";
      } else if (!/^[A-Za-z]+$/.test(value)) { 
        newErrors.username = "Username must contain only alphabetical characters.";
    } else {
      delete newErrors.username;
    }
  }

    if (name === "password") {
      let hasUppercase = false;
      let hasLowercase = false;
      let hasDigit = false;
  
      for (let i = 0; i < value.length; i++) {
        const char = value[i];
        if (char >= "A" && char <= "Z") hasUppercase = true;
        if (char >= "a" && char <= "z") hasLowercase = true;
        if (char >= "0" && char <= "9") hasDigit = true;
      }

      if (!value) {
        newErrors.password = "Password is required.";
      } else if (value.length < 8 || value.length > 15) {
        newErrors.password = "Password must be between 8 and 15 characters long.";
      } else if (hasDigit) { 
        newErrors.password = "Password must contain only alphabetical characters.";
      } else if (!hasUppercase) {
        newErrors.password = "Password must contain an uppercase character.";
      } else if (!hasLowercase) {
        newErrors.password = "Password must contain a lowercase character.";
      } else {
        delete newErrors.password;
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.username || !formData.password || Object.keys(errors).length > 0) {
      return;
    }

    try {
      const response = await fetch(
        "https://shellhacks2024-production.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        localStorage.setItem('username', formData.username);
        router.push('/home');
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Validate the input in real time
    validateForm(name, value);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Log In
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                autoComplete="username"
                className={`block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.username ? "ring-red-500" : ""
                }`}
              />
              {errors.username && (
                <p className="mt-2 text-sm text-red-600">{errors.username}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
                className={`block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.password ? "ring-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Create one here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
