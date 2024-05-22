"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Recipes({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [recipe, setRecipe] = useState(null); // Estado para almacenar la receta
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

    fetch(`http://localhost:3001/recipes/${params.slug}`)
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
    return <p className="pt-24">Loading...</p>;
  }

  if (!recipe) {
    return <p className="pt-24">No recipe found.</p>;
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 pt-24">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            alt="Imagen de la receta"
            className="w-full rounded-lg object-cover"
            height={600}
            src={recipe.image || "/placeholder.svg"} // Renderizar imagen de la receta
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
            <h2 className="text-xl font-semibold">Ingredientes</h2>
            {/* <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul> */}
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Instrucciones</h2>
            {/* <ol className="space-y-2 text-gray-500 dark:text-gray-400">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol> */}
            <p className="space-y-2 text-gray-500 dark:text-gray-400">
              {recipe.description}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="mt-12">
        <h2 className="text-xl font-semibold">Información Nutricional</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Calorías</p>
            <p className="font-semibold">650 kcal</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Carbohidratos
            </p>
            <p className="font-semibold">80g</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Proteínas
            </p>
            <p className="font-semibold">30g</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Grasas</p>
            <p className="font-semibold">35g</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
