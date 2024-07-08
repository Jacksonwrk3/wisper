"use server";
import supabase from "../../util/supabase/index";
import { RedirectType, redirect } from "next/navigation";

/**
 * @description Server action to create a new account
 * @param {string} email
 * @param {string} username
 * @param {string} password
 * @returns {Promise<void>} - Promise that resolves when the account is created
 * - Redirects to /home on success
 * @throws {Error} - Throws error if there was an issue creating the account
 */
const createAccount = async (
  email: string,
  username: string,
  password: string
) => {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });

  if (error !== null) {
    let errorStatus = error.status;
    if (typeof error.status !== "number" && error.status !== undefined) {
      errorStatus = error.status;
    }
    throw new Error(
      "There was an error creating your account. Please try again."
    );
  } else {
    redirect("/home", RedirectType.replace);
  }
};

export default createAccount;
