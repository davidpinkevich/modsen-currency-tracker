import { createTimeUpdate } from "@utils/helpers/createTimeUpdate";

import { expect } from "@jest/globals";

describe("create real time", () => {
  test("should return 22:37:27", () => {
    expect(createTimeUpdate(1720035447712)).toBe("22:37:27");
  });
});
