"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Recipe {
  ID: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function HomePage() {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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

    fetch("http://localhost:3001/recipes")
      .then((data) => data.json())
      .then((data) => {
        setRecipes(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [router]);

  return (
    <div className="pt-24 container mx-auto px-4">
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
              src={recipe.imageUrl || "/placeholder.svg"}
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="p-4 bg-white dark:bg-gray-950">
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {recipe.description}
              </p>
              <Link
                className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-50 text-sm font-medium hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
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
