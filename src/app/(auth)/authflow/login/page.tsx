"use client";
import { signIn } from "@/actions/index";
import { useState, useContext } from "react";
import getSession from "../../../../../util/supabase/getSession";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/context/SessionContext.client";
import Link from "next/link";
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
  const { setSession } = useContext(SessionContext);
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
        action={async () => {
          try {
            signIn(email, password);
            try {
              const data = await getSession();
              setSession((prevState) => {
                return {
                  ...prevState,
                  session: data.session,
                };
              });
            } catch (error) {
              setSession((prevState) => {
                return {
                  ...prevState,
                  session: "Error",
                };
              });
            }
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
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newEmail = e.target.value;
            emailOnChange(newEmail);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          value={password}
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
      <Link href="/password-recovery">Home</Link>
      <Link href="/signup">Don't have an accout? Sign up</Link>
    </div>
  );
};

export default Login;
