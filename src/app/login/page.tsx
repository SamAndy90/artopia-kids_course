import { RegisterForm } from "components/Auth/RegisterForm";
import { AuthWrapper } from "../../components/Auth/AuthWrapper";

export default function Login() {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  );
}
