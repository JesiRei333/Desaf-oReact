import Image from "next/image";
import { Inter } from "next/font/google";
//import Link from "next/link";
import AsideLLink from "@/src/components/linkAsideL";
import { parrafo } from "@/src/constants/parrafoAsideL";
import { parrafoBot } from "@/src/constants/parrafoAsideLBot";
import BotonRedes from "@/src/components/redesBoton";
import { redes } from "@/src/constants/redes";
import ParrafoLink from "@/src/components/linksHastag";
import { linkHastag } from "@/src/constants/linksHastag";
import DevAsideLComuni from "@/src/components/devComuniAsideL";
import AsideRScroll from "@/src/components/asideDerechoScroll";
import TextoConHiper from "@/src/components/textoconComentarios";
import { textoConHiper } from "@/src/constants/textoConHiper";
import { discussWater } from "@/src/constants/discusWatercooler";
import PostMid from "@/src/components/postMid";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center items-center align-middle  bg-[rgb(245_245_245)] p-[55.990px]  text-[rgb(64_64_64)] ">
      <div className="flex">
        <div
          id="divL"
          className=" flex flex-col min-w-[208.021px] h-full p-[16px] pr-[0px]"
        >
          <div className="p-[8px_16px] pr-[5px] min-w-[208px] min-h-[23.983px] rounded-md no-underline ">
            {parrafo.map((item, index) => {
              return (
                <AsideLLink
                  key={`parrafo-${index}`}
                  link={item.link}
                  imagen={item.imagen}
                  alt={item.alt}
                  contenido={item.contenido}
                />
              );
            })}
          </div>
          <br />
          <div className=" items-center justify-center align-middle font-bold p-[8px_16px] pr-[5px]  ">
            <p>Other</p>
          </div>

          <div className="p-[8px_16px] pr-[5px] min-w-[208px] min-h-[23.983px]  rounded-md no-underline ">
            {parrafoBot.map((item, index) => {
              return (
                <AsideLLink
                  key={`parrafo-${index}`}
                  link={item.link}
                  imagen={item.imagen}
                  alt={item.alt}
                  contenido={item.contenido}
                />
              );
            })}
          </div>
          <br />
          <div
            className="w-min-[40px] h-min-[40px] rounded-md flex items-center  align-middle pl-4 "
            id="redes"
          >
            {redes.map((item, index) => {
              return (
                <div
                  className="w-min-[40px] h-min-[40px] rounded-md flex items-center p-[8px] pr-[5px] align-middle no-underline "
                  id="redes"
                >
                  <BotonRedes
                    key={`parrafo-${index}`}
                    link={item.link}
                    imagen={item.imagen}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <div className="text-[rgb(64_64_64)] items-center justify-center align-middle font-bold p-[8px_16px] pr-[5px]">
            <p>Popular Tags</p>
          </div>
          <div className="overflow-y-scroll max-h-[401px] max-w-[251.984px] p-[8px_16px] ">
            {linkHastag.map((item, index) => {
              return (
                <div
                  className="w-min-[40px] h-min-[40px] rounded-md flex items-center  align-middle no-underline "
                  id="redes"
                >
                  <ParrafoLink
                    key={`parrafo-${index}`}
                    link={item.link}
                    contenido={item.contenido}
                  />
                </div>
              );
            })}
          </div>
          <div className="p-[8px_16px] max-w-[251.984px] pr-[5px] align-middle  no-underline border-[0.5px] border-[rgba(82,82,82,0.14)]  ">
            {" "}
            <DevAsideLComuni className="hover:underline font-normal" />
          </div>
        </div>

        <div
          id="divM"
          className=" flex min-w-[610.656px]  p-[20px] pl-[0px] h-full  text-[rgb(61_61_61)] text-[0.875rem] font-bold"
        >
          <div className=" flex border-[0.5px] min-w-[610.656px]   border-[rgba(82,82,82,0.14)]">
            <PostMid className="flex hover:bg-[rgba(113,234,139,0.14)] hover:border-1 p-[8px_16px]  " />
          </div>
        </div>
        <div
          id="divR"
          className="max-w-[301.368px] h-full gap-[4px]  pt-[16px]"
        >
          <div className="max-h-[454px] border-2 p-[8px_16px] mb-3">
            <p className="font-bold text-xl">🥰 Challenges</p>
            <AsideRScroll className="text-base font-bold" />
          </div>
          <div>
            <div className="max-h-[644px] p-[8px_16px] border-[0.5px] border-[rgba(82,82,82,0.14)]  pt-[8px]  mb-3">
              <p className="font-bold text-xl">#discuss</p>
              <p className="text-xs">
                Discussion threads targeting the whole community
              </p>
              <br />
              {textoConHiper.map((item, index) => {
                return (
                  <div
                    className="w-min-[40px] h-min-[40px] rounded-md flex items-center text-justify align-middle   "
                    id="redes"
                  >
                    <TextoConHiper
                      key={`parrafo-${index}`}
                      link={item.link}
                      contenido={item.contenido}
                      numRam={item.numRam}
                    />
                  </div>
                );
              })}
            </div>
            <div className="max-h-[644px] p-[8px_16px] border-[0.5px] border-[rgba(82,82,82,0.14)] pt-[8px] mb-3">
              <p className="font-bold text-xl">#watercooler</p>
              <p className="text-xs">Light, and off-topic conversation.</p>
              <br />
              {discussWater.map((item, index) => {
                return (
                  <div
                    className="w-min-[40px] h-min-[40px] rounded-md flex items-center text-justify align-middle  "
                    id="redes"
                  >
                    <TextoConHiper
                      key={`parrafo-${index}`}
                      link={item.link}
                      contenido={item.contenido}
                      numRam={item.numRam}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
