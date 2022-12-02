import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { loginUser } from "libs/auth";
import Router from "next/router";
import { useSessionStorage } from "usehooks-ts";

const BasicLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useSessionStorage("token", 0);

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setIsLoading(true);
      // API call:
      const data = await loginUser(email, password);
      console.log("data : ", errorMessage);

      if (data.payload && data.payload.token) {
        setValue(data.payload.token);
        Router.push("/");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full h-screen bg-cover bg-[url('/img/structure/login-bg.jpg')] flex justify-center items-center">
      <div className="w-fit h-fit">
        <Image
          src="/img/structure/login-logo.svg"
          alt="logo"
          width={200}
          height={100}
          className="m-auto"
        />
        {errorMessage && (
          <div className="block w-96 m-auto mt-7 h-32 bg-[#f2dede]">
            <div className="w-11/12 m-auto">
              <div className="text-[#b94a48] pt-5 font-medium">
                Oops! Something isn&apos;t right.
              </div>
              <div className="text-[#b94a48] font-light">
                Please check and try again.
              </div>
              <div className="text-[#b94a48] font-light flex">
                <div className="w-1.5 h-1.5 bg-[#b94a48] rounded-full my-auto mx-5" />
                <div className="text-[#b94a48] font-light">{errorMessage}</div>
              </div>
            </div>
          </div>
        )}
        <div className="block w-96 m-auto mt-7">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-96 h-10 rounded-[5px] border border-[#dddddd] text-gray-900 block flex-1 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-96 h-10 rounded-[5px] border border-[#dddddd] text-gray-900 block flex-1 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0 mt-5"
          />
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            className="bg-[#95b883] hover:bg-[#74a15c] text-[#ffff] w-96 h-10 rounded-[5px] mt-7"
          >
            Sign In
          </button>
          <div className="mt-5 ml-auto w-fit">
            <Link
              href="password-reset-request?emailAddress"
              className="mt-10 text-[#ffff] text-sm hover:underline"
            >
              Forgot your password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicLogin;
