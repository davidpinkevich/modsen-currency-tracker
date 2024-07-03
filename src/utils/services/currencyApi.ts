import { createQueryCurrencies } from "@utils/helpers/createQueryCurrencies";
import { type TypeDataCurrency } from "@src/types";

import { NAMES_CURRENCY } from "@constants/index";
import axios from "axios";

class CurrencyService {
  async getCurrencies(): Promise<
    { data: { data: TypeDataCurrency } } | undefined
  > {
    try {
      return await axios.get(createQueryCurrencies(NAMES_CURRENCY));
    } catch (error) {
      console.error(error);
    }
  }
}

const serviceCurrencies = new CurrencyService();

export { serviceCurrencies };
