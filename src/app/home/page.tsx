"use client";
import supabase from "../../../util/supabase/index";
import { signOut } from "../../actions/index";
import { SessionContext } from "../../context/SessionContext.client";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
const Home = () => {
  const [signOutError, setSignOutError] = useState<null | string>(null);
  const { session, setSession } = useContext(SessionContext);
  const router = useRouter();
  useEffect(() => {
    console.log("session1", session);
    if (session === null) {
      router.replace("/authflow/login");
    } else if (session === "Error") {
      router.replace("/authflow/login");
    }
  }, [session]);
  return (
    <div className="flex flex-col space-y-4">
      Home Page
      {signOutError && <p>{signOutError}</p>}
      <button
        onClick={async () => {
          try {
            await signOut();
            setSession((prevState) => {
              return {
                ...prevState,
                session: null,
              };
            });
            router.replace("/login");
          } catch (error) {
            setSignOutError(
              "There was an error signing out. Please try again."
            );
          }
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
