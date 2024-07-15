"use client";
import signIn from "@/actions/signin.server";
import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * @description Login Page
 * @TODO Login page currently uses useRouter and routes on client side, but signUp page uses redirect on server side.
 * - Refactor to use redirect on server side for both login and signUp
 * - Login currently facing redirect errors due to try catch block for some reason
 * @returns {JSX.Element} - Login page
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hasLoginError, setHasLoginError] = useState(false);

  const router = useRouter();
  const toggleShowPassword = () => {
    setShowPassword((prevState: boolean) => {
      return !prevState;
    });
  };

  const emailOnChange = (email: string) => {
    setEmail(email);
  };

  const passwordOnChange = (password: string) => {
    setPassword(password);
  };
  return (
    <div className="flex-col space-y-4">
      Login Page
      <form
        className="flex-col space-y-4"
        action={() => {
          try {
            signIn(email, password);
            router.replace("/home");
          } catch (error) {
            setHasLoginError(true);
          }
        }}
      >
        {hasLoginError && (
          <p>There was an error logging in. Please try again</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          name="email"
          id="email"
          className="border-2 border-blue-300"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newEmail = e.target.value;
            emailOnChange(newEmail);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type={showPassword ? "text" : "password"}
          className="border-2 border-red-300"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newPassword = e.target.value;
            passwordOnChange(newPassword);
          }}
        />
        <button type="button" onClick={toggleShowPassword}>
          Show Password
        </button>
        <button type="submit">Log in </button>
      </form>
    </div>
  );
};

export default Login;
