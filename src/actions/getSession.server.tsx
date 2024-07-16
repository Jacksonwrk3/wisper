"use server";
import supabase from "../../util/supabase/index";
import { redirect } from "next/navigation";

/**
 * @description Gets user session from local storage
 * @function getSession
 * @important Should only be used for server side auth. Not safe for server side auth
 * @returns {object} - User session data
 */
const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (data.session === null || error !== null) {
    redirect("/login");
  } else {
    return data;
  }
};

export default getSession;
