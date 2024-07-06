import { expect } from "@jest/globals";

import { getCurrentDate, getThirtyDaysAgoDate } from "@utils/helpers/getDate";

describe("get date", () => {
  test("should return the current date in YYYY-MM-DD format", () => {
    const currentDate = new Date("2023-12-12");
    jest.spyOn(global, "Date").mockImplementation(() => currentDate);

    const result = getCurrentDate();
    expect(result).toBe("2023-12-12");
  });

  test("should return the date 30 days ago in YYYY-MM-DD format", () => {
    const currentDate = new Date("2023-12-12");
    jest.spyOn(global, "Date").mockImplementation(() => currentDate);

    const result = getThirtyDaysAgoDate();
    expect(result).toBe("2023-11-12");
  });
});
