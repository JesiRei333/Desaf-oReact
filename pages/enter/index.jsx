import EnterBoton from "@/src/components/enterBoton";
import Image from "next/image";
import { enterLoginBoton } from "@/src/constants/enterLoginboton";
export default function Enter() {
  return (
    <main className=" h-full w-full min-h-screen min-w-screen align-middle justify-center  ">
      <div
        className="flex h-full w-full min-h-[580px] min-w-screen   items-center  align-middle flex-col  rounded-md p-10
    "
      >
        <div className="flex w-[580px]   flex-col items-center rounded-md pb-[20px]">
          <Image
            className="rounded-md pb-4"
            src={
              "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            }
            alt={"Dev"}
            width={60}
            height={48}
          />

          <p className="text-[rgb(23_23_23)] text-[1.875rem] font-bold">
            Join the DEV Community
          </p>
          <p>DEV Community is a community of 1,394,581 amazing developers</p>
        </div>
        <div className="w-[580px] h-[50px] p-[12]">
          {enterLoginBoton.map((item, index) => {
            return (
              <div
                className="w-min-[40px] min-w-[301.368px]  h-min-[40px] p-1.5 rounded-md flex items-center text-justify align-middle text-sm font-semibold "
                id="redes"
              >
                <EnterBoton
                  key={`enterLoginBoton-${index}`}
                  link={item.link}
                  contenido={item.contenido}
                  alt={item.alt}
                  imagen={item.imagen}
                  className={""}
                />
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <div className="flex  justify-center flex-col items-center rounded-md pb-[20px] font-light italic text-sm ">
        <p>
          {" "}
          By signing up, you are agreeing to our{" "}
          <span className="text-[rgb(59_73_223)] font-normal">
            privacy policy, terms of use
          </span>
        </p>
        <p> and code of conduct. </p>
        <br />
        <div className="w-min-[40px]  h-min-[40px] flex justify-center items-center text-justify align-middle text-base font-normal min-w-[580px] max-h-[580px] text-[rgb(23_23_23)] not-italic border-t-2 p-3">
          Already have an account?{" "}
          <span className="text-[rgb(59_73_223)] font-normal"> Log in.</span>
        </div>
      </div>
    </main>
  );
}
