"use client";
import supabase from "../../../util/supabase/index";
import { getSession } from "../../actions/index";
import { useState, useEffect } from "react";
const Home = () => {
  const [signOutError, setSignOutError] = useState<null | string>(null);

  return (
    <div className="flex flex-col space-y-4">
      Home Page
      {signOutError && <p>{signOutError}</p>}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
export default Home;
