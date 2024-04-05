import Link from "next/link";
import Image from "next/image";
import BotonPost from "@/src/components/botonPost";
import { botonPost } from "@/src/constants/botonPostImg";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";

export default function Post() {
  const [todos, setTodos] = useState([]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  let dataPost = {
    titulo: data.articuloTitulo,
    post: data.articuloPost,
  };

  async function onSubmit(dataPost) {
    localStorage.setItem("formData", JSON.stringify(dataPost));
    reset();
  }
  return (
    <main className=" h-full w-full min-h-screen min-w-screen  border-1 ">
      <nav className=" flex justify-center bg-[rgb(245_245_245)] min-h-[55.990px] min-w-full align-middle items-center ">
        <div className=" flex flex-row justify-center items-center  md:pr-60  ">
          <Link href="/">
            <div className="flex justify-center align-middle max-h-[40px] min-w-[50px]  ">
              <Image
                className=""
                src={
                  "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                }
                alt={"DEV Community"}
                width={50}
                height={40}
              />
            </div>
          </Link>
          <div className="p-4">Create Post</div>
        </div>

        <div className="flex flex-row pl-80   ">
          <button className="hidden md:flex hover:bg-[rgb(59_73_223/10%)] p-[8px_16px] text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md">
            Edit
          </button>
          <button className="hidden md:flex hover:bg-[rgb(59_73_223/10%)] p-[8px_16px] text-center min-w-[39px] hover:text-[rgb(47_58_178)] rounded-md">
            Preview
          </button>
        </div>
      </nav>

      <div
        className="flex md:justify-center w-[1500px] h-[1500px] min-w-screen  align-middle rounded-md 
         ml-auto mr-auto text-[rgb(23_23_23)]"
      >
        <div
          className="flex flex-col max-w-[806px] min-h-[640px] border-2 min-w-screen  p-[64px] align-middle rounded-md 
          "
        >
          <button
            className="flex hover:border-[rgb(163_163_163)] text-[1rem] w-[170px] h-[40px] p-[6px_14px] 
              text-[rgb(61_61_61)] hover:text-[rgb(9_9_9)] border-2 items-center rounded-md font-medium "
          >
            Add a cover image
          </button>

          <form name="form" className="" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="min-h-[62px]  outline-none text-[7rem] pt-5 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold "
              placeholder="New post title here..."
              name="articuloTitulo"
              id="articuloTitulo"
              cols="30"
              rows="3"
              required
              autoComplete="off"
              {...register("articuloTitulo", {
                minLength: {
                  value: 3,
                  message: "Add una tarea de al menos 3 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Add una tarea de máximo 30 caracteres",
                },
              })}
            />
            <div className=" p-2 ">Add up 4 tags...</div>
            <div id="botones " className="flex flex-row pl-5   ">
              {botonPost.map((item, index) => {
                return (
                  <div
                    className=" rounded-md flex items-center text-justify align-middle text-sm font-semibold "
                    id="redes"
                  >
                    <BotonPost
                      key={`BotonPost-${index}`}
                      icono={item.icono}
                      alt={item.alt}
                      className={""}
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <input
                className="min-h-[62px] flex outline-none text-[7rem] pt-5 text-base sm:text-xl font-mono  "
                placeholder="Write your post"
                name="articuloPost"
                id="articuloPost"
                cols="60"
                rows="22"
                autoComplete="off"
                required
                {...register("articuloPost", {
                  minLength: {
                    value: 3,
                    message: "Add una tarea de al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Add una tarea de máximo 30 caracteres",
                  },
                })}
              />
            </div>
            <button
              className="bg-indigo-400 text-slate-900 rounded-r-xl p-2 hover:bg-indigo-400/50 hover:text-white font-semibold hover:shadow-lg  hover:shadow-cyan-500"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
