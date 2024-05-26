"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SingUp() {

  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: any) => {
    // const url: string = "https://api-recipes-d99v.onrender.com/singUp";
    // const url: string = "http://localhost:3001/singUp";

    const data_url = {
      email: data.email,
      password: data.password,
      last_Name: data.last_Name,
      first_name: data.first_name
    };

    fetch("https://api-recipes-d99v.onrender.com/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_url),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // setItems(data);
        localStorage.setItem("items", JSON.stringify(data));
        router.push("/SignIn")
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  // const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className=" p-8 w-96">
        <h1 className="text-2xl font-bold mb-4 text-yellow-300 text-center">
          Sing Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block hover:text-yellow-300 font-bold mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              {...register("first_name",{ required: true })}
              className="border-2 border-gray-200 bg-transparent rounded w-full py-2 px-3 focus:outline-none focus:border-yellow-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block hover:text-yellow-300 font-bold mb-2"
            >
              Apellido
            </label>
            <input
              type="text"
              {...register("last_Name",{ required: true })}
              className="border-2 border-gray-200 bg-transparent rounded w-full py-2 px-3 focus:outline-none focus:border-yellow-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block hover:text-yellow-300 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email",{ required: true })}
              className="border-2 border-gray-200 bg-transparent rounded w-full py-2 px-3 focus:outline-none focus:border-yellow-300"
            />
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
              {...register("password",{ required: true })}
              className="border-2 bg-transparent border-gray-200 rounded w-full py-2 px-3 focus:outline-none focus:border-yellow-300"
            />
          </div>
          <button
            type="submit"
            className=" border hover:border-yellow-300 hover:text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Acount
          </button>

          <div className="text-center mt-5 block hover:text-yellow-300 font-bold mb-2">
            <Link href="/SingIn">Sing In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
