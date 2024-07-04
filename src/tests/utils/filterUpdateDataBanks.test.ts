import { SELECT_QUOTES } from "@constants/index";
import {
  filterSearchValue,
  filterUpdateDataBanks,
  updateDataBanks
} from "@utils/helpers/updateDataBanks"; // Замените 'your-module' на имя вашего модуля
import { type MapboxItem, type UpdateMapboxItem } from "@src/types";

const data = [
  {
    geometry: {
      coordinates: [23.705277, 52.086153],
      type: "Point"
    },
    properties: {
      name: "Priorbank",
      address: "б-р Шевченко",
      full_address: "б-р Шевченко, 224013 Brest, Belarus",
      place_formatted: "224013 Brest, Belarus",
      coordinates: {
        latitude: 52.086153,
        longitude: 23.705277
      },
      language: "en",
      metadata: {
        phone: "+375172899090"
      }
    }
  },
  {
    geometry: {
      coordinates: [23.4245277, 32.0812353],
      type: "Point"
    },
    properties: {
      name: "SPB",
      address: "ул Советская",
      full_address: "г. Брест ул Советская 23",
      place_formatted: "224013 Brest, Belarus",
      coordinates: {
        latitude: 23.088153,
        longitude: 42.703277
      },
      language: "en",
      metadata: {
        phone: "+3545398723"
      }
    }
  }
];

describe("Data Functions", () => {
  // Тесты для updateDataBanks
  describe("updateDataBanks", () => {
    it("should return undefined for undefined input", () => {
      const result = updateDataBanks(undefined);
      expect(result).toBeUndefined();
    });

    it("should update the data with id and currencies", () => {
      const result = updateDataBanks(data);
      expect(result).toBeDefined();
      expect(result?.length).toBe(2);
      expect(result?.[0].id).toBe(0);
      expect(result?.[1].id).toBe(1);
      expect(result?.[0].currencies).toBeDefined();
      expect(result?.[1].currencies).toBeDefined();
    });
  });

  describe("filterUpdateDataBanks", () => {
    let updatedData: UpdateMapboxItem[] | undefined = [];
    beforeEach(() => {
      updatedData = updateDataBanks(data);
    });

    it("should return an empty array for an undefined value", () => {
      if (updatedData) {
        const result = filterUpdateDataBanks(updatedData, "random");
        expect(result).toEqual([]);
      }
    });
  });

  describe("filterSearchValue", () => {
    it("should return an empty array for undefined value", () => {
      const result = filterSearchValue(SELECT_QUOTES, "dodddddd");
      expect(result).toEqual([]);
    });
  });
});
