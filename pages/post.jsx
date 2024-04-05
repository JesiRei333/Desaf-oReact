import Link from "next/link";
import Image from "next/image";
import BotonPost from "@/src/components/botonPost";
import { botonPost } from "@/src/constants/botonPostImg";

export default function Post() {
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

          <textarea
            className="min-h-[62px]  outline-none text-[7rem] pt-5 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold "
            placeholder="New post title here..."
            name="articuloTitulo"
            id="articuloTitulo"
            cols="30"
            rows="3"
            autoComplete="off"
          ></textarea>
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
            <textarea
              className="min-h-[62px] flex outline-none text-[7rem] pt-5 text-base sm:text-xl font-mono  "
              placeholder="Write your post"
              name="articuloPost"
              id="articuloPost"
              cols="60"
              rows="22"
              autoComplete="off"
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
}
