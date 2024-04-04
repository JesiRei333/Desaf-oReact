import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return (
    <main className="bg-[245_245_245_1] ">
      <div className=" ">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
