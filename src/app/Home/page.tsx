"use client";
import { UploadPostModal } from "@/components/home/UploadPostModa";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function HomePage() {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    fetch("https://api-recipes-d99v.onrender.com/recipes")
      .then((data) => data.json())
      .then((data) => {
        setRecipes(data);
        // console.log(data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="flex justify-between items-center">
      <button
        className="px-4 py-2 w-full bg-yellow-300 text-black rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Nuevo Post
      </button>
      <UploadPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <section className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 py-8 md:px-6 lg:py-12">
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
      </section>
  </div>
  );
}
