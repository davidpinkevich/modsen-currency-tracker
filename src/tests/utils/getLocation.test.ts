import { getLocation } from "@utils/helpers/getLocation";

import { expect } from "@jest/globals";

describe("get location", () => {
  test('should return "/"', () => {
    const result = getLocation("/");
    expect(result).toBe("/");
  });

  test("should return home", () => {
    const result = getLocation("/home");
    expect(result).toBe("home");
  });
});
