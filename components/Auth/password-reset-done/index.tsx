import Image from "next/image";

const PasswordResetDone = () => {
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
          <div className="text-md text-[#fff] font-light mt-3 ml-5">
            Instructions have been sent to you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetDone;
