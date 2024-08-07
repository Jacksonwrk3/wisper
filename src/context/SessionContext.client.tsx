"use client";
import React, { createContext, useState, useEffect } from "react";
import { Session } from "@supabase/gotrue-js/src/lib/types";
import supabase from "../../util/supabase/index";
/**
 * @type {React.FC<SessionContextProviderProps>}
 * @description Session context provider props
 * @property {React.ReactNode} children - The children of the provider
 */
type SessionContextProviderProps = {
  children: React.ReactNode;
};

/**
 * @type {SessionContextType}
 * @description Session context type
 * @property {Session | null | "Error"} session - The session object
 * @property {React.Dispatch<React.SetStateAction<SessionContextType>>} setSession - The function to set the session
 */
type SessionContextType = {
  session: Session | null | "Error";
  setSession: React.Dispatch<React.SetStateAction<SessionContextType>>;
};

// Create the context with initial value
let SessionContext = createContext<SessionContextType>({
  session: null,
  setSession: () => {},
});

/**
 * @description Session context provider
 * @param {SessionContextProviderProps} props - The props for the provider
 * @returns {JSX.Element} The session context provider
 */
const SessionContextProvider: React.FC<SessionContextProviderProps> = (
  props
) => {
  const [session, setSession] = useState<SessionContextType>({
    session: null,
    setSession: () => {},
  });

  useEffect(() => {
    // Function to fetch session asynchronously
    const sbGetSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw new Error("An error occurred while trying to get the session");
        } else {
          setSession({ session: data.session, setSession });
        }
      } catch (error) {
        setSession({
          session: "Error",
          setSession,
        }); // Set session to "Error" on error
      }
    };

    // Call sbGetSession function when component mounts
    sbGetSession();
  }, []);
  return (
    <SessionContext.Provider value={session}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionContextProvider };
