import Link from "next/link";
import { useState, useRef } from "react";
import {
  isValidEmail,
  isValidPassword,
} from "../../../../util/form-validation";
/**
 * @description The SignUp page
 * @returns {JSX.Element} The SignUp page
 */
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  /**
   * @description Sets the email state to the email input value
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @returns {void}
   */
  const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    } else {
      timeoutRef.current = setTimeout(() => {
        if (!isValidEmail(email)) {
          setEmailError("Please enter a valid Email");
        }
      }, 500);
    }
  };

  /**
   * @description Sets the password state to the password input value
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @return {void}
   */
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    } else {
      timeoutRef.current = setTimeout(() => {
        const isValid = isValidPassword(password);
        if (isValid !== true) {
          setPasswordError(isValid);
        }
      }, 500);
    }
  };

  /**
   * @description Sets the username state to the username input value
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @return {void}
   */
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    } else {
      timeoutRef.current = setTimeout(() => {
        if (username.length < 3) {
          setUsernameError("Username must be at least 3 characters");
        }
      }, 500);
    }
  };
  return (
    <div>
      SignUp Page
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={emailOnChange} />
      {emailError && <span>{emailError}</span>}
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={onUsernameChange}
      />
      {usernameError && <span>{usernameError}</span>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      {passwordError && <span>{passwordError}</span>}
      <Link href="/login">Already have an account? Login</Link>
    </div>
  );
};

export default SignUp;
