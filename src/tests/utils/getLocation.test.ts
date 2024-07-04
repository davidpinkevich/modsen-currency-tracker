import { getLocation } from "@utils/helpers/getLocation"; // Замените 'your-module' на имя вашего модуля

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
