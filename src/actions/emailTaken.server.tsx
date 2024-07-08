"use server";
import supabase from "../../util/supabase/index";
/**
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
  console.log(data);
  if (data === null) {
    return false;
  }
  if (data) {
    console.log("returning true");
    return true;
  }
};

export default emailTaken;
