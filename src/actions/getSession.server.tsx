"use server";
import supabase from "../../util/supabase/index";
import { redirect } from "next/navigation";
const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (data.session === null || error !== null) {
    redirect("/login");
  } else {
    return data;
  }
};

export default getSession;
