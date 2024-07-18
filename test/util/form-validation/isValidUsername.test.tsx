import { isValidUsername } from "../../../util/form-validation";

describe("isValidUsername", () => {
  it("Should return 'Username must be at least 3 characters long.' if username is less than 3 characters", () => {
    const username = "a";
    const result = isValidUsername(username);
    expect(result).toBe("Username must be at least 3 characters long.");
  });

  it("Should return 'Username must be no more than 20 characters long.' if username is more than 20 characters", () => {
    const username = "DemonSlayerKimetsuNoYaiba1234567890";
    const result = isValidUsername(username);
    expect(result).toBe("Username must be no more than 20 characters long.");
  });

  it("Should return 'Username can only contain letters, numbers, hyphens, and underscores.' if username contains invalid characters", () => {
    const username = "DemonSlayer!";
    const result = isValidUsername(username);
    expect(result).toBe(
      "Username can only contain letters, numbers, hyphens, and underscores."
    );
  });

  it("Should return true if username is valid", () => {
    const username = "Demon-Slayer32";
    const result = isValidUsername(username);
    expect(result).toBe(true);
  });
});
