import supabase from "../supabase/index.client";

/**
 * @deprecated This function is deprecated. Use supabase.auth.getSession() instead in client.
 * @function getSession
 * @description Gets the session object from supabase (client side)
 * @important This function should only be used on the client side. It is not safe on server-side
 * @throws {Error} - Throws error if there was an issue getting the session
 * @returns {Promise<object>} - Returns the session object
 */
const getSession = async () => {
  const { error, data } = await supabase.auth.getSession();
  if (error) {
    throw new Error("There was an error getting the session");
  } else {
    return data;
  }
};

export default getSession;
