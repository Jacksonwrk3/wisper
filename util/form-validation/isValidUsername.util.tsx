/**
 * @description Checks if the username is valid
 * - At least 3 characters
 * - No special characters EXCEPT - and _
 * - Max length of 20 characters
 * @param {string} username - The username to check
 * @returns {string | true} If username is valid returns true. Else returns string error message
 */
const isValidUsername = (username: string): string | true => {
  // Check if the username is at least 3 characters
  if (username.length < 3) {
    return "Username must be at least 3 characters long.";
  }

  // Check if the username is no more than 20 characters
  if (username.length > 20) {
    return "Username must be no more than 20 characters long.";
  }

  // Check for invalid characters (only allow letters, numbers, -, and _)
  const validUsernameRegex = /^[a-zA-Z0-9-_]+$/;
  if (!validUsernameRegex.test(username)) {
    return "Username can only contain letters, numbers, hyphens, and underscores.";
  }

  return true;
};

export default isValidUsername;
