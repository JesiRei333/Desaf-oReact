import EnterBoton from "@/src/components/enterBoton";
import Image from "next/image";
import { enterLoginBoton } from "@/src/constants/enterLoginboton";
export default function Enter() {
  return (
    <main className=" h-full w-full min-h-screen min-w-screen   ">
      <div
        className="flex w-[710px] h-[710px] min-w-screen  align-middle rounded-md 
        pt-[6rem] ml-auto mr-auto text-[rgb(23_23_23)"
      >
        <div
          className="flex flex-col w-[546px] h-[710px] border-2 min-w-screen   align-middle rounded-md 
        p-[32px]  ml-auto mr-auto text-[rgb(23_23_23)]
    "
        >
          {" "}
          <p className="text-[rgb(23_23_23)] font-bold text-lg">
            Create your account{" "}
          </p>
          <br />
          <p className="  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
            Profile image
          </p>
          <br />
          <div className="flex flex-row items-center">
            <button className="hover:bg-[rgba(64,64,64,0.32)] bg-[rgba(82,82,82,0.18)] w-[103px] h-[40px] text-center text-[rgba(23,23,23,0.69)] hover:text-[rgb(5,5,5)]  rounded-md  font-semibold">
              Choose File
            </button>
            <p className="p-1"> No file chosen</p>
          </div>
          <div id="nameLogin" className="pt-2 pb-2">
            <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
              Name
            </p>
            <br />
            <button className=" flex justify-center items-center align-middle w-[500px] h-[35px] p-[12px] border-2 rounded-lg ">
              {" "}
            </button>
          </div>
          <div id="userLogin" className="pt-2 pb-2">
            <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
              Username
            </p>
            <br />
            <button className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg ">
              {" "}
            </button>
          </div>
          <div id="Email" className="pt-2 pb-2">
            <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
              Email
            </p>
            <br />
            <button className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg ">
              {" "}
            </button>
          </div>
          <div id="paswordLogin" className="pt-2 pb-2">
            <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
              Password
            </p>
            <br />
            <button className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg  ">
              {" "}
            </button>
            <div id="confirmaLogin" className="pt-2 pb-2">
              <p className=" flex flex-initial pb-2  w-[200px] h-[20px]  text-[rgb(5,5,5)] font-semibold">
                Pasaword Confirmation
              </p>
              <br />
              <button className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg  ">
                {" "}
              </button>
            </div>
            <button className="hover:bg-[rgb(47_58_178)] p-[8px_16px] bg-[rgb(59_73_223)]  min-w-[95px] text-center  text-[rgb(255_255_255)] border-[rgb(59_73_223)] border-2 rounded-lg  font-semibold">
              Sing Up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
