import { isValidEmail } from "../../util/form-validation";

describe("isValidEmail", () => {
  it("Should return 'Please enter a valid Email' if email is not valid", () => {
    const email = "test";
    const result = isValidEmail(email);
    expect(result).toBe(false);
  });

  it("Should return '' if email is valid", () => {
    const email = "TestEmail@gmail.com";
    const result = isValidEmail(email);
    expect(result).toBe(true);
  });
});
