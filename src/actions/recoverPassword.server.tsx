import supabase from "../../util/supabase/index.client";

/**
 * @function recoverPassword
 * @description Sends a password reset email to the user
 * @param {string} email
 * @throws {Error} - Throws error if there was an issue sending the password recovery email
 * @returns {true} - Returns true if the email was sent successfully
 */
const recoverPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    throw new Error(
      "There was an error sending the password reset email. Please try again."
    );
  } else {
    return true;
  }
};

export default recoverPassword;
