"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";

export default function SignIn() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      const items = JSON.parse(savedItems);
      if (items.token) {
        router.push("/Home");
      } else {
        router.push("/SignIn");
      }
    }
  }, []);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: any) => {
    // const url: string = "https://api-recipes-d99v.onrender.com/login";
    // const url: string = "http://localhost:3001/singIn";

    const data_url = {
      email: data.email,
      password: data.password,
    };

    fetch("https://api-recipes-d99v.onrender.com/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_url),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Credenciales incorrectas");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("items", JSON.stringify(data));
        router.push("/Home");
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage("Credenciales incorrectas");
        console.error("Error al iniciar sesión:", error);
      });
  };

  // const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=" p-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-yellow-300 text-center">
          Sign In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block hover:text-yellow-300 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="border-2 border-gray-200 bg-transparent rounded w-full py-2 px-3 focus:outline-none focus:border-yellow-300"
            />
            {/* {errors.email && <p className="text-[#ff0000]">Datos Incorrectos</p>} */}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block hover:text-yellow-300 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="border-2 bg-transparent border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-yellow-300"
            />
            {/* {errors.password && <p className="text-[#ff0000]">Datos Incorrectos</p>} */}

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
          <button
            type="submit"
            className=" border hover:border-yellow-300 hover:text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>

          <div className="text-center mt-5 block hover:text-yellow-300 font-bold mb-2">
            <Link href="/SingUp">Sign Up</Link>
          </div>
        </form>
      </div>

      <Toaster />
    </div>
  );
}
