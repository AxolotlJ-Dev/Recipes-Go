"use client";
import { Loader } from "@/components/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Recipes({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe>(); // Estado para almacenar la receta
  const [loading, setLoading] = useState(true); // Estado para gestionar la carga

  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      const items = JSON.parse(savedItems);
      if (items.token) {
        router.push(`/Recipes/${params.slug}`);
      } else {
        router.push("/SignIn");
      }
    }

    fetch(`https://api-recipes-d99v.onrender.com/recipes/${params.slug}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, [params.slug]);

  if (loading) {
    return (
      <div className="pt-24">
        <Loader />
      </div>
    );
  }

  if (!recipe) {
    return <p className="pt-24">No recipe found.</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 pt-24">
      {/* aqui va el nombre del usuario */}

      <Link href={`/Profile/${recipe.user_id}`} className="flex items-center gap-4 mb-5">
        <img
          className="w-10 h-10 rounded-full bg-yellow-300"
          src="/profile.svg"
          alt=""
        />
        <div className="font-medium dark:text-white">
          <div>{`${recipe.first_name} ${recipe.last_name}`}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {recipe.email}
          </div>
        </div>
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            alt="Imagen de la receta"
            className="w-full rounded-lg object-cover"
            height={600}
            src={recipe.image == "" ? "/placeholder.svg" : recipe.image}
            style={{
              aspectRatio: "800/600",
              objectFit: "cover",
            }}
            width={800}
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          {/* Nombre de la receta */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Descripcion</h2>
            <p className="space-y-2 text-gray-400">{recipe.description}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Ingredientes</h2>
            <p className="space-y-2 text-gray-400">{recipe.ingredients}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Instrucciones</h2>
            <p className="space-y-2 text-gray-400">{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
