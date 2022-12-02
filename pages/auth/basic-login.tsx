import BasicLogin from "@components/Auth/basic-login";
import AuthLayout from "@components/authLayout";

const LoginBase = () => {
  return (
    <AuthLayout>
      <BasicLogin />
    </AuthLayout>
  );
};

export default LoginBase;
