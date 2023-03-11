import BaseButton from "@/components/BaseButton";
import FormControl from "@/components/molecules/FormControl";
import GuestLayout from "@/layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { LoginRequest } from "@/types/auth";
import { ChangeEvent, FormEvent, useEffect } from "react";

const Login = () => {
  const { data, setData, post, processing, errors, reset } =
    useForm<LoginRequest>({
      email: "",
      password: "",
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route("login"));
  };

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  return (
    <GuestLayout>
      <form onSubmit={handleSubmit}>
        <FormControl
          error={errors.email}
          label="Email"
          name="email"
          type={"email"}
          onChange={(e) => setData("email", e.target.value)}
          value={data.email}
        />
        <FormControl
          label="Password"
          name="password"
          type={"password"}
          onChange={(e) => setData("password", e.target.value)}
          value={data.password}
          error={errors.password}
        />
        <BaseButton
          className="w-full"
          type="submit"
          label="Login"
          color="info"
        />
      </form>
    </GuestLayout>
  );
};

export default Login;
