"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Button from "../../components/Button/index.client";
import {
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "../../../../util/form-validation";
import { createAccount, emailTaken } from "@/actions/index";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const usernameTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const passwordTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };
  const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (emailTimeoutRef.current !== null) {
      clearTimeout(emailTimeoutRef.current);
    }

    emailTimeoutRef.current = setTimeout(() => {
      const isValid = isValidEmail(newEmail);
      const emailAvailable = emailTaken(newEmail);
      if (!isValid) {
        setEmailError("Please enter a valid Email");
      } else if (!emailAvailable) {
        setEmailError("Invalid Email. Email already exists");
      } else {
        setEmailError(""); // Clear error when valid
      }
    }, 500);
  };

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    setUsername(newUsername);

    if (usernameTimeoutRef.current !== null) {
      clearTimeout(usernameTimeoutRef.current);
    }

    usernameTimeoutRef.current = setTimeout(() => {
      const isValid = isValidUsername(newUsername);
      if (isValid === true) {
        setUsernameError("");
      } else {
        setUsernameError(isValid);
      }
    }, 500);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (passwordTimeoutRef.current !== null) {
      clearTimeout(passwordTimeoutRef.current);
    }

    passwordTimeoutRef.current = setTimeout(() => {
      const isValid = isValidPassword(newPassword);
      if (isValid !== true) {
        setPasswordError(isValid);
      } else {
        setPasswordError(""); // Clear error when valid
      }
    }, 500);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h2>SignUp Page</h2>
      <form
        className="flex flex-col space-y-4"
        action={() => {
          try {
            createAccount(email, username, password);
          } catch (error) {
            console.error("error", error);
          }
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          className="border-2 border-red-300"
          id="email"
          type="text"
          value={email}
          onChange={emailOnChange}
        />
        {emailError && <span>{emailError}</span>}

        <label htmlFor="username">Username</label>
        <input
          className="border-2 border-red-300"
          id="username"
          type="text"
          value={username}
          onChange={onUsernameChange}
        />
        {usernameError && <span>{usernameError}</span>}

        <label htmlFor="password">Password</label>
        <input
          className="border-2 border-red-300"
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={onPasswordChange}
        />
        <button type="button" onClick={toggleShowPassword}>
          Show Password
        </button>
        {passwordError && <span>{passwordError}</span>}
        <Button variant="primary">Create Account</Button>
        <Link href="/login">Already have an account? Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
