import { createQueryCurrencies } from "@utils/helpers/createQueryCurrencies";
import { type TypeDataCurrency } from "@src/types";

import { NAMES_CURRENCY } from "@src/constants";
import axios from "axios";

class CurrencyService {
  async getCurrencies(): Promise<
    { data: { data: TypeDataCurrency } } | undefined
  > {
    try {
      const response = await axios.get(createQueryCurrencies(NAMES_CURRENCY));
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

const serviceCurrencies = new CurrencyService();

export { serviceCurrencies };
