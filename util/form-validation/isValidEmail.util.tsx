/**
 * @function isValidEmail
 * @description Checks if the email is valid
 * @param {string} email - The email to check
 * @return {boolean} Whether the email is valid
 */
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default isValidEmail;
