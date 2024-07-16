import { createContext, useState, useEffect } from "react";
import { Session } from "@supabase/gotrue-js/src/lib/types"
import supabase from "../../util/supabase/index";


type SessionContextProviderProps = {
  children: React.ReactNode;
}


let SessionContext = createContext<Session | null | Error>(null);

/**
 * @description Gets and provides the current session
 * @returns {React.ReactNode} The session context provider
 */
export default const SessionContextProvider: React.FC<SessionContextProviderProp> = (props) => {
  const [session, setSession] = useState<Session | null | Error>(null);

  useEffect(() =>{
    /**
     * @function sbGetSession
     * @description Get the current session
     * @returns {Promise<void>}
     */
    const sbGetSession = async() => {
      const {data, error} = await supabase.auth.getSession();
      if(error) {
        throw new Error("An error occurred while trying to get the session");
      } else {
        setSession(data.session);
      }
    }
    try{
    sbGetSession();
  } catch (error) {
    setSession(error);
  }
  }, [])


  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {props.children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionContextProvider };