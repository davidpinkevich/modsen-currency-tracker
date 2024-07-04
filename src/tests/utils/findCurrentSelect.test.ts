import { findCurrentSelect } from "@utils/helpers/findCurrentSelect";

describe("find current select", () => {
  const data = [
    {
      title: "Commercial Dollar",
      iso: "USD"
    },
    {
      title: "Canadian Dollar",
      iso: "CAD"
    },
    {
      title: "Yen",
      iso: "JPY"
    },
    {
      title: "Euro",
      iso: "EUR"
    },
    {
      title: "Bitcoin",
      iso: "BTC"
    },
    {
      title: "Libra",
      iso: "GBP"
    }
  ];

  test("should return Commercial Dollar", () => {
    expect(findCurrentSelect(data, "USD")).toBe("Commercial Dollar");
  });

  test("should return Euro", () => {
    expect(findCurrentSelect(data, "EUR")).toBe("Euro");
  });
});
