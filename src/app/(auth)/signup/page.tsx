import Link from "next/link";
import { useState, useRef } from "react";
import isValidEmail from "../../../../util/supabase/form-validation/isValidEmail";
/**
 * @description The SignUp page
 * @returns {JSX.Element} The SignUp page
 */
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  /**
   * @description Sets the email state to the email input value
   * @param {React.ChangeEvent<HTMLInputElement>} event
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
      }, 1000);
    }
  };
  return (
    <div>
      SignUp Page
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={emailOnChange} />
      <Link href="/login">Already have an account? Login</Link>
    </div>
  );
};

export default SignUp;
