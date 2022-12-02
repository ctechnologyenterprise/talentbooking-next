import { registerUser } from "@libs/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      const data = await registerUser({
        email,
        password,
      });
      if (data.isSuccessful) {
        Router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Input = ({ name, type }: { name: string; type: string }) => {
    return (
      <div className="pt-3">
        <label className="text-[#ffff] font-light">{name}</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder={name}
          type={type}
          className="mt-1 w-96 h-10 rounded-[5px] border border-[#dddddd] text-gray-900 block flex-1 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
        />
      </div>
    );
  };
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
        <div className="w-96 pt-5">
          <div className="text-4xl text-[#fff] font-extralight">
            Create Administrator Account
          </div>
          <div className="text-lg text-[#fff] font-light pt-3">
            Please create an{" "}
            <span className="font-semibold">
              Administrator who will have ultimate privileges.
            </span>{" "}
            You should then create further administrators accounts with
            restricted access for general usage.
          </div>
        </div>
        <div className="block w-96 m-auto">
          <div className="pt-3">
            <label className="text-[#ffff] font-light">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="text"
              className="mt-1 w-96 h-10 rounded-[5px] border border-[#dddddd] text-gray-900 block flex-1 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
            />
            <div className="pt-3">
              <label className="text-[#ffff] font-light">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className="mt-1 w-96 h-10 rounded-[5px] border border-[#dddddd] text-gray-900 block flex-1 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
              />
            </div>
          </div>
          {/* <Input name="Email" type="text" />
          <Input name="First Name" type="text" />
          <Input name="Last Name" type="text" />
          <Input name="Password" type="password" />
          <Input name="Confirm Password" type="password" /> */}

          <button
            onClick={handleSubmit}
            className="bg-[#95b883] hover:bg-[#74a15c] text-[#ffff] w-96 h-10 rounded-[5px] mt-7"
          >
            Setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
