import supabase from "../../util/supabase/index.client";
/**
 * @function signIn
 * @description Signs in a user with email and password using supabase
 * @param {string} email
 * @param {string }password
 * @throws {Error} - Throws error if there was an error signing in
 * @returns {object | Error} - Returns user and session data if successful, throws error if not
 */
const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (data.user && data.session) {
    return data;
  } else {
    if (error !== null) {
      throw new Error(error.message);
    } else {
      throw new Error("There was an error signing in. Please try again.");
    }
  }
};

export default signIn;
