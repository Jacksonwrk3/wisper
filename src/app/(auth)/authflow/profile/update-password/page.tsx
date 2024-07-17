import { useState } from "react";
const UpdatePassword = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" value={email} />
        <label htmlFor="password1">New Password</label>
        <input name="password1" id="password1" value={password1} />
        <label htmlFor="password2">Confirm New Password</label>
        <input name="password2" id="password2" value={password2} />
      </form>
    </div>
  );
};

export default UpdatePassword;
