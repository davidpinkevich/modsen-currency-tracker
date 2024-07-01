import { NAMES_CURRENCY } from "@constants/index";
import { type MapboxItem, type UpdateMapboxItem } from "@src/types";

const createRandomArray = (arr: string[], value: number): string[] => {
  const set = new Set();

  while (set.size < value) {
    set.add(arr[Math.floor(Math.random() * arr.length)]);
  }

  return Array.from(set) as string[];
};

const updateDataBanks = (
  data: MapboxItem[] | undefined
): UpdateMapboxItem[] | undefined => {
  return data?.map((item, index) => ({
    ...item,
    id: index,
    currencies: createRandomArray(NAMES_CURRENCY, 4)
  }));
};

export { updateDataBanks };
