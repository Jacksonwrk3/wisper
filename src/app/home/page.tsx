"use client";
import supabase from "../../../util/supabase/index";
import { useState } from "react";
const Home = () => {
  const [signOutError, setSignOutError] = useState<null | string>(null);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setSignOutError("Error signing out. Please try again");
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      Home Page
      {signOutError && <p>{signOutError}</p>}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
export default Home;
