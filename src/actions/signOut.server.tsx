import supabase from "../../util/supabase/index";
/**
 * @function signOut
 * @description Signs out the current user
 * @throws {Error} - Throws error if there was an error signing out
 * @returns {void}
 */
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error("There was an error signing out. Please try again.");
  }
};

export default signOut;
