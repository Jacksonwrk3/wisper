import { isValidPassword } from "../../util/form-validation";

describe("isValidPassword", () => {
  it("should return 'Password must contain at least 9 characters' if password is less than 9 characters", () => {
    const password = "aA1!";
    const result = isValidPassword(password);
    expect(result).toBe("Password must contain at least 9 characters");
  });

  it("should return 'Password must contain at least 1 uppercase letter' if password does not contain an uppercase letter", () => {
    const password = "ajkl39mkl!@";
    const result = isValidPassword(password);
    expect(result).toBe("Password must contain at least 1 uppercase letter");
  });

  it("should return 'Password must contain at least 1 symbol' if password does not contain a symbol", () => {
    const password = "Ajklsdfjml";
    const result = isValidPassword(password);
    expect(result).toBe("Password must contain at least 1 symbol");
  });

  it("should return true if password is valid", () => {
    const password = "Ajkl3mjf@p";
    const result = isValidPassword(password);
    expect(result).toBe(true);
  });
});
