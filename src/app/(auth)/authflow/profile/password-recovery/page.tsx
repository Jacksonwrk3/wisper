import { isValidEmail } from "../../../../../../util/form-validation/index";
import { useState, useRef } from "react";
import { recoverPassword } from "@/actions/index";
const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [recoveryEmailSent, setRecoveryEmailSent] = useState<null | boolean>(
    null
  );
  const emailTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const emailOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (emailTimeoutRef.current !== null) {
      clearTimeout(emailTimeoutRef.current);
    }

    emailTimeoutRef.current = setTimeout(async () => {
      const isValid = isValidEmail(newEmail);
      if (!isValid) {
        setEmailError("Please enter a valid Email");
      } else {
        setEmailError(""); // Clear error when valid
      }
    }, 500);
  };
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl">Need help with your password?</h1>
      <form
        action={async () => {
          try {
            let res = await recoverPassword(email);
            if (res === true) {
              setRecoveryEmailSent(true);
            } else {
              setRecoveryEmailSent(false);
            }
          } catch (error) {
            setRecoveryEmailSent(false);
          }
        }}
      >
        <label htmlFor="email">Email</label>
        <p>Enter your email to get started</p>

        <input
          name="email"
          id="email"
          value={email}
          className="border-2 border-blue-300"
          onChange={emailOnChange}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
        {recoveryEmailSent === null ? null : recoveryEmailSent === true ? (
          <p className="text-green-500">Recovery email sent</p>
        ) : (
          <p className="text-red-500">
            Error sending recovery email. Please try again.
          </p>
        )}
        <button type="submit">Send Recovery Email</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
