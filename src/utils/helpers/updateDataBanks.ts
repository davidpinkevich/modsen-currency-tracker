import { SELECT_QUOTES } from "@constants/index";
import { type MapboxItem, type UpdateMapboxItem } from "@src/types";

const createRandomArray = (
  arr: Array<{ title: string }>,
  value: number
): string[] => {
  const set = new Set();

  while (set.size < value) {
    set.add(arr[Math.floor(Math.random() * arr.length)]);
  }

  const newArr = Array.from(set) as Array<{ title: string }>;
  return newArr.map((item) => item.title);
};

const updateDataBanks = (
  data: MapboxItem[] | undefined
): UpdateMapboxItem[] | undefined => {
  return data?.map((item, index) => ({
    ...item,
    id: index,
    currencies: createRandomArray(SELECT_QUOTES, 2)
  }));
};

const filterUpdateDataBanks = (arr: UpdateMapboxItem[], filter: string) => {
  return arr.filter((item) => {
    if (
      item.currencies.find((item) =>
        item.toLowerCase().includes(filter.trim().toLowerCase())
      )
    ) {
      return true;
    } else {
      return false;
    }
  });
};

const filterSearchValue = (arr: Array<{ title: string }>, value: string) => {
  return arr.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
};

export { filterSearchValue, filterUpdateDataBanks, updateDataBanks };
