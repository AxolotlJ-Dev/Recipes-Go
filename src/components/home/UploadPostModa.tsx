"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SuccessHandlers {
  reset: () => void;
  onClose: () => void;
}

export const UploadPostModal = ({ isOpen, onClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Recipe>();

  const [idUser, setIdUser] = useState<number | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  useEffect(() => {
    const storedItem = localStorage.getItem("items");

    if (storedItem) {
      try {
        const parsedItem = JSON.parse(storedItem);

        if (parsedItem && parsedItem.user) {
          setIdUser(parsedItem.user);
        } else {
          console.log("No se encontró la propiedad 'user'");
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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: Recipe) => {
    const data_url = {
      title: data.title,
      description: data.description,
      ingredients: data.ingredients,
      instructions: data.instructions,
      image: imageBase64,
      user_id: idUser,
    };

    // console.log(data_url);

    const Promise: Promise<any> = fetch("https://api-recipes-d99v.onrender.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_url),
    });

    toast.promise(Promise, {
      loading: "Subiendo ...",
      success: ({ reset, onClose }: SuccessHandlers) => {
        reset();
        onClose();
        return "Guardado exitosamente!";
      },
      error: <b>Could not save.</b>,
    });

    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   return response.json();
    // })
    // .then((data) => {
    //   // console.log(data);
    //   reset();
    //   onClose();
    // })
    // .catch((error) => {
    //   console.error("There has been a problem with your fetch operation:", error);
    // });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-neutral-800 p-6 rounded-lg shadow-lg w-96 overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">
            Subir Post
          </h2>
          <label className="block mb-6">
            <span className="text-yellow-300">Título</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-transparent border border-yellow-300 p-2"
              {...register("title", { required: true })}
            />
            {errors.title && <p className="text-[#ff0000]">Campo Requerido</p>}
          </label>

          <label className="block mb-6">
            <span className="text-yellow-300">Descripción</span>
            <textarea
              className="mt-1 block w-full rounded-md bg-transparent border border-yellow-300 p-2"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-[#ff0000]">Campo Requerido</p>
            )}
          </label>

          <label className="block mb-6">
            <span className="text-yellow-300">Instrucciones</span>
            <textarea
              className="mt-1 block w-full rounded-md bg-transparent border border-yellow-300 p-2"
              {...register("instructions", { required: true })}
            />
            {errors.instructions && (
              <p className="text-[#ff0000]">Campo Requerido</p>
            )}
          </label>

          <label className="block mb-6">
            <span className="text-yellow-300">Ingredientes</span>
            <textarea
              className="mt-1 block w-full rounded-md bg-transparent border border-yellow-300 p-2"
              {...register("ingredients", { required: true })}
            />
            {errors.ingredients && (
              <p className="text-[#ff0000]">Campo Requerido</p>
            )}
          </label>

          <label className="block mb-6">
            <span className="text-yellow-300">Imagen</span>
            <input
              type="file"
              accept="image"
              {...register("image", { required: true })}
              className="mt-1 block w-full"
              onChange={handleImageChange}
            />
            {errors.image && <p className="text-[#ff0000]">Campo Requerido</p>}
          </label>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="border hover:border-red-700 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="border hover:border-yellow-300 hover:text-yellow-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Subir
            </button>
          </div>
        </form>
      </div>

      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
};
