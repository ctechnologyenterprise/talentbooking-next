import Image from "next/image";
import Link from "next/link";

const LoginBy = () => {
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
        <div className="block w-96 m-auto mt-7">
          <Link href="/login?">
            <button className="bg-[#95b883] hover:bg-[#74a15c] text-[#ffff] w-96 h-10 rounded-[5px] mt-7">
              Sign In with SSO
            </button>
          </Link>
          <Link href="/auth/basic-login">
            <button className="bg-[#95b883] hover:bg-[#74a15c] text-[#ffff] w-96 h-10 rounded-[5px] mt-7">
              Sign In with Email and Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginBy;
