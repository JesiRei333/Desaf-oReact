import Nav from "../nav";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Enter() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(dataLogin) {
    localStorage.setItem("registro", JSON.stringify(dataLogin));
    reset();
    router.push;
    return;
  }

  return (
    <div>
      <Nav />
      <main className=" h-full w-full min-h-screen min-w-screen   ">
        <div
          className="flex w-[710px] h-[100%] min-w-screen  align-middle rounded-md 
        pt-[6rem] ml-auto mr-auto text-[rgb(23_23_23)"
        >
          <div
            className="flex flex-col w-[546px] h-[100%] border-2 min-w-screen   align-middle rounded-md 
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
            <form name="form" className="" onSubmit={handleSubmit(onSubmit)}>
              <div id="nameLogin" className="pt-2 pb-2">
                <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
                  Name <span className="text-[rgb(220_38_38)] text-xl">*</span>
                </p>
                <br />
                <input
                  required
                  name="nameIn"
                  className=" flex justify-center items-center align-middle w-[500px] h-[35px] p-[12px] border-2 rounded-lg outline-none hover:border-[rgb(47_58_178)] "
                  {...register("nameIn", {
                    minLength: {
                      value: 3,
                      message: "Tu nombre debe tener al menos 3 caracteres",
                    },
                  })}
                />
                <div id="errordeName" className="p-1">
                  {errors.nameIn && (
                    <p
                      className=" text-base flex justify-center items-center "
                      id="letra"
                    >
                      {"⚠ "} {errors.nameIn.message}
                    </p>
                  )}
                </div>

                <div id="userLogin" className="pt-2 pb-2">
                  <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
                    Username
                    <span className="text-[rgb(220_38_38)] text-xl">*</span>
                  </p>
                  <br />
                  <input
                    required
                    name="Username"
                    className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg outline-none hover:border-[rgb(47_58_178)] "
                    {...register("Username", {
                      minLength: {
                        value: 3,
                        message: "Tu Username debe tener al menos 3 caracteres",
                      },
                    })}
                  />
                  <div id="errordeUsername" className="p-1">
                    {errors.Username && (
                      <p
                        className=" text-base flex justify-center items-center "
                        id="letra"
                      >
                        {"⚠ "} {errors.Username.message}
                      </p>
                    )}
                  </div>
                </div>

                <div id="Email" className="pt-2 pb-2">
                  <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
                    Email
                    <span className="text-[rgb(220_38_38)] text-xl">*</span>
                  </p>
                  <br />
                  <input
                    required
                    name="Email"
                    className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg outline-none hover:border-[rgb(47_58_178)]  "
                    {...register("Email", {
                      minLength: {
                        value: 3,
                        message: "Tu Email debe tener al menos 3 caracteres",
                      },
                    })}
                  />
                  <div id="errordeEmail" className="p-1">
                    {errors.Email && (
                      <p
                        className=" text-base flex justify-center items-center "
                        id="letra"
                      >
                        {"⚠ "} {errors.Email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div id="paswordLogin" className="pt-2 pb-2">
                  <p className=" flex flex-initial  w-[100px] h-[20px] text-center  text-[rgb(5,5,5)] font-semibold">
                    Password
                    <span className="text-[rgb(220_38_38)] text-xl">*</span>
                  </p>
                  <br />
                  <input
                    type="password"
                    required
                    name="Password"
                    className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg outline-none hover:border-[rgb(47_58_178)]  "
                    {...register("Password", {
                      minLength: {
                        value: 3,
                        message: "Tu Password debe tener al menos 3 caracteres",
                      },
                    })}
                  />
                  <div id="errordePassword" className="p-1">
                    {errors.Password && (
                      <p
                        className=" text-base flex justify-center items-center "
                        id="letra"
                      >
                        {"⚠ "} {errors.Password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div id="confirmaLogin" className="pt-2 pb-2">
                  <p className=" flex flex-initial pb-2  w-[200px] h-[20px]  text-[rgb(5,5,5)] font-semibold">
                    Password Confirmation
                    <span className="text-[rgb(220_38_38)] text-xl">*</span>
                  </p>
                  <br />
                  <input
                    type="password"
                    required
                    className=" flex justify-center items-center align-middle w-[500px] h-[40px] p-[12px] border-2 rounded-lg  outline-none hover:border-[rgb(47_58_178)] "
                    {...register("passwordConfirmation", {
                      minLength: {
                        value: 3,
                        message:
                          "Tu Password Confirmation debe tener al menos 3 caracteres",
                      },
                    })}
                  />
                  <div id="errordePasswordConfirmation" className="pt-1">
                    {errors.passwordConfirmation && (
                      <p
                        className=" text-base flex justify-center items-center "
                        id="letra"
                      >
                        {"⚠ "} {errors.passwordConfirmation.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="hover:bg-[rgb(47_58_178)] p-[8px_16px] bg-[rgb(59_73_223)]  min-w-[95px] text-center  text-[rgb(255_255_255)] rounded-lg  font-semibold"
                >
                  Sing Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
