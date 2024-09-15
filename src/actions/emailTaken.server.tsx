"use server";
import supabase from "../../util/supabase/index.client";
/**
 * @function emailTaken
 * @description Queries public.users to check if the email exists
 * @param {string} email - The email to check
 * @returns {boolean} Whether the email exists
 */

const emailTaken = async (email: string) => {
  const { data } = await supabase
    .from("users")
    .select("email")
    .eq("email", email)
    .maybeSingle();
  if (data === null) {
    return false;
  }
  if (data) {
    return true;
  }
};

export default emailTaken;
