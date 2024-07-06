import { expect } from "@jest/globals";

import { getConversion, sliceConversion } from "@utils/helpers/getConversion";

describe("conversion", () => {
  test("rounding", () => {
    expect(getConversion("23.34")).toBe("2334");
  });

  test("conversion from CAD to USD", () => {
    expect(sliceConversion("3213", 1.3674902515, 1)).toBe("2349.56");
  });

  test("conversion from AUD to BTC", () => {
    expect(sliceConversion("20", 1.499530299, 0.0000161101)).toBe("0.000215");
  });
});
