"use server";
import supabase from "../../util/supabase/index.client";

const hasUsername = async (email: string) => {
  console.log("email: ", email);
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("email", email);
  console.log("data: ", data);
};

export default hasUsername;
