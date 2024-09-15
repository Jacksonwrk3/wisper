"use server";
import { createClient } from "../../util/supabase/index.server";
const hasUsername = async (email: string) => {
  const supabaseServer = createClient();
  const currentEmail = await supabaseServer.auth.getSession();
  console.log("Current email: ", currentEmail);
  console.log("email: ", email);
  const { data, error } = await supabaseServer
    .from("users")
    .select()
    .eq("email", email);
  console.log("data: ", data);
};

export default hasUsername;
