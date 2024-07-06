/**
 * @description Checks if the password is valid
 * - At least 9 characters
 * - At least 1 uppercase letter
 * - At least 1 symbol
 * @param {string} password - The password to check
 * @returns {boolean} Whether the password is valid
 */
const isValidPassword = (password: string) => {
  // Check if the password has at least 9 characters
  if (password.length < 9) {
    return false;
  }

  // Check if the password contains at least 1 uppercase letter
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    return false;
  }

  // Check if the password contains at least 1 symbol
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (!hasSymbol) {
    return false;
  }

  // If all checks pass, the password is valid
  return true;
};

export default isValidPassword;
