"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const storedItem = localStorage.getItem("items");

    if (storedItem) {
      try {
        const parsedItem: Profile = JSON.parse(storedItem);
        setProfile(parsedItem);
        // console.log(parsedItem.user)
        var user = parsedItem.user;

        if (user) {
          fetch(`https://api-recipes-d99v.onrender.com/users/${user}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
              }
              return response.json();
            })
            .then((data) => {
            //   console.log(data.recipes);
              setRecipes(data.recipes);
            })
            .catch((error) => {
              console.error("There has been a problem with your fetch operation:", error);
            });
        } else {
          console.error("El valor de 'user' no está definido");
        }
      } catch (error) {
        console.error("Error al parsear JSON de localStorage:", error);
      }
    } else {
      console.log(
        "No se encontró ningún item en localStorage con la clave 'items'"
      );
    }
  }, []);


  return (
    <div className="pt-24 container mx-auto px-4">
      {profile ? (
        <div className="container mx-auto px-4">
          <div className="bg-neutral-800 rounded-lg overflow-hidden">
            <div className="h-32 bg-yellow-300 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <img
                  alt="User Avatar"
                  className="rounded-full border-4 border-gray-800"
                  height={96}
                  src="https://i.pinimg.com/236x/e6/13/cb/e613cb744be9a882dc8a6272c34ea12d.jpg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width={96}
                />
              </div>
            </div>
            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-2xl font-bold">
                {profile.Name + " " + profile.lastName}
              </h2>
              <p className="text-gray-400 mt-1">{profile.email}</p>
            </div>
            {/* <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 grid gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">About</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            I m a software engineer and I love to code! I m passionate about building great products and helping others.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Location</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">San Francisco, CA</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Website</h3>
          <a className="text-gray-500 dark:text-gray-400 mt-1 hover:underline" href="#">
            jaredpalmer.com
          </a>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Social</h3>
          <div className="flex items-center gap-4 mt-1">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" href="#">
              <BsTwitter className="h-5 w-5" />
            </a>
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" href="#">
              <BsGithub className="h-5 w-5" />
            </a>
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" href="#">
              <LiaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div> */}
          </div>
          {/* content */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 mt-16 justify-items-center ">
            {recipes.map((recipe) => (
             <div
             key={recipe.ID}
             className="rounded-lg overflow-hidden shadow-md "
           >
             <img
               alt={recipe.title}
               className="w-full h-48 object-cover"
               height={400}
               src={recipe.image || "placeholder.svg"}
               style={{
                 aspectRatio: "600/400",
                 objectFit: "cover",
               }}
               width={600}
             />
             <div className="p-4 bg-neutral-800 ">
               <h3 className="text-lg text-yellow-300 font-semibold mb-2">{recipe.title}</h3>
               <p className="mb-4">
                 {recipe.description}
               </p>
               <Link
                  className=" border hover:border-yellow-300 hover:text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  href={`/Recipes/${recipe.ID}`}
               >
                 Leer más
               </Link>
             </div>
           </div>
              
            ))}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default MyComponent;
