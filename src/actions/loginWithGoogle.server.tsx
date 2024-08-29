"use server";
import supabase from "../../util/supabase/index";
import { redirect } from "next/navigation";
/**
 * @TODO Signin Error with Supbase. Signing in with Google doesn't give you a username. Database requires a username. Find a solution.
 * @description Login with Google Server Action
 * @throws {Error} - Throws error if there was an error signing in with Google
 * @returns {void}
 */

const loginWithGoogle = async () => {
  console.log("loginWithGoogle");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://localhost:3000/`,
    },
  });
  if (data.url) {
    console.log(data);
    redirect(data.url);
  }
  if (error) {
    throw new Error(
      "There was an error signing in with Google. Please try again."
    );
  }
};

export default loginWithGoogle;
