import Image from "next/image";
import Link from "next/link";

const PasswordResetRequest = () => {
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
        <div className="w-96 mt-5">
          <div className="text-4xl text-[#fff] font-extralight">
            Password Reset
          </div>
          <div className="text-lg text-[#fff] font-light mt-3">
            <p>Enter your email address to receive</p>instructions on how to
            reset your password.
          </div>
        </div>
        <div className="block w-96 m-auto mt-7">
          <input
            placeholder="Email"
            className="w-96 h-10 rounded-[5px] border border-[#dddddd] text-gray-900 block flex-1 text-sm p-2.5 focus:text-[#460465] bg-[#f7f2fa] focus:shadow-[inset_0_0_8px_rgb(70,4,101,0.1)] focus:outline-0"
          />
          <Link href="/password-reset-done">
            <button className="bg-[#95b883] hover:bg-[#74a15c] text-[#ffff] w-96 h-10 rounded-[5px] mt-7">
              Reset Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
