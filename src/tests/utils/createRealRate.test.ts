import { createRealRate } from "@utils/helpers/createRealRate";

describe("create real rate", () => {
  test("should return 'No data available' for empty string", () => {
    expect(createRealRate("")).toBe("No data available");
  });

  test("should return '0.15%' for undefined value", () => {
    expect(createRealRate(undefined)).toBe("0.15%");
  });

  test("should return formatted real rate for a valid number", () => {
    expect(createRealRate(1.23456789)).toBe("R$0.810");
  });

  test("should format the real rate with correct rounding", () => {
    expect(createRealRate(1.2345)).toBe("R$0.810");
    expect(createRealRate(1.2346)).toBe("R$0.810");
  });
});
